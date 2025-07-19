// src/pages/TelecallerRegistration.jsx
import { useState } from "react";
import { FileText, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function TelecallerRegistration() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    profileImage: null
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profileImage: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === "profileImage" && val) {
        data.append("profileImage", val);
      } else {
        data.append(key, val);
      }
    });
    data.append("role", "telecaller");

    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      alert("Telecaller registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Registration error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center py-10 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-6">
          <FileText size={40} className="mx-auto mb-2" />
          {/* <h2 className="text-2xl font-bold">Telecaller Registration</h2> */}
                      <img src="logo.png" width={170} className="mx-auto" height={30} alt="" />

          <p className="text-sm text-white/70">Join BlookMySpace outreach team</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6 text-black">
          <input name="fullName" required placeholder="Full Name" className="input" onChange={handleChange} />
          <input name="email" required type="email" placeholder="Email Address" className="input" onChange={handleChange} />
          <input name="password" required type="password" placeholder="Password" className="input" onChange={handleChange} />
          <input name="phone" required placeholder="Phone Number" className="input" onChange={handleChange} />
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <UploadCloud /> Upload Profile Image
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded font-bold text-white">
          Register as Telecaller
        </button>
        <p className="text-sm text-center mt-4 text-white/80">
          Already have an account? <a className="underline" onClick={()=>navigate('/login')}>Sign in here</a>
        </p>
      </motion.form>

      <style jsx>{`
        .input {
          @apply px-4 py-2 rounded bg-white/10 backdrop-blur-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50;
        }
      `}</style>
    </div>
  );
}
