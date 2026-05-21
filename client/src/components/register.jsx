import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Styles/register.css';




function PatientRegister({
  formData,
  setFormData,
  editId,
  setEditId,
  setShowForm
}) {

const handleChange = (e) =>{
  const {name,value,files} = e.target;
  setFormData({
    ...formData,
    [name]:files?files[0] :value
  });
}

const handleSubmit = async(e) =>{
  e.preventDefault();

  
  const patientData = new FormData();
  
   patientData.append(
    'firstName',
    formData.firstName
   );
   patientData.append(
    'lastName',
    formData.lastName
   );
   patientData.append(
    'dateOfBirth',
    formData.dateOfBirth
   );
   patientData.append(
    'gender',
    formData.gender
   );
   patientData.append(
    'email',
    formData.email
   );
   patientData.append(
    'phone',
    formData.phone
   );
   patientData.append(
    'streetAddress',
    formData.streetAddress
   );
   patientData.append(
    'city',
    formData.city
   );
   patientData.append(
    'state',
    formData.state
   );
   patientData.append(
    'zipCode',
    formData.zipCode
   );
   patientData.append(
    'bloodGroup',
    formData.bloodGroup
   );
   patientData.append(
    'priority',
    formData.priority
   );
   patientData.append(
    'medicalHistory',
    formData.medicalHistory
   );
   patientData.append(
    'image',
    formData.image
   )

let response;
 if(editId){
  response = await fetch(`http://localhost:5000/patients/${editId}`,
    {
      method:'PUT',
      body:patientData
    }
  );

 }else{
  response = await fetch('http://localhost:5000/patients',
  {
    method:'POST',
    body:patientData
  }
  );
 }



if (response.ok){

  alert('patient Registered Successfully')

   setEditId(null);

      setFormData({
      firstName :'',
      lastName : '',
      dateOfBirth :'',
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
      
    } else{
      alert('failed to Register Patient')
    }
    setShowForm(false)
   }
 
  return (

<>
  <button onClick={() =>

      setShowForm(false)

    }
     style={{
      background:'none',
      border:'none',
      color:'#2563eb',
      fontSize:'18px',
      cursor:'pointer',
      marginBottom:'20px',
      fontWeight:'bold'
     }}
      
    >
      ⬅️Back To List
    </button>

<Container className='mt-5'>
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="shadow rounded input-card" >
             
          <Card.Body className=' bg-secondary-subtle shadow rounded p-4'>
            <Form onSubmit={handleSubmit}>
                <h2 className='text-center fw-bold p-4 '>Patient Registration Form </h2>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter Your First Name"
                      className='border-success'
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Your Last Name"
                      className='border-success'
                    />
                  </Form.Group >
                </Col>
              </Row>
              <Row>
                <Col>
                 <Form.Group className='mb-3'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control 
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className='border-success'
                    />
                 </Form.Group>
                </Col>
                <Col>
                 
                 <Form.Group className='mb-3'>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select 
                    className='border-success'
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}>
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                 <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@gmail.com"
                      className='border-success'
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Your Mobile Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className='border-success'
                      />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                 <Form.Group className='mb-3'>
                    <Form.Label> Street Address</Form.Label>
                    <Form.Control 
                      as="textarea"
                      rows={2}
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      placeholder="Enter Street Address"
                      className='border-success'
                    />
                 </Form.Group>
               </Col>
               <Col>
                 <Form.Group className='mb-3'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder='Enter City'
                      className='border-success'
                    />
                 </Form.Group>
               </Col>
             </Row>
            <Row>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter State"
                      className='border-success'
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                      type="number"
                      placeholder='Enter Zip Code'
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className='border-success'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group >
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Select 
                  className='border-success'
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}>
                    <option value="" >Select Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>Patient Priority</Form.Label>
                  <Form.Select 
                  className='border-success'
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}>
                    <option value="">Enter Patient Priority</option>
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>Critical</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>Medical History</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    placeholder="Enter Patient Medical History"
                    className='border-success'
                  />
                  
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3 '>
                  <Form.Label>Patient Image</Form.Label>
                  <Form.Control 
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className='border-success'
                  />
                </Form.Group>
               </Col>
            </Row>
            <div className='text-center'
             style={{
              display:'flex',
              justifyContent:'center',
              gap:'20px'
             }}>
             <Button variant='outline-primary' type='submit'>Create Patient Record</Button>
             <Button variant='outline-danger' type='button' onClick={()=>
              setShowForm(false)
             }> Cancel</Button>
           </div>
           </Form>
           
          </Card.Body>
      </Card> 
      </Col>
    </Row>
  </Container>
  </>

)
}

export default PatientRegister;