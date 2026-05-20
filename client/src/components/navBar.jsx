import {Link} from 'react-router-dom'


 function Navbar() {
  return (
  <nav style={{
    backgroundColor:'#0f172a',
    padding:'15px 30px',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center'
  }}>

    <h2 style={{
      color:'white',
      fontFamily:'sans-serif',
      fontSize:'23px'
    }}
    
    >WELCOME HERE!!</h2>
    <ul style={{
      display:'flex',
      gap:'20px',
      listStyle:'none',
      margin:'0',
      padding:'0'
    }}>
      <li style={{
        paddingLeft:'740px'
      }}> <Link to ="/">Home</Link> </li>
      <li> <Link to="/patients">Patient Registration</Link> </li>
    </ul>
  </nav>
 )
}



export default Navbar;