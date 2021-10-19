import React from "react";
import { useParams } from "react-router";
import Diagonostic from "../Diagonostic/Diagonostic";
import DoctorCons from "../DoctorCons/DoctorCons";
import HomeDelivery from "../HomeDelivery/HomeDelivery";
import HospitalDel from "../HospitalDel/HospitalDel";
import MedicineRetail from "../MedicineRetail/MedicineRetail";
import TeleMedicine from "../TeleMedicine/TeleMedicine";

export default function Servicing() {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <>
      {serviceId === "1" ? (
        <MedicineRetail />
      ) : serviceId === "2" ? (
        <TeleMedicine />
      ) : serviceId === "3" ? (
        <HomeDelivery />
      ) : serviceId === "4" ? (
        <HospitalDel />
      ) : serviceId === "5" ? (
        <Diagonostic />
      ) : serviceId === "6" ? (
        <DoctorCons />
      ) : null}
    </>
  );
}
// if (serviceId === 1) {
//   return <MedicineRetail />;
// } else if (serviceId === 2) {
//   return <TeleMedicine />;
// } else if (serviceId === 3) {
//   return <HomeDelivery />;
// } else if (serviceId === 4) {
//   return <HospitalDel />;
// } else if (serviceId === 5) {
//   return <Diagonostic />;
// } else if (serviceId === 6) {
//   return <DoctorCons />;
// }
