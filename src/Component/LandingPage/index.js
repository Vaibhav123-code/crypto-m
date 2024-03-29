import React from 'react'
import Button from '../common/Button'
import './style.css'
import gradient from '../../assets/gradient.png'
import iphone from '../../assets/iphone.png'
import {motion} from 'framer-motion'


function LandingPage() {
  return (
    <div className='main-flex'>
        <div className='info-flex'>
          <motion.h1 className='heading1'
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{delay: 0.5,duration:1}}
          >
             Track Crypto
          </ motion.h1>
          <motion.h1 className='heading2'
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{delay: 0.75,duration:1}}
          >
             Real Time
          </motion.h1>
          <motion.p className='info-text'
             initial={{opacity:0, x:50}}
             animate={{opacity:1, x:0}}
             transition={{delay: 1,duration:1}}
          > Track crypto through a public api in real time. Visit the dashboard to do so!
          </motion.p>

          <motion.div className='btn-flex'
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{delay: 1.25,duration:1}}
          >
             <a href='/dashboard' >
                <Button  text={"Dashboard"}/>
             </a>
             <Button text={"Share App"}/>
          </motion.div>
        </div>
        <div className='gradient-div'>
             <img src={gradient} className='gradient' alt='gradient' />  
             <motion.img src={iphone} className='iphone' alt='iphone' 
                 initial={{ y:-10}}
                 animate={{ y:10}}
                 transition={{duration:2,
                           type: "smooth",
                           repeat: Infinity,
                           repeatType: "mirror"
               }}
             />
        </div>

    </div>
  )
}

export default LandingPage