// AgencyCTA.jsx
import { Megaphone } from "lucide-react";
export default function AgencyCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-700 py-12 text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        <Megaphone className="w-10 h-10 text-yellow-400" />
        <h2 className="text-2xl md:text-3xl font-bold">Are You a Marketing Agency?</h2>
        <p className="mb-4 text-white/90">Book, Track & Manage Client Activations in One Dashboard. Partner as a reseller or agency today.</p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300">Join As Partner Agency</button>
      </div>
    </section>
  );
}
