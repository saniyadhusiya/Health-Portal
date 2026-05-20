import express from 'express';
import { createPatient,getPatient,getPatientById,getPatientAndUpdate,getPatientAndDelete} from '../controllers/patientControl.js';
import upload from '../multer.js';

const router = express.Router();

router.post('/patients',upload.single('image'),createPatient);
router.get('/patients',getPatient);
router.get('/patients/:id',getPatientById);
router.put('/patients/:id',upload.single('image'),getPatientAndUpdate);
router.delete('/patients/:id',getPatientAndDelete);
export default router;
