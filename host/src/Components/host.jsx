import logo from "./logo.png";
import earnlogo from "./earnlogo.jpeg";
// import { useEffect } from "react";
// import { useState } from "react";
import { imageAdd } from "./data";
import steps from "./steps.jpeg";
import share from"./share.jpeg";

// import { useEffect } from "react";
import { useRef } from "react";


function Host(){
    // const [image,setImage]=useState();
    // const [data,setData]=useState();
   
//    const ref=useRef()
    // setData(arr);
    let arr=[];
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner4.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner-1.png");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner2.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner3.jpg");




 
imageAdd();

    return <>
       <div id="page">
    <div id="navbar">
        <div id="logo">
            <span class="menu">☰</span>
            
                <span class="logo-icon">
                    <a href="">
                        <img src={logo} alt="" />
                     </a></span>
        
        </div>
        <div id="rightbar">
            <div>
                <p>FAQs</p>
            </div>
            <div>
                <p>Refer & Earn</p>
            </div>
            <div>
                <p><a href="">Sign Up/Login</a></p>
            </div>
            <div>
                <button>START EARNING</button>
            </div>

 
        </div>
       
    </div>
    <div id="earning-container">
        <div id="box1">
            <div class="box1" >
                <p>How much could you earn by sharing your car?</p>
                <div id="select">
                  <select name="" id="">
                
                        <option value="">Chevrolet</option>
                    
                  </select>
                </div>
             
                <p>Sharing days</p>
                <input type="range" id="range"  min="0" max="30" step="1"  />
               
                <p>Your monthly earning upto</p>

                <div class="rupees">
                    <p>₹ 0</p> 
                </div>
               

            </div>
            <div class="box2">
                <div>
                   <img src={earnlogo} alt="" />
                </div>
                <div >
                    <div><p>Earn Joining Bonus of Upto</p></div>
                  
                    <div class="rupees" > <p>
            ₹5000
          </p> 
                      
                       </div>

                </div>

            </div>

        </div>
        <div id="box2">

        <img id="image" src={arr[0]} alt="" />
        <div id="transperent-box">
            <p>Sharing is Earning</p>
            <p>Share your car and earn upto ₹5000</p>
            <button id="button">START EARNING</button>
        </div>

        </div>
    </div>
    <div id="steps">
        <img src={steps} alt="" />
    </div>
    <div id="whyShare">
        <img src={share} alt="" />
    </div>
    <div id="videos"></div>
    <div id="gift">
        <img src="https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/ZH_referral_banner_app_02.jpg" alt="" />
    </div>
    <div id="questios"></div>
    <div id="confused"></div>
  </div>


    
    </>
}

export default Host