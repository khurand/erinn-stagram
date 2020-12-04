import React, { useState } from 'react'
import ProgressBar from './ProgressBar'


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [tags, setTags] = useState('');
    const [opt, setOpt] = useState('');
    const [selected, setSelected] = useState(null)

    const handleAddPhoto = (e) => {
        const selected = e.target.files[0];
        setSelected(selected)
    };

    const handleAddOption = (e) => {
        const optionVal = e.target.value;
        setOpt(optionVal)
    };

    const handleAddTags = (e) => {
        const tagVal = e.target.value;
        setTags(tagVal)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (selected) {
            setFile(selected)
            setTags(tags)
            setOpt(opt)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpg)')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleAddPhoto} accept="image/png, image/jpeg"/>
            <label htmlFor="tags">tags</label> 
            <input type="text" name="tags" id="tags" onChange={handleAddTags}/>
            <select name="dropdown" className="dropdown" onChange={handleAddOption}>
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button type="submit">Envoyer</button> 
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && 
                    <ProgressBar file={file} setFile={setFile} tags={tags} opt={opt} />
                }
            </div>
        </form>
    )
}

export default UploadForm
