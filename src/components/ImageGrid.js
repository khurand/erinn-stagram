import React, { useState } from 'react'
import useFirestore from '../hooks/useFirestore'
import moment from 'moment/min/moment-with-locales'
import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {
  const {docs} = useFirestore('images');
  moment.locale('fr')

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div className="picture" key={doc.id} style={{display: "flex", flexDirection: "column"}}>
          <motion.div className="img-wrap" layout whileHover={{opacity: 1}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1}}>
            <motion.img src={doc.url} alt="db-firebase-data-images" onClick={()=> setSelectedImg(doc.url)}/>            
            <div className="text">
              <p>{doc.tags && 'tags: #'+ doc.tags}</p>
              <p>crée le : {moment(doc.createdAt.toDate().toString()).calendar()}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
