import { MapPin } from "lucide-react";

export default function ServiceCard({ center, isActive }) {
  return (
    <div className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300 ${isActive ? "scale-105 z-10" : "scale-95 opacity-75"}`}>
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden border-4 ${isActive ? "border-yellow-400" : "border-teal-400"}`}>
        <div className="aspect-video bg-gray-200 relative">
          <img src={center.image || "/placeholder.svg"} alt={center.name} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-sm font-semibold rounded">
            ⭐ {center.rating}
          </div>
          {isActive && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              FEATURED
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg">{center.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{center.description}</p>
          <div className="flex flex-wrap gap-1 my-2">
            {center.services.slice(0, 2).map((service, idx) => (
              <span key={idx} className="px-2 py-1 rounded-full text-xs bg-teal-100 text-teal-700">{service}</span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="flex items-center text-teal-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" /> {center.city}
            </span>
            <button className="px-3 py-1 text-sm bg-teal-500 text-white rounded hover:bg-teal-600">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
