import {useState} from 'react';
import { CreditCard, Shield, AlertCircle, CheckCircle, Download, UserCheck } from 'lucide-react';
import Navbar from "../Component/navbar";
import EmailContact from "./Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import WhastappChat from "./Homecontainer/whatsapp";
import img1 from "../assets/images/payment.jpg";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";

const PaymentPolicy = () => {

      const images = [img1, img2, img3];
          const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar/>
        <div className="relative h-[130px]"></div>
     <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative">
  {/* Image - this part is fine */}
  <img
    src={images[currentIndex]}
    alt="Hero"
    className="w-full h-full object-cover transition-opacity duration-1000"
  />

  {/* Dots - could be smaller on mobile */}
  <div className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 flex flex-col space-y-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
          index === currentIndex ? "bg-white" : "bg-gray-400"
        } hover:bg-white transition-colors duration-300`}
      />
    ))}
  </div>

  {/* Responsive text */}
  <div className="absolute bottom-[40%] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
    <div className="text-white font-semibold text-2xl sm:text-4xl lg:text-6xl text-center px-4">
      
    </div>
  </div>
</div>
      <header className="bg-white shadow-sm">
       
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Policy</h1>
            <p className="text-gray-600 mb-4">
              <strong>Last updated:</strong> August 26, 2025
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-900">
                This Payment Policy outlines how Godwit Holidays processes payments for travel services, 
                including booking deposits, final payments, refunds, and payment security measures.
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accepted Payment Methods</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Credit & Debit Cards</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium">We accept all major credit & debit cards issued globally:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Visa</li>
                    <li>• Mastercard</li>
                    <li>• American Express</li>
                    <li>• Discover</li>
                    <li>• Diners Club</li>
                    <li>• JCB</li>
                    <li>• UnionPay</li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Alternative Methods</h3>
                </div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Bank transfers (wire transfers)</li>
                  <li>• PayPal</li>
                  <li>• Certified checks</li>
                  <li>• Money orders</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
              <div className="flex items-start space-x-2">
                <UserCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-blue-900 font-medium mb-2">Important Card Holder Requirements:</p>
                  <p className="text-blue-900">
                    <strong>The card holder must be one of the passengers</strong> for all online payments. 
                    If the card holder is not traveling, this will be processed as a third-party payment 
                    with additional verification requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded p-4">
              <p className="text-gray-800">
                <strong>Note:</strong> All payments must be made in the currency specified at the time of booking. 
                We do not accept cash payments for security and record-keeping purposes.
              </p>
            </div>
          </section>

          {/* Third-Party Payments */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Payments</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-900 mb-2">
                <strong>We accept third-party payments</strong> but will require additional information to proceed with your booking.
              </p>
              <p className="text-blue-900">
                If the credit/debit card does not belong to the traveller, it is considered as a third-party payment.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Required Documentation for Third-Party Payments</h3>
            <p className="text-gray-700 mb-4">
              You will be required to send the following details to <a href="mailto:admin@godwitholidays.com" className="text-blue-600 hover:text-blue-800">admin@godwitholidays.com</a> when requested:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">Credit/Debit Card Authorization Form</h4>
                    <p className="text-gray-700 mb-2">Must be filled in and signed by the card holder (scanned copy required)</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4 inline mr-1" />
                      Download Authorization Form
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Credit/Debit Card Copy</h4>
                    <p className="text-gray-700">Coloured scan copy of both sides of the credit/debit card used for the booking</p>
                    <p className="text-sm text-gray-600 mt-1">Note: You may mask the middle digits for security, showing only first 4 and last 4 digits</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Card Holder Identification</h4>
                    <p className="text-gray-700">Coloured scan copy of the card holder's passport or driving license</p>
                    <p className="text-sm text-gray-600 mt-1">Must clearly show photo and personal details matching the card</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded p-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-gray-800">
                    <strong>Processing Time:</strong> Third-party payment verification may take 24-48 hours. 
                    Your booking will be on hold until all required documentation is received and verified.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Confirmation & Guarantees */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Confirmation & Fare Guarantees</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-900 font-medium mb-2">Important Fare Guarantee Policy:</p>
                    <p className="text-blue-900">
                      <strong>Fares are guaranteed only upon ticketing and not upon submission of payment.</strong> 
                      Price changes may occur between payment submission and ticket issuance due to airline 
                      inventory fluctuations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Issue Notifications</h3>
                <p className="text-gray-700">
                  If there is any issue with your payments, we will notify you within 24 hours via:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                  <li>Email to your registered email address</li>
                  <li>SMS to your provided mobile number</li>
                  <li>Phone call for urgent payment issues</li>
                </ul>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Booking Confirmation Process</h3>
                <p className="text-gray-700 mb-3">
                  Please note that all hotel, car rental and tour bookings are only confirmed upon delivery 
                  of complete confirmation details to the email you provided with your reservation.
                </p>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-gray-800">
                    <strong>Prepayment Requirements:</strong> In some cases, prepayment may be required to 
                    receive confirmation from hotels, tour operators, or other service providers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Schedule */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Schedule</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Standard Booking Timeline</h3>
            <div className="space-y-4 mb-6">
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Initial Deposit</h4>
                    <p className="text-gray-700">25% of total trip cost required to secure your booking</p>
                    <p className="text-sm text-gray-600">Due: At time of booking confirmation</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Final Balance</h4>
                    <p className="text-gray-700">Remaining 75% of total trip cost</p>
                    <p className="text-sm text-gray-600">Due: 45 days before departure date</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Late Bookings</h4>
                    <p className="text-gray-700">Bookings made within 45 days of departure</p>
                    <p className="text-sm text-gray-600">Due: Full payment required immediately</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Group Bookings (8+ travelers)</h3>
            <div className="border border-gray-300 rounded-lg p-4 mb-4">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Initial deposit:</strong> 20% of total cost per person</li>
                <li><strong>Second payment:</strong> 40% due 90 days before departure</li>
                <li><strong>Final payment:</strong> Remaining 40% due 60 days before departure</li>
              </ul>
            </div>
          </section>

          {/* Processing Fees */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Fees and Charges</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Credit Card Processing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visa/Mastercard: No additional fee</li>
                  <li>• American Express: 2.5% processing fee</li>
                  <li>• International cards: 3% processing fee</li>
                  <li>• Third-party payments: Additional $25 verification fee</li>
                </ul>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Payment Methods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wire transfers: $25 processing fee</li>
                  <li>• PayPal: 2.9% + $0.30 per transaction</li>
                  <li>• Checks: No additional fee</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded p-4 mt-4">
              <p className="text-gray-800">
                <strong>Currency Conversion:</strong> For payments made in currencies other than USD, 
                conversion rates are determined by your financial institution. Currency fluctuation 
                charges may apply and are the customer's responsibility.
              </p>
            </div>
          </section>

          {/* Payment Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Security</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-800">Secure Processing</h3>
                </div>
                <ul className="space-y-1 text-blue-700">
                  <li>• SSL encryption for all transactions</li>
                  <li>• PCI DSS compliant payment processing</li>
                  <li>• Fraud detection and prevention</li>
                  <li>• Secure payment gateway partners</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-800">Data Protection</h3>
                </div>
                <ul className="space-y-1 text-blue-700">
                  <li>• Credit card details never stored</li>
                  <li>• Tokenized payment processing</li>
                  <li>• Regular security audits</li>
                  <li>• GDPR compliant data handling</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700">
              We partner with trusted payment processors to ensure your financial information is protected. 
              Your payment details are encrypted and processed securely through industry-standard protocols.
            </p>
          </section>

          {/* Failed Payments */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Failed Payments and Late Fees</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Failures</h3>
            <p className="text-gray-700 mb-4">
              If a payment fails due to insufficient funds, expired cards, or other issues, we will:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Notify you within 24 hours via email and phone</li>
              <li>Provide 5 business days to resolve the payment issue</li>
              <li>Charge a $25 failed payment processing fee</li>
              <li>Reserve the right to cancel your booking if payment is not resolved</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Late Payment Policy</h3>
            <div className="border border-gray-300 rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li><strong>1-7 days late:</strong> $50 late payment fee</li>
                <li><strong>8-14 days late:</strong> $100 late payment fee</li>
                <li><strong>15+ days late:</strong> Booking may be cancelled with full cancellation penalties</li>
              </ul>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Processing</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Timeline</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center p-3 border border-gray-300 rounded">
                <span className="text-gray-700">Credit/Debit Cards</span>
                <span className="font-semibold text-gray-800">5-10 business days</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-300 rounded">
                <span className="text-gray-700">PayPal</span>
                <span className="font-semibold text-gray-800">3-5 business days</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-300 rounded">
                <span className="text-gray-700">Bank Transfer</span>
                <span className="font-semibold text-gray-800">3-7 business days</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-300 rounded">
                <span className="text-gray-700">Check</span>
                <span className="font-semibold text-gray-800">10-14 business days</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Conditions</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Refunds processed to original payment method</li>
              <li>Processing fees are non-refundable</li>
              <li>Partial refunds subject to supplier policies</li>
              <li>Refund amounts subject to cancellation terms in our Terms & Conditions</li>
            </ul>

            <div className="bg-gray-100 border border-gray-300 rounded p-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-gray-800">
                    <strong>Important:</strong> Refund processing times may vary depending on your financial institution. 
                    Contact your bank if you don't see the refund after the specified timeframe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Support</h2>
            <p className="text-gray-700 mb-4">
              For payment-related questions, billing disputes, or technical payment issues, contact our payment support team:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Admin Email: <a href="mailto:admin@godwitholidays.com" className="text-blue-600 hover:text-blue-800">admin@godwitholidays.com</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Payment Support: <a href="mailto:payments@godwitholidays.com" className="text-blue-600 hover:text-blue-800">payments@godwitholidays.com</a>
                </span>
              </div>
              <div className="text-gray-700 ml-8">
                <p>Phone: [Your Payment Support Number]</p>
                <p>Hours: Monday-Friday 9:00 AM - 6:00 PM EST</p>
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
              <a href="/terms-conditions" className="text-blue-600 hover:text-blue-800">Terms & Conditions</a>
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
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

export default PaymentPolicy;