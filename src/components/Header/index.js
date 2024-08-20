import React, { useEffect, useState } from 'react'
import "./styles.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import "../../assets/user.svg";
import coin from "../../assets/SL-020622-4930-02-removebg-preview.jpg"

function Header() {
    const navigate=useNavigate();
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    
    
    useEffect(()=>{
      if(user && location.pathname !== '/analysis'){
        navigate("/dashboard");
      }
    },[user,loading, navigate, location.pathname]);
    
  function logoutfnc()
  {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    toast.success("Logged Out Succeesfully");
    navigate("/");
    }).catch((error) => {
    // An error happened.
    });

  }
  
  return (
    <div className='navbar'>

<p className='logo'><div className='logo-image'><img src={coin} style={{height:"1.94rem",width:"2.4rem",borderRadius:"50%",margin:"0px"}}/></div>FinanceX.</p>

      <div style={{display: "flex", alignItems:"center", gap:"0.1rem"} }> 

      {user && <p className={'logo link'}  onClick={() => navigate('/dashboard')}>
        <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <i class="bi bi-piggy-bank-fill"></i>
          DashBoard</span>
          </p>}   

      {user && <p className={'logo link'}  onClick={() => navigate('/analysis')}><span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <i class="bi bi-cash-coin"></i>
        Lend/Borrowed</span>
      </p>}

      {user && <p className='logo link' onClick={logoutfnc}>
        <span style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <i class="bi bi-door-closed-fill"></i>
          Log Out</span>
          </p>}
      
      </div>
      
    </div>
  )
}

export default Header;