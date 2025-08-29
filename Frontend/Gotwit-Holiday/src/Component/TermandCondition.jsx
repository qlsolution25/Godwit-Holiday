import { useState, useEffect } from "react";
import { Mail, Phone, Globe } from 'lucide-react';
import Navbar from "../Component/navbar"
import EmailContact from "./Homecontainer/EmailContact";        
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import WhastappChat from "./Homecontainer/whatsapp";
import img1 from "../assets/images/terms-conditions-banner.png";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";

const TermsAndConditions = () => {
      const images = [img1, img2, img3];
      const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar/>
        <div className="relative h-[130px]"></div>
        <div className="w-full h-[500px]  relative relative bg-pink-500 ">
      {/* Image */}
     <img
  src={images[currentIndex]}
  alt="Hero"
  className="w-full h-screen object-contain transition-opacity duration-1000"
/>
      {/* Dots Navigation */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } hover:bg-white transition-colors duration-300`}
          />
        ))}
        
      </div></div>
      <header className="bg-white shadow-sm">
        
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-gray-600 mb-4">
              <strong>Last updated:</strong> August 26, 2025
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-900">
                Please read these terms and conditions carefully before using our travel services. 
                By booking with Godwit Holidays, you agree to be bound by these terms.
              </p>
            </div>
          </div>

          {/* Definitions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definitions</h2>
            <p className="text-gray-700 mb-4">For the purposes of these Terms and Conditions:</p>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded">
                <strong className="text-gray-900">Company/We/Us/Our:</strong>
                <span className="text-gray-700"> Refers to Godwit Holidays, a travel service provider.</span>
              </div>
              <div className="p-3 border border-gray-200 rounded">
                <strong className="text-gray-900">You/Your/Customer:</strong>
                <span className="text-gray-700"> The individual or entity booking travel services with us.</span>
              </div>
              <div className="p-3 border border-gray-200 rounded">
                <strong className="text-gray-900">Services:</strong>
                <span className="text-gray-700"> Travel planning, booking, consultation, and related travel services provided by Godwit Holidays.</span>
              </div>
              <div className="p-3 border border-gray-200 rounded">
                <strong className="text-gray-900">Suppliers:</strong>
                <span className="text-gray-700"> Third-party providers including airlines, hotels, tour operators, and other travel service providers.</span>
              </div>
              <div className="p-3 border border-gray-200 rounded">
                <strong className="text-gray-900">Travel Documents:</strong>
                <span className="text-gray-700"> Passports, visas, tickets, vouchers, and other documentation required for travel.</span>
              </div>
            </div>
          </section>

          {/* Booking Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Booking Terms and Conditions</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Booking Process</h3>
            <p className="text-gray-700 mb-4">
              All bookings are subject to availability and confirmation from our suppliers. A booking is only confirmed 
              when you receive written confirmation from Godwit Holidays along with payment receipt.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Requirements</h3>
            <p className="text-gray-700 mb-4">
              The person making the booking must be 18 years or older. Minors under 18 must be accompanied by a parent 
              or legal guardian, or have written consent for travel.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Accuracy of Information</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for ensuring all personal information, travel dates, and requirements provided are 
              accurate. Errors may result in additional charges or booking cancellation.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Schedule</h3>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
              <ul className="space-y-2 text-blue-900">
                <li>• Deposit: 25% of total cost required to secure booking</li>
                <li>• Balance: Due 45 days before departure date</li>
                <li>• Late bookings (within 45 days): Full payment required immediately</li>
              </ul>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Accepted Payment Methods</h3>
            <p className="text-gray-700 mb-4">
              We accept major credit cards, bank transfers, and other payment methods as specified during booking. 
              All prices are quoted and payable in the currency specified at time of booking.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Price Changes</h3>
            <p className="text-gray-700 mb-4">
              Prices may change due to currency fluctuations, fuel surcharges, taxes, or supplier rate changes. 
              We will notify you of any significant price increases before final payment.
            </p>
          </section>

          {/* Cancellation Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Refund Policy</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Cancellation by Customer</h3>
            <div className="border border-gray-300 rounded p-4 mb-4">
              <div className="space-y-2 text-gray-700">
                <p><strong>More than 60 days before departure:</strong> 15% cancellation fee</p>
                <p><strong>31-60 days before departure:</strong> 50% cancellation fee</p>
                <p><strong>15-30 days before departure:</strong> 75% cancellation fee</p>
                <p><strong>Less than 15 days before departure:</strong> 100% cancellation fee (no refund)</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Cancellation by Godwit Holidays</h3>
            <p className="text-gray-700 mb-4">
              If we cancel your trip (except for reasons beyond our control), we will provide a full refund or 
              alternative arrangements. We are not liable for additional expenses incurred due to cancellation.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Travel Insurance</h3>
            <p className="text-gray-700 mb-4">
              We strongly recommend comprehensive travel insurance to protect against unforeseen circumstances, 
              medical emergencies, and trip cancellations beyond our control.
            </p>
          </section>

          {/* Customer Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Responsibilities</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Travel Documents</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for obtaining valid passports, visas, health certificates, and other required 
              documentation. We provide guidance but cannot guarantee document approval.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Health and Safety</h3>
            <p className="text-gray-700 mb-4">
              You must inform us of any medical conditions, dietary requirements, or accessibility needs. 
              You are responsible for obtaining necessary vaccinations and medical clearances for travel.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Conduct</h3>
            <p className="text-gray-700 mb-4">
              You agree to conduct yourself appropriately during travel. Disruptive behavior may result in 
              removal from services without refund.
            </p>
          </section>

          {/* Force Majeure */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h2>
            <p className="text-gray-700 mb-4">
              Godwit Holidays is not liable for delays, cancellations, or changes due to circumstances beyond our control, including:
            </p>
            <div className="border border-gray-300 rounded p-4 mb-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>• Natural disasters</li>
                <li>• Weather conditions</li>
                <li>• Political instability</li>
                <li>• Terrorism or security threats</li>
                <li>• Pandemic or health emergencies</li>
                <li>• Supplier bankruptcy or closure</li>
                <li>• Government regulations</li>
                <li>• Transportation strikes</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              In such cases, we will make reasonable efforts to provide alternative arrangements, but additional 
              costs may apply and refunds depend on supplier policies.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Our liability is limited to the total amount paid for our services. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Losses due to supplier defaults or changes in supplier services</li>
              <li>Personal injury, illness, or death (except where caused by our negligence)</li>
              <li>Loss or damage to personal property</li>
              <li>Consequential or indirect damages</li>
              <li>Costs arising from travel delays or missed connections</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-blue-900">
                <strong>Important:</strong> As travel arrangers, we act as intermediaries between you and service suppliers. 
                Supplier terms and conditions also apply to your bookings.
              </p>
            </div>
          </section>

          {/* Privacy and Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our 
              Privacy Policy. By using our services, you consent to our data practices as described in our Privacy Policy.
            </p>
            <p className="text-gray-700 mb-4">
              We may share necessary information with suppliers, authorities, and partners to facilitate your travel arrangements.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, images, itineraries, and travel recommendations, 
              is protected by copyright and remains the property of Godwit Holidays. You may not reproduce, 
              distribute, or use our content for commercial purposes without written permission.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Complaints Procedure</h3>
            <p className="text-gray-700 mb-4">
              If you have concerns about our services, please contact us immediately. We are committed to 
              resolving issues promptly and fairly.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved 
              through mediation or arbitration before court proceedings.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these terms from time to time. Material changes will be communicated with reasonable notice. 
              Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Email: <a href="mailto:info@godwitholidays.com" className="text-blue-600 hover:text-blue-800">info@godwitholidays.com</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Website: <a href="https://www.godwitholidays.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.godwitholidays.com</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Phone: [Your Phone Number]</span>
              </div>
            </div>
          </section>
        </div>
      </main>
        
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Godwit Holidays. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
              <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
       <EmailContact />
            <AboutUS />
            <BritishTravelAwards />
            <WhastappChat/>

    </div>
  );
};

export default TermsAndConditions;