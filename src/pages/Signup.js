import React from 'react'
import Header from '../components/Header';
import SignupSigninComponent from '../components/SignupSignin';
import piggybank from "../assets/3d-render-black-hand-put-gold-coin-into-piggy-bank-removebg-preview.jpg"
import image1 from "../assets/Mar-Business_11-removebg-preview.jpg"
import image2 from "../assets/6217481-removebg-preview.jpg"
function Signup() {
  return (
    <div className='container'><Header/>
    <div className='container-2'>
    <div className='wrapper'>
    <SignupSigninComponent/>
    </div>
    <div className='text-container'>
      
      <div class="fading-text">
      <h3 style={{fontSize:"25px",fontWeight:"10px",fontStyle:"italic", marginTop:"2rem"}}>Welcome to <span style={{color:"var(--theme)"
      }}>FinanceX.</span></h3>
      <hr></hr>
      <h3 style={{fontWeight:"normal",marginTop:"1.5rem", fontFamily:"monospace", fontSize:"19px"}}>
      Take Control of Your College Finances with Ease
      </h3>
      <p style={{lineHeight:"1.3",fontFamily:"sans-serif"}}>
      Managing your money while juggling classes and social life can be tough. <span style={{fontStyle:"bold"}}>FinanceX</span> makes it simple to track your expenses, budget smartly, and save for the things that matter most to you.
      </p>
      <p >"True in friendship, honest with money—your financial buddy [App Name]!"</p>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <img style={{height:"6rem"}} src={image2}></img>
        <img style={{height:"6rem"}} src={piggybank}></img>
        <img style={{height:"6rem"}} src={image1}></img>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Signup;