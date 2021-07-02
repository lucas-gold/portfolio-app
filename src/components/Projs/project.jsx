import * as React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import './projectstyle.css';
import { titles, desc, images, ghlinks, iA, iB, iC, iD, iE, noicon } from "./project-data";

const rows = [0, 1];


export default function App() {
  return (
    <AnimateSharedLayout>
      <div className="pjul">
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map((item, index) => (
          <p key={index}></p>
        ))}
      </motion.ul></div>
    </AnimateSharedLayout>
  );
}

const padLeft = ["100px","130px", "220px", "60px", "130px", "156px", "100px"]
const padRight = ["170px","130px", "220px", "180px", "130px", "156px", "100px"]

//const padLeftIn = ['100px',"109px", "200px", "40px", "110px", "132px", "82px"]
//const padRightIn = ['170px',"109px", "200px", "160px", "110px", "132px", "82px"]

const imgclassname = ['','','','','','','imgicon']

const descLen = ['20px', '20px', '20px', '20px', '20px', '20px', '20px']

export const Project = ({ i }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="pjli" layout onClick={toggleOpen} initial={{ borderRadius: 25 }}>
<AnimatePresence>{!isOpen && <motion.div
  layout
  initial={{opacity: 1 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  style={{position:'absolute'}} //remove if you want dropdown to slide in from right
>

<h4 className="h4outer" style={{position:'relative', fontSize:"35px", display:'inline-block'}}>
<i class={iA[i]} style={{fontSize:"32px"}}></i>
<i class={iB[i]} style={{paddingLeft:"4px"}}></i>
<i class={iC[i]} style={{paddingLeft:"4px"}}></i>
<i class={iD[i]} style={{paddingLeft:"4px"}}></i>
<i class={iE[i]} style={{paddingLeft:"4px", fontSize:"28px"}}></i>
<img alt="" src={noicon[i]} class={imgclassname[i]}></img>
  <span class="padder" style={{paddingLeft:padLeft[i]}}></span>{titles[i]}<span class="padder" style={{paddingRight:padRight[i]}}></span>
  <a href={ghlinks[i]} style={{color:'black'}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
</motion.div>}</AnimatePresence>

<AnimatePresence>{isOpen && <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div style={{paddingBottom:descLen[i]}}>
      <h4 className="h4inner" style={{position:'relative', fontSize:"35px", display:'inline-block'}}>
      <i class={iA[i]} style={{fontSize:"32px"}}></i>
      <i class={iB[i]} style={{paddingLeft:"4px"}}></i>
      <i class={iC[i]} style={{paddingLeft:"4px"}}></i>
      <i class={iD[i]} style={{paddingLeft:"4px"}}></i>
      <i class={iE[i]} style={{paddingLeft:"4px", fontSize:"28px"}}></i>
      <img alt="" src={noicon[i]} class={imgclassname[i]}></img>
        <span class="padder" style={{paddingLeft:padLeft[i]}}></span>{titles[i]}<span class="padder" style={{paddingRight:padRight[i]}}></span>
        <a href={ghlinks[i]} style={{color:'black'}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
<p className="desctext"><br />{desc[i]}</p>


<div
      style={{
        display: "grid",
        gridGap: "40px"
      }}
    >
      {rows.map((rowIndex) => {
          return (
            <motion.div
              class="innerpic"
              style={{
                width:'85%',
                height: 250,
                borderRadius: 20,
                backgroundColor: "#fff",
                opacity: 0.97,
                paddingLeft: "15px",
                paddingRight: "15px",
                marginLeft:'auto',
                marginRight:'auto',
                marginTop: '25px',
                marginBottom: '24%'
              }}
              whileHover={{ scale: 1.3, opacity: 1 }}
              key={`${rowIndex}`}
            ><a href={images[i][rowIndex]} target="_blank"><img alt="" src={images[i][rowIndex]} width="100%" style={{borderRadius:"15px"}}/></a>
            </motion.div>
          );

      })}
    </div>


      </div>

      </motion.div>}</AnimatePresence>
    </motion.li>


  );
};


const items = [0,1,2,3,4,5,6];
