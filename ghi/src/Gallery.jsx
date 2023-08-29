import geeser from "./images/geeser.jpg"
import heli_jump from "./images/heli_jump.jpg"
import pull from "./images/pull.jpg"
import sit from "./images/sit.jpg"
import tandem_fun from "./images/tandem_fun.jpg"
import tempsnip from "./images/tempsnip.jpg"
import yell from "./images/yell.jpg"
import React, { useState } from "react";


function Gallery() {

    return (
      <div className="gallery">
        <img src={geeser} alt="" />
        <img src={heli_jump} alt="" />
        <img src={pull} alt="" />
        <img src={sit} alt="" />
        <img src={tempsnip} alt="" />
        <img src={yell} alt="" />
        <img src={tandem_fun} alt="" />
        <img src={geeser} alt="" />
            <img src={geeser} alt="" />
            
      </div>
    );
}

export default Gallery;
