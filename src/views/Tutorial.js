
import React, { Component } from 'react'
import '../styles/video.css'

const Tutorial = props =>
(
  <div className="container">
  <div className="row">
    <div className="col s12 m8 offset-m2">
    <div className='video-container z-depth-1' style={{top:'20px'}}>
    <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/1HjzkLRdP5k" 
    frameborder="0" 
    allowfullscreen>
    </iframe>
        </div>
    </div>
   </div>
 </div>

)


export default Tutorial