import React, {useState} from 'react'
import Photo from './Photo'
import photos from '../photos'
import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'

const PhotoContainer = () => {

    const [photo] = useState(photos),
    [filteredPhotos, setFilteredPhotos] = useState([]),
    [isFiltered, setIsFiltered] = useState(false),
    [openMenu, setOpenMenu] = useState(false);


    const handleChange = (e) => {
        const optionVal = e.target.value,
        updatedGrid = [...photo],
        filter = updatedGrid.filter(img => img.age === optionVal)
        
        updatedGrid.splice(filter)
        setFilteredPhotos(filter)
        setIsFiltered(true)
        
        if(optionVal === "all"){
            setIsFiltered(false)
        }
    }

    // Les options du menu select sont ajoutées automatiquement en fonction de l'age
    const dynamicOptions = photos.map((option)=> option.age)
    const optionsWithSet = new Set(dynamicOptions);
    const sortedOptions = [...optionsWithSet].sort();

    // Toggle form menu 
    const toggleMenu = (e) => {
        setOpenMenu(!openMenu)
    }


    return (
        <div id="photo-collection">
            <div className="menu">
                <h1>Photos</h1>
                <div className="actions">
                    <select name="dropdown" className="dropdown" onChange={handleChange}>
                        <option value="all">All</option>
                        {sortedOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <button className="btn" onClick={toggleMenu}>Ajouter</button>
                </div>
            </div>
            {/* Upload form */}
            <div className="add-photo-form">
                {openMenu && <UploadForm />}
            </div>
            <ImageGrid />
            {/* <div className="filtered-grid">
                {isFiltered ? 
                    <div className="grid">
                        {filteredPhotos.map((photo) => (
                            <Photo key={photo._id} photo={photo}/>
                        ))}
                    </div>
                    :           
                    <div className="grid">
                        {photos.map((photo) => (
                            <Photo key={photo._id} photo={photo}/>
                        ))}
                    </div>  
                }
            </div> */}
        </div>
    )
}

export default PhotoContainer
