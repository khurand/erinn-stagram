import React, {useState} from 'react'
import AddContentButton from './components/AddContentButton'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
// import './scss/app.scss'
import './index.css'


function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <h1>Erinn Gram</h1>
      <div className="container">
        <AddContentButton />
        <ImageGrid setSelectedImg={setSelectedImg}/>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </div>
    </div>
  );
}

export default App;
