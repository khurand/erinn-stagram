import {useState, useEffect} from 'react'
import {projectStorage, projectFirestore} from '../firebase/config'

const useStorage = (file, tags) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    // A chaque fichier ajouté (file), le hook useEffect se lance
    useEffect(() => {
        // Où vont être stockées les images. Crée une référence à l'intérieur de la partie storage de firebase avec le nom du fichier en ref
        const storageRef = projectStorage.ref(file.name)

        // Crée dans la db de firebase une collection 'images' avec la methode collection()
        const collectionRef = projectFirestore.collection('images')


        // Progressbar - Ecoute l'event 'state_changed' du fichier et à chaque trigger, on fait une capture de l'état du fichier pendant le upload avec snap(). On récupère le pourcentage de bytes transférés et on update le state progress avec les données.
        storageRef.put(file).on('state_changed', (snap) => {
            let pourcentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(pourcentage)
        }, 
        // Si il y a des erreurs
        (err) =>  {
            setError(err)
        },
        // Quand le upload est terminé, on prend l'url du fichier transféré dans le stockage
        async () => {
            const url = await storageRef.getDownloadURL()
            // Quand on a l'url du fichier, on crée un document dans la collection contenant l'url, les tags et le timestamp dans la db
            const createdAt = new Date();
            collectionRef.add({url, createdAt, tags})
            setUrl(url);
        });
    },[file, tags])

    return {progress, error, url}
}

export default useStorage