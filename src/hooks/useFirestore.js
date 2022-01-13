import {useState, useEffect} from 'react'
import {projectFirestore} from '../firebase/config'

const useFirestore = (imagesCollection) => {

  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFirestore.collection(imagesCollection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        })
        setDocs(documents)
      })
      return () => unsub();
  }, [imagesCollection])

  return {docs}
}

export default useFirestore
