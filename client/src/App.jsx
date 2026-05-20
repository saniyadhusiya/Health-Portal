import { useState } from 'react';
import Navbar from './components/navBar.jsx';
import PatientRegister from './components/Register.jsx';
import PatientList from './components/patientList.jsx';
import { Routes,Route, Router } from 'react-router-dom';
import Home from './components/Home.jsx';
function App (){
  const [showForm,setShowForm] = useState(false);
  const [selectedPatient,setSelectedPatient] = useState(null);
  const [editId,setEditId]=useState(null);
  const [formData,setFormData] =
useState({
  firstName:'',
  lastName:'',
  dateOfBirth:'',
  gender:'',
  email:'',
  phone:'',
  streetAddress:'',
  city:'',
  state:'',
  zipCode:'',
  bloodGroup:'',
  priority:'',
  medicalHistory:'',
  image:null
});


  return (
    <>

    <Navbar/>
     <Routes>
       <Route
         path='/'
         element={<Home/>}
        />
        <Route
          path='/patients'
          element={
            <>
            {
              showForm ? (
              <PatientRegister 
       formData={formData}
       setFormData={setFormData}
       editId={editId}
       setEditId={setEditId}
       setShowForm={setShowForm}
              
    />
      ):(
        
    <PatientList
       setFormData={setFormData}
       setEditId={setEditId}
       setSelectedPatient={setSelectedPatient}
       setShowForm={setShowForm}
    />
      )
    }
    {
      selectedPatient && (
        <div style={{
          position:'fixed',
          top:'0',
          left:'0',
          width:'100%',
          height:'100%',
          backgroundColor:'rgba(0,0,0,0.5)',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          zIndex:'1000'
        }}>
      <div
      style={{
        backgroundColor:'white',
        padding:'20px',
        borderRadius:'10px',
        width:'700px',
        maxHeight:'90vh',
        overflow:'auto'
      }}>
          <h2>Patient Detils Here</h2>
  
     <div 
     style={{
         display:'grid',
         gridTemplateColumns:'1fr 1fr',
         gap:'15px',
         marginTop:'20px'
     }}>
        <p>
          FirstName:
          {selectedPatient.firstName}
        </p>
        <p>
          LastName:
          {selectedPatient.lastName}
        </p>
        <p>
          DateOfBirth:
          {selectedPatient.dateOfBirth}
        </p>
        <p>
          Gender:
          {selectedPatient.gender}
        </p>
        <p>
          Email:
          {selectedPatient.email}
        </p>
        <p>
          Phone:
          {selectedPatient.phone}
        </p>
        <p>
          StreetAddress:
          {selectedPatient.streetAddress}
        </p>
        <p>
         City:
          {selectedPatient.city}
        </p>
        <p>
           State: 
          {selectedPatient.state}
        </p>
        <p>
          ZipCode:
          {selectedPatient.zipCode}
        </p>
        <p>
          BloodGroup:
          {selectedPatient.bloodGroup}
        </p>
        <p>
          PatientPriority:
          {selectedPatient.priority}
        </p>
        <p>
          MedicalHistory:
          {selectedPatient.medicalHistory}
        </p>
        <img style={{
          borderRadius:'10px',
          marginBottom:'20px'
        }}
            src={`http://localhost:5000/uploads/${selectedPatient.image}`}
            width="150"
          />
      </div>
          <button style={{
            backgroundColor:'red',
            color:'white'
          }}
          
          onClick={()=>
            setSelectedPatient(null)
          }>
             Close
          </button>
      </div>
        </div>
      )
    }
   </>
 }
        
 />

</Routes>

</>
  );
}

export default App;