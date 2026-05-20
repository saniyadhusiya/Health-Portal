import React from 'react';
import stethoscope from '../assets/stethoscope.png'


function Home() {
  return (
    <div style={{
      minHeight:'100vh',
      backgroundColor:'lightgray',
      padding:'50px'
    }}>
      <div style={{
        textAlign:'center',
        marginTop:'100px'
      }}>

         <h1 style={{
        fontSize:'50px',
        color:'#109f0d',
        marginBottom:'20px',
        fontFamily:'fangsong'
      }}>
        HEALTH PORTAL!!!
      </h1>
        <img src={stethoscope} alt='' style={{

         width:'250px',

         position:'absolute',

         top:'30px',

         left:'2px'


        }}/>
     
      <p style={{
        fontSize:'22px',
        color:'black',
        marginBottom:'30px',
        fontFamily:'ui-sans-serif'
      }}
      
      >Manage Patient Record<br/>Easily and Securely</p>
      <button style={{
        padding:'15px 30px',
        backgroundColor:'#2563eb',
        color:'white',
        border:'none',
        borderRadius:'8px',
        fontSize:'18px',
        cursor:'pointer'

      }}
      
      
      >
        Register Patient There👉
      </button>
      </div>
    </div>
  )
}

export default Home;