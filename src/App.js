import React, {useState} from 'react'
import AddContentButton from './components/AddContentButton';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import './index.css';


function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <h1>Home Page</h1>
      <AddContentButton />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
