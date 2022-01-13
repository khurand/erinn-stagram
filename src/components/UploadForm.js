import React, { useState } from 'react'
import ProgressBar from './ProgressBar'


const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const [tags, setTags] = useState('')
    const [selected, setSelected] = useState(null)

    //type de fichiers autorisé
    const types =['image/png', 'image/jpeg']

    // Upload les images, .files[0] => selectionner qu'une seule image à la fois
    const handleAddPhoto = (e) => {
        const selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setSelected(selected)
            setError('')
        } else {
            setFile(null)
        }
    };

    // ajout tags
    const handleAddTags = (e) => {
        const tagVal = e.target.value
        setTags(tagVal)
    }

    // Reset le formulaire
    const clear = () => {
        document.getElementById('form').reset()
        setTags('')
        setSelected(null)
    }

    // Envoyer le fichier dans firebase + vérification d'erreur
    const handleSubmit = (e) => {
        e.preventDefault()
        if (selected) {
            setFile(selected)
            setTags(tags)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpg)')
            setSelected(null)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} id='form'>
                <input type="file" onChange={handleAddPhoto} accept="image/png, image/jpeg"/>
                <div className='tags'>
                    <label htmlFor="tags">tags</label> 
                    <input type="text" name="tags" id="tags" onChange={handleAddTags}></input>
                </div>
                <button type="submit">Envoyer</button> 
            </form>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {/* {file && <div>{file.name}</div>} */}
                {file && 
                    <ProgressBar clear={clear} file={file} setFile={setFile} tags={tags} />
                }
            </div>
        </>
    )
}

export default UploadForm
