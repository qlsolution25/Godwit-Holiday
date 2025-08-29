import { useState } from 'react'
import Experience from "../../assets/Trustevidence/38.svg";
import IATA from "../../assets/Trustevidence/iata-accredited-agent.svg";
import ATOL from "../../assets/Trustevidence/atol-protected.svg";
import ABTA from "../../assets/Trustevidence/member-of-abta.svg";
import SecurePayment from "../../assets/Trustevidence/secured-booking-payments.svg";

const trustData = [
  { img: Experience, label: "38 Years of Experience" },
  { img: IATA, label: "IATA Accredited Agent" },
  { img: ATOL, label: "ATOL Protected" },
  { img: ABTA, label: "Member of ABTA" },
  { img: SecurePayment, label: "Secured Booking & Payments" },
];

const TrustEvidence = () => {
  return (
    <div className="bg-white  rounded-lg p-6 mb-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Why Trust Godwit Holidays?</h1>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50 rounded-lg">
      
      {trustData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-[150px]"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-[150px] h-[100px] object-contain"
          />
          <p className="mt-3 text-sm font-medium text-gray-700">{item.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TrustEvidence;