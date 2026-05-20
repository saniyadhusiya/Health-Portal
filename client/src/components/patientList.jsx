import { useEffect,useState } from "react";

function PatientList({setFormData,setEditId,setSelectedPatient,setShowForm}){

  const [patients,setPatients] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [searchTerm,setSearchTerm]=useState('');
  const [sortOrder,setSortOrder] = useState('');
  const [totalPages,setTotalPages] = useState(1);
  const patientsPerPage = 6;
  const indexOfLastPatient = currentPage*patientsPerPage;
  const indexofFirstPatient = indexOfLastPatient-patientsPerPage;
 

  const filteredPatients = 
  patients.filter((patient) =>
    patient.firstName
     .toLowerCase()
     .includes(
      searchTerm.toLowerCase()
     )
    ||
    patient.registrationId
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )
    ||
    patient.dateOfBirth
       ?.split('T')[0]
       .includes(searchTerm)
  );
  const sortedPatients = 
  [...filteredPatients].sort(
    (a,b) =>{
      if(sortOrder  ==='nameAsc'){
        return a.firstName.localeCompare(
          b.firstName
        );
      }
      else if(sortOrder === 'nameDesc'){
        return b.firstName.localeCompare(
          a.firstName
        );
      }
      else if(sortOrder ==='dateNewest'){
        return new Date(b.dateOfBirth)
        -
        new Date(a.dateOfBirth)
      }
      else if (sortOrder ==='dateOldest'){
        return new Date(a.dateOfBirth)

        -
        new Date(b.dateOfBirth)
      }
      else if (sortOrder ==='priority'){
        const priorityOrder ={
            Critical:3,
            Urgent:2,
            Normal:1
      };
      return priorityOrder[b.priority]
      -
      priorityOrder[a.priority]
      }
      return 0;
    }
  );
   const currentPatients = sortedPatients;
   
     
  const fetchPatient = async() => {
       const response = await fetch(
        `http://localhost:5000/patients?page=${currentPage}&limit=6`
       )
       const data = await response.json();
       setPatients(data.patients ||[]);
       setTotalPages(data.totalPages);
       console.log(data);
  }
  useEffect (() =>{
     fetchPatient();

    
  },[currentPage])

   const viewPatient = (patient) =>{
    setSelectedPatient(patient);
   }
   
    const editPatient = (patient) =>{
      setFormData({
        ...patient,

        dateOfBirth:
          patient.dateOfBirth
            ?.split('T')[0]
        
    });
      setShowForm(true)
      setEditId(patient._id);

      console.log(patient._id);
    }


    const deletePatient = async(id) =>{
      await fetch(`http://localhost:5000/patients/${id}`,
     {
      method:'DELETE'
     }
    );
    fetchPatient();
  }
   console.log(patients);
  // const totalPages = Math.ceil(filteredPatients.length/patientsPerPage)

  return(

    

<div 
  style={{
   

    overflowX:'auto',
    backgroundColor:'lightgrey',

    minHeight:'100vh',

    padding:'20px'

  }}
>
 <div
   style={{
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:'20px',
     marginBottom:'20px'
  }}
>
  <div
    style={{
     display:'flex',
     gap:'10px',
     marginLeft:'50px'
   }}
   >
<input
      type="text"
      placeholder="search Patient"
      value={searchTerm}
      onChange={(e)=>
        setSearchTerm(e.target.value)
      }
      style={{
        padding:'10px',
        width:'250px'
      }}
    />

    <select
      value={sortOrder}
      onChange={(e)=>
        setSortOrder(e.target.value)
      }
      style={{
        padding:'10px'
      }}
    >
      <option value="">Sort By</option>
      <option value="nameAsc">Name A-Z</option>
      <option value="nameDesc">Name Z-A</option>
      <option value="dateNewest">Newest DOB</option>
      <option value="dateOldest">Oldest DOB</option>
      <option value="priority">Priority</option>
   </select>
 </div>
<button
     onClick={()=>{
      setShowForm(true)
    }}
      style={{
      padding:'10px 20px',
      backgroundColor:'green',
      color:'white',
      border:'none',
      borderRadius:'5px',
      cursor:'pointer',
      marginRight:'50px'
}}
 >
    Add New Patient
   </button>
</div>

  <h2>Patients List</h2>
    <table border="1" style={{width:'100%',borderCollapse:'collapse',marginTop:'20px',fontSize:'14px'}}>

      <thead>
        <tr>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>RegistrationId</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>FirstName</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>LastName</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>DOB</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Gender</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Email</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Phone</th>
         {/* <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Address</th> */}
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>City</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>State</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>ZipCode</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>BloodGroup</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Priority</th>
         {/* <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Med-History</th> */}
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Image</th>
         <th style={{border:'1px solid black',padding:'6px',whiteSpace:'nowrap'}}>Action</th>
        </tr>
      </thead>

    <tbody>
    {
       currentPatients.map((patient) => (
        <tr key={patient._id}> 
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.registrationId}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.firstName}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.lastName}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.dateOfBirth ?.split('T')[0]}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.gender}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.email}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.phone}</td>
        {/* <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.streetAddress}</td> */}
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.city}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.state}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.zipCode}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.bloodGroup}</td>
        <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap',
        color:
          patient.priority == 'Critical'
          ? 'red'
          :patient.priority =='Urgent'
          ? 'orange'
          :'green',
          fontWeight:'bold'
          }}>{patient.priority}</td>
        {/* <td style={{border:'1px solid grey',padding:'6px',whiteSpace:'nowrap'}}>{patient.medicalHistory}</td>  */}
        <td> <img src={`http://localhost:5000/uploads/${patient.image}`} alt="" width="50" /></td>
        <td style={{border:'1px solid grey',padding:'10px'}}> 
          <span  
          onClick={() =>viewPatient(patient)}
          style={{color:'blue',
            cursor:'pointer',
            marginRight:'10px'
          }}>View</span> 
          <span 
           onClick={() => editPatient(patient)}
           style={{
            color:'green',
            cursor:'pointer',
            marginRight:'10px'
          }}>Edit</span>
          <span 
           onClick={() => deletePatient(patient._id)}
           style={{
            color:'red',
            cursor:'pointer',
            marginRight:'10px'
          }}>Delete</span>
          
          
          </td>
      </tr>
        
      ))
    }
    </tbody>
  </table>
 <div style={{
  position:'fixed',
  bottom:'5px',
  left:'50%',
  transform:'translateX(-50%)',
  display:'flex',
  gap:'20px',
  backgroundColor:'white',
  padding:'10px 20px',
  borderRadius:'10px',
  boxShadow:'0 2px 10px rgba(0,0,0,0.2)'

 }}
 
 >
  {
   
    Array.from(
      {length: totalPages},
      (_,index) => (
        <button 
        key={index}
        onClick={()=>setCurrentPage(index+1)

        }
        >
          {index+1}
        </button>
      )
      )
    
      }
  </div>
  
 </div>
)
}



export default PatientList;