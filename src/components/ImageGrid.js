import React from 'react'
import useFirestore from '../hooks/useFirestore'
import moment from 'moment/min/moment-with-locales'
import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {
  const {docs} = useFirestore('images');
  moment.locale('fr')
  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div key={doc.id} style={{display: "flex", flexDirection: "column"}}>
          <motion.div className="img-wrap" onClick={()=> setSelectedImg(doc.url)} whileHover={{opacity: 1}} layout>
            <motion.img src={doc.url} alt="db-firebase-data-images" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1}}/>            
          </motion.div>
          <div className="text">
      <p>tags: {doc.tags}, opt: {doc.opt}, crée le : {moment(doc.createdAt.toDate().toString()).calendar()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
