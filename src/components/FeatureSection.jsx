 import { Star, Truck, Shield } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div>
      {/* Head part */}
      <div className="bg-teal-500 text-white text-center py-6">
        <h1 className="text-2xl font-medium">Why Choose us ?</h1>
      </div>

      {/* Features Grid */}
      <div className=" bg-gray-200 px-4 py-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {/* Top-Rated Garages */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="font-semibold text-sm">Top-Rated Garages</span>
            </div>
            <p className="text-xs text-gray-600">Trusted & reviewed</p>
          </div>

          {/* Live Slot Booking */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-2 bg-teal-500 rounded-sm"></div>
                </div>
              </div>
              <span className="font-semibold text-sm">Live Slot Booking</span>
            </div>
            <p className="text-xs text-gray-600">Quick availability & book instantly</p>
          </div>

          {/* Authorised Parts Dealer */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-sm">Authorised Parts Dealer</span>
            </div>
            <p className="text-xs text-gray-600">Only genuine OEM products</p>
          </div>

          {/* 1-2 Days Delivery */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-sm">1-2 Days Delivery</span>
            </div>
            <p className="text-xs text-gray-600">Speedy part shipments</p>
          </div>

          {/* All Vehicle Services */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="w-5 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="font-semibold text-sm">All Vehicle Services</span>
            </div>
            <p className="text-xs text-gray-600">Bikes, Cars, CVs — all</p>
          </div>

          {/* Transparent Pricing */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-900">₹</span>
                </div>
              </div>
              <span className="font-semibold text-sm">Transparent Pricing</span>
            </div>
            <p className="text-xs text-gray-600">Know your costs upfront</p>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-black w-full"></div>
    </div>
  )
}



