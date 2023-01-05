import logo from "./logo.png";
import earnlogo from "./earnlogo.jpeg";
// import { useEffect } from "react";
// import { useState } from "react";
import { imageAdd } from "./data";

import file from "./file.png";
import car from "./car.png";
import earn from "./earn.jpeg";
import carcoverage from "./carcoverage.jpeg";
import pocket from "./pocket.jpeg";
import flexibility from "./flexibility.jpeg";

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
                  <select  name="" id="select1">
                
                        <option value="">Chevrolet</option>
                        <option value="">Fiat</option>
                        <option value="">Fort</option>
                        <option value="">Honda</option>
                    
                  </select>
                
                  <select name="" id="">
                     <option value="">Aveo</option>
                     <option value="">Cruze</option>
                     <option value="">Opta</option>
                     <option value="">Captiva</option>
                  </select>
                </div>
             
                <p>Sharing days</p>
                <input type="range" id="range"  min="0" max="30" step="1"  />
               
                <p class="font">Your monthly earning upto</p>

                <div class="rupees">
                    <p>₹ 0</p> 
                </div>
               

            </div>
            <div class="box2">
                <div>
                   <img src={earnlogo} alt="" />
                </div>
                <div >
                    <div><p class="font">Earn Joining Bonus of Upto</p></div>
                  
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
            <div id="first-box">
            <p>Sharing is Earning</p>
            <p>Share your car and earn upto ₹50000</p>
            <button id="button">START EARNING</button>
            </div>
           
            <div id="empty-box">
                <h1>jdckdcn</h1>
                <h3>jncjkdcn</h3>

            </div>
        </div>

        </div>
    </div>
    <div id="steps">
        <p>3 SIMPLE STEPS TO START SHARING AND EARNING</p>
        <hr />
        <div>
            
            <div>
                <div>
                    <img src={file} alt="" />

                </div>
                <p class="font">Tell us about yourself</p>
                <p>Share your car details with us throuth this <a href="">form</a> and shedule a car inspection from our experts</p>

              </div>
              <div>
                 <div>
                    <img src={car} alt=""/>
                 </div>
                <p class="font">Setup for sharing</p>
                <p>Signup on the app and provide your PAN, Bank and Address details and you are now ready to share your car</p>

              </div>
              <div>
                  <div>
                    <img id="earn" src={earn} alt="" />
                  </div>
                
                <p class="font">Share and earn</p>
                <p>Select the sharing dates for your car. Our experts will visit you to install the safty devices and you are ready to earn</p>

               </div>

            
              
            
        </div>
    </div>
    <div id="whyShare">
        <div id="why"><p>Why share your car with us?</p></div>
        <div>
            <img src={carcoverage} alt="" />
            <p class="font">Major damage and repair coverage</p>
            <br />
            <p>We provide damage cover and handle repairs in case of damage during a booking</p>
        </div>
        <div>
        <img src={pocket} alt="" />
            <p class="font">Earning from home</p>
            <br />
            <p>Our hosts earn upto Rs.50000 per month along with added bounces for sharing their cars</p>
        </div>
        <div>
        <img src={flexibility} alt="" />
            <p class="font">Power of flexibility</p>
            <br />
            <p>Using our mobile app, you can share your convenience and shedule</p>
        </div>
        <div>
        <img src={car} alt="" />
            <p class="font">Safe, secured and smoot</p>
            <br />
            <p>We install safety and keyless entry devices to make sharing your car a safe, secured and smoooth process</p>
        </div>
    </div>
    <div id="videos">
        <p>HEAR FROM OUR HOSTS</p>
        <div>
            <div>
                <div class="video">
                <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/SaiKrishna.png"></img>
                </div>
                <div class="play">
                <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" class="host-testimonials-container-blocks-block-play-icon" />
                </div>
               
                <div class="subBox">
                    <p>Sai Krishna, Loan Officer, Hyderabad </p>
                    <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg" class="host-testimonials-container-blocks-block-description-image" />
                    <p class="font">Passive income for me</p>
                    <p>Around 10-15 % of the amount I receive goes to EMI, rest of the amount is a passive income for me</p>
                   

                </div>
            </div>
            <div>
            <div class="video">
                <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/Vanshika.png"></img>
                </div>
                <div class="play">
                <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" class="host-testimonials-container-blocks-block-play-icon" />
                </div>
               
                <div class="subBox">
                   <p>Vanshika, HR, Mumbai</p>
                   <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg" class="host-testimonials-container-blocks-block-description-image" />
                    <p class="font">Car is paying for itself</p>
                    <p>I am in love with this idea and enjoying my time with Zoomcar host. My car is paying for itself and that's great benefit</p>

                </div>
            </div>
            <div>
            <div class="video">
                <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/Rahul.png"></img>
                </div>
                <div class="play">
                <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" class="host-testimonials-container-blocks-block-play-icon" />
                </div>
               
                <div class="subBox">
                    <p>Rahul, Banglore</p>
                    <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg" class="host-testimonials-container-blocks-block-description-image" />
                    <p class="font">Great Return n investment</p>
                    <p>Average I earn ₹20-26k per month, that's a great return on investment on my car </p>

                </div>
            </div>
           
        </div>
    </div>
    <div id="gift">
        <img src="https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/ZH_referral_banner_app_02.jpg" alt="" />
    </div>
    <div id="questios"></div>
    <div id="confused"></div>
  </div>


    
    </>
}

export default Host