import React from 'react';
import ReactDOM from 'react-dom/client';


let arr=[];
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner4.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner-1.png");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner2.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner3.jpg");

let i=0;
function Add(){
   
    const root = ReactDOM.createRoot(document.getElementById('box2'));
    root.render(
        <>
        <img id="image" src={arr[i]} alt="" />
        <div id="transperent-box">
            <p>Sharing is Earning</p>
            <p>Share your car and earn upto ₹5000</p>
            <button id="button">START EARNING</button>
        </div>
        </>
      
    );
 i++;
    if(i===4)
    {
        i=0;
    }
}
const  imageAdd=()=>{
   
   setInterval(Add,5000);
}
export {imageAdd}