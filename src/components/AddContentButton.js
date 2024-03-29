import React, {useState} from 'react'
import UploadForm from './UploadForm';

const AddContentButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <button onClick={handleClick} className="add-content">Ajouter</button>
      {openMenu && <UploadForm />}
    </>
  )
}

export default AddContentButton
