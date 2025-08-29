import { useState } from "react";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
    setEmail("");
  };

  const socialIcons = [
    { icon: Facebook, bgColor: "bg-white", hoverColor: "hover:bg-blue-700" },
    { icon: Twitter, bgColor:  "bg-white", hoverColor: "hover:bg-gray-900" },
    { icon: Instagram, bgColor:  "bg-white", hoverColor: "hover:bg-pink-700" },
    { icon: Facebook, bgColor:  "bg-white", hoverColor: "hover:bg-red-700" }, // Pinterest placeholder
    { icon: Youtube, bgColor:  "bg-white", hoverColor: "hover:bg-red-700" },
    { icon: Facebook, bgColor:  "bg-white", hoverColor: "hover:bg-gray-800" } // TikTok placeholder
  ];

  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="bg-blue-600 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          {/* Mail Icon and Text */}
          <div className="flex items-center gap-4 flex-1">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">
                Inspiration Delivered Straight to Your Inbox
              </h2>
              <p className="text-blue-100 text-sm lg:text-base">
                Be the first to know about trending travel topics and exclusive discounts from Travel Center.
              </p>
            </div>
          </div>

          {/* Email Input and Button */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 bg-white"
              />
              <button
                onClick={handleSubmit}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-pink-600 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4">
            {socialIcons.map((social, index) => (
              <button
                key={index}
                className={`w-12 h-12 ${social.bgColor} ${social.hoverColor} rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-105`}
              >
                <social.icon className="w-6 h-6 text-pink-600" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}