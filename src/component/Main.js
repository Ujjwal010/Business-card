import React from "react";
import './Main.css';
import image from './img.png'



function Main() {
    return (
     <div className='main'>
       <div className='content'>
         <img src={image} className="image" alt="" />
         <h1 className="name">Laura Smith</h1>
         <h4 className="developer">Frontend Developer</h4>
         <p className="web">laurasmith.website</p>
         <button className="button1">Email</button>
         <button className="button2">LinkedIn</button>
         <div className="text">
           <h2 className="title">About</h2>
           <p className="discription">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
           <h2 className="title">Intersts</h2>
           <p className="discription">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
         </div>
         <footer>
         
       </footer>
       </div>
       
     </div>
    );
  }

  export default Main;