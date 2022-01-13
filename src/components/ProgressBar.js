import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile, tags, clear}) => {

    // File pour initialiser la progress-bar, setFile pour la repasser à null et la faire disparaître. La prop "tags" est passée au hook useStorage également.
    const { url, progress } = useStorage(file, tags);

    console.log(progress, url)

    // Cache la progressbar quand l'upload est terminé et qu'on reçoit l'url venant de firebase
    useEffect(()=>{
        if(url) {
            setFile(null)
            clear()
        }
    },[url, setFile, clear])

    return (
        <motion.div className="progress-bar" initial={{width:0}} animate={{width : progress + '%'}}></motion.div>
    )
}

export default ProgressBar
