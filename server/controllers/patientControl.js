import Patient from "../models/patient.js";

export const createPatient = async(req,res) =>{
  try{
    const registrationId = 'PAT-'+ Math.floor(10000000 + Math.random()*90000000)

    const image = req.file? req.file.filename:'';


    const newPatient = await Patient.create({ 
      
      ...req.body,
      registrationId,
      image
  });
    res.status(201).json(newPatient);

  } catch(error) {
    console.log(error);
    res.status(500).json({message : error.message})
  }

}

export const getPatient = async(req,res) => {
  try {
    const page = parseInt(req.query.page) ||1;
    const limit = parseInt(req.query.limit) ||6;
    const skip = (page-1)*limit;
    const patients = await Patient.find()
    .skip(skip)
    .limit(limit)
    const totalPatients = await Patient.countDocuments();
    const totalPages = Math.ceil(totalPatients/limit)
    res.status(200).json({
        patients,
        totalPatients,
        totalPages
    })
  } catch(error){
    res.status(500).json({message : error.message})
  }
}

export const getPatientById = async(req,res) => {
  try{
    const patient = await Patient.findById(req.params.id)
    res.status(200).json(patient);
  } catch(error){
    res.status(500).json({message : error.message})
  }
}

export const getPatientAndUpdate = async(req,res) => {
  try{
    const updatedData = {
      
       ...req.body

      };
    
      if(req.file){
        updatedData.image = req.file.filename;
      }
    const updatePatient = 
    await Patient.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {new:true}
    );
    res.status(200).json(updatePatient);
  }catch(error){
    res.status(500).json({message : error.message})
  }
}

export const getPatientAndDelete = async(req,res) => {
  try{
    const deletePatient = await Patient.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"Patient Deleted Successfully"});
 } catch(error){
    res.status(500).json({message : error.message})
 }
}