import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import AboutUS from "./Component/aboutuspage";
import ContactUs from "./Component/ContactUS";
import Mission from "./Component/OurMission";
import PrivacyPolicies from "./Component/pricacypolicie";
import CookiePolicy from './Component/cookiepolicie';
import TermsAndConditions from './Component/TermandCondition';
import PaymentPolicy from './Component/paymentpolicies';  
import Sitemap  from './Component/SiteMap'; 
import SocialProofPage from './Component/SocialProof';



function App() {
  return (
    <>
      <BrowserRouter basename="/GODWIT-HOLIDAYS">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Our-Mission" element={<Mission />} />
          <Route path="/Privacy-Policies" element={<PrivacyPolicies />} />
          <Route path="/Cookie-Policy" element={<CookiePolicy />} />
          <Route path="/Terms-And-Conditions" element={<TermsAndConditions />} />
          <Route path="/Payment-Policy" element={<PaymentPolicy />} />
          <Route path="/Site-Map" element={<Sitemap />} />
          <Route path="/Social-Proof" element={<SocialProofPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;