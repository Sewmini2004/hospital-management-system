import express from "express";
import {
    addNewAdmin, addNewDoctor,
    getAllDoctors,
    getUserDetailes,
    login,
    logoutAdmin, logoutPatient,
    patientRegister
} from "../controller/userController.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../models/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated,addNewAdmin);
router.get("/doctor",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetailes);
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated,logoutPatient);
router.get("/doctor/addnew",isAdminAuthenticated,addNewDoctor);


export default router;