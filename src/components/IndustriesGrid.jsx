// IndustriesGrid.jsx
import { Building2, Coffee, Landmark, Briefcase, Home, Stethoscope, BookOpen, Dumbbell } from "lucide-react";

const INDUSTRIES = [
  { icon: <Building2 className="text-blue-500 w-8 h-8" />, label: "Retail/Showrooms" },
  { icon: <Coffee className="text-yellow-600 w-8 h-8" />, label: "Restaurants/Cafés" },
  { icon: <Landmark className="text-purple-600 w-8 h-8" />, label: "Malls" },
  { icon: <Briefcase className="text-pink-600 w-8 h-8" />, label: "Corporate Parks" },
  { icon: <Home className="text-green-600 w-8 h-8" />, label: "Societies/RWAs" },
  { icon: <Stethoscope className="text-blue-800 w-8 h-8" />, label: "Clinics/Hospitals" },
  { icon: <BookOpen className="text-indigo-600 w-8 h-8" />, label: "Institutes" },
  { icon: <Dumbbell className="text-red-600 w-8 h-8" />, label: "Gyms/Salons" },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Industries We Serve</h2>
        <p className="text-gray-700 text-base">BlookMySpace works for all types of physical spaces. Find your industry!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {INDUSTRIES.map((ind, i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            {ind.icon}
            <span className="mt-4 font-semibold text-blue-800">{ind.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
