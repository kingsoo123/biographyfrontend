import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import reg from '../assets/reg.jpeg';
import './style.css';

const Banner = ()=>{

    return(
        <>
       <div className="row d-flex pt-3 m-0"  style={{marginTop:'67px'}}>
           <div className="col-sm col-md-1 col-lg-1">

           </div>
           <div className="col-sm col-md-6 col-lg-6 pr-5" style={{paddingTop:'100px', paddingLeft:'50px', lineHeight: '1.5'}}>
                <h1 style={{fontSize: '2em', fontWeight:'bold', color:'#EE7721', textAlign:'left'}}>The Better Way <br/>To Create Your Biography</h1><br/>
                <p>The Biography helps you achieve financial freedom by enabling you save responsibly and invest on the go.</p><br/>
                <p>Earn 10% - 15.5% view rates.<br/>
                Remember people are watching.
                </p><br/>
                <button className="btn btn-warning my-2 my-sm-0" type="submit"><Link to="/registration" style={{textDecoration: 'none', color:'black'}}>Create a free account</Link></button>
           </div>
           <div className="col-sm-12 col-md-5 col-lg-5 p-4 d-flex justify-content-center">
           <img src={reg} alt="this is for the background" loading="lazy" className="smooth" style={{width:'120%', height:'auto'}}/>
           </div>
       </div>

       <div className="row d-flex pt-3 ml-4 d-flex justify-content-center p-4"  style={{background:'#FBFBFB'}}>
           <div>
           <img src={logo} alt='this is a logo' height="100px"/>
           </div>
        
        <div>
             <h1 style={{color:'#EE7721'}}>Your Story Matters To The World</h1>
            Often devs think thier story is of no use to the world, but I'm here to let you know that, yes! people want to read<br/> about how you scaled through the tough journey of becoming a developer. It will help inspire the next junior or <br/>rookie out there not givr up on their quest. 
         </div>
       </div>

       <div className="row d-flex p-5 m-0 d-flex justify-content-center">
    
        
         <div style={{textAlign:'left'}}>
             <h1 style={{color:'#EE7721'}}>Share responsibly!</h1>
             <p>This is a platform for techies and it's advised that there we'll not accept vain words on this platform.
                        <br/>Plus you can even team up with others to reach joint goals.</p>
         </div>
       </div>

       <div className="d-flex row p-4 justify-content-between m-0">        
            <div className="col-sm col-md-4 col-lg-4 pt-3" style={{textAlign:'center'}}>
            <h1 style={{color:'#EE7721'}}>Enjoy quarterly<br/>
             reviews</h1>
            <i class="fa fa-paw" aria-hidden="true" style={{fontSize:'100px', color:'orange'}}></i>

             <p>This platform enagages the most insoired stories and shares with personally with recruiters who seem interested.</p>
            </div>

            <div className="col-sm col-md-4 col-lg-4 pt-3 " style={{textAlign:'center'}}>
                <h1 style={{color:'#EE7721'}}>Reach multiple<br/>
                     targets</h1>
                    <i class="fa fa-graduation-cap" aria-hidden="true" style={{fontSize:'100px', color:'orange'}}></i>

                    <p>With this platform you're more likely reach multiple recuiters who are here simply to spy on techies who have had consistent career path and whose story are inspiring.</p>
            </div>

            <div className="col-sm col-md-4 col-lg-4  pt-3" style={{textAlign:'center',}}>
                <h1 style={{color:'#EE7721'}}>Get your story<br/>
                 to the world</h1>
                <i class="fa fa-picture-o" aria-hidden="true" style={{fontSize:'100px', color:'orange'}}></i>

                <p>Take advantage of this platform, and get story heard, we know how tedious it is sometimes for techies to want to get their voices heard to the world..</p>
            </div>
        </div>

        <div className="d-flex row justify-content-between p-5">        
            <div className="col-sm col-md-7 col-lg-7 pt-3 foot">
            <h4 style={{color:'#FFC107'}}>The Biographer</h4>
            
             <p>The Biographer helps you reach your target much faster with various stories types.
                        Plus you can even team up with others to reach joint goals.</p>
            <p>Office: Tesmot House, 3 Abdulrahman Okene Close, off Ligali Ayorinde Street, Victoria Island, Lagos.

            contact@thebiographer.com</p>
            <small>© 2020 The Biographer</small>
            </div>

            <div className="col-sm col-md-3 col-lg-3 pt-3 foot">
                <h3 style={{color:'#FFC107'}}>Quick Links</h3>
           <ul style={{listStyleType:'none'}}>
               <li>AutoShare™</li>
               <li>Biographer</li>
               <li>Quick Share</li>
               <li>SafeShare™</li>
               <li>Story Management</li>
           </ul>
            </div>

            <div className="col-sm col-md-2 col-lg-2  pt-3 foot">
            <h3 style={{color:'#FFC107'}}>Company</h3>
           <ul style={{listStyleType:'none'}}>
               <li>About</li>
               <li>FAQs</li>
               <li>Terms of Use</li>
               <li>Privacy Policy</li>
               <li><i class="fa fa-twitter" aria-hidden="true" style={{fontSize:'30px', color:'orange'}}></i>
                <i class="fa fa-linkedin" aria-hidden="true" style={{fontSize:'30px', color:'orange', marginLeft:'20px'}}></i>
                <i class="fa fa-github" aria-hidden="true" style={{fontSize:'30px', color:'orange', marginLeft:'20px'}}></i></li>
           </ul>
            </div>
        </div>
       </>
    )
}

export default Banner;