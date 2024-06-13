import express from "express";
import {isAdminAuthenticated, isPatientAuthenticated} from "../models/auth.js";
import {getAllAppointment, postAppointment, updateAppointmentStatus} from "../controller/appointmentController.js";

const router = express.Router();
router.post("/post",isPatientAuthenticated, postAppointment);
router.get("/getall",isAdminAuthenticated, getAllAppointment);
router.put("/update/:id",isAdminAuthenticated, updateAppointmentStatus);

export default router;