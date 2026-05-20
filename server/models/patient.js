import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  
  registrationId : {
    type:String,
    unique:true
  },
  firstName :{
    type:String,
    required:true
   },
  lastName :{
    type:String,
    required:true
  },
  dateOfBirth :{
    type:Date,
    required:true
  },
  gender :{
    type:String,
    enum:['Male','Female','Other'],
    required:true
  },
  email :{
    type:String,
    required:false
  },
  phone :{
    type:String,
    required:true
  },
  streetAddress: {
    type:String,
    required:false
  },
  city:{
    type:String,
    required:false
  },
  state:{
    type:String,
    required:false
  },
  zipCode :{
    type:String,
    required:false
  },
  bloodGroup :{
    type:String,
    enum:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
    required:false
  },
  priority :{
    type:String,
    enum:['Normal','Urgent','Critical'],
    required:false
  },
  medicalHistory :{
    type:String,
    required:false
  },
  image :{
    type:String,
    required:false
  },
},
{
    timestamps:true
  }
)

const Patient = mongoose.model('Patient',patientSchema);

export default Patient;
 