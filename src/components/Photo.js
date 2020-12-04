import React from 'react'

const Photo = ({photo}) => {
    return (
        <div className="photo">
            <div className="card" key={photo._id}>
                <h3>{photo.name} - age {photo.age}</h3>
                <img src={photo.image} alt="pict" className="img"/>
                <p>{photo.description}</p>
            </div>
        </div>
    )
}

export default Photo
