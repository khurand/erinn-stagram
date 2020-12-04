import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile, tags, opt }) => {

    // File pour initialiser la progress-bar, setFile pour la repasser à null et la faire disparaître. les props tags et opt sont passées au hook useStorage également.
    const {url, progress } = useStorage(file, tags, opt);

    // Efface la progressbar quand on reçoit l'url venant de firebase
    useEffect(()=>{
        if(url) {
            setFile(null)
        }
    },[url, setFile])

    return (
        <motion.div className="progress-bar" initial={{width:0}} animate={{width : progress + '%'}}></motion.div>
    )
}

export default ProgressBar
