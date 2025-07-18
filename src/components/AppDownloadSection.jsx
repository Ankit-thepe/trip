export default function AppDownloadSection() {
  return (
    <div>
      <div className="h-0.5 bg-black w-full"></div>
      {/* App Download Section */}
      <div className="bg-gray-200 px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Book Faster with Our App</h2>
              <p className="text-sm text-gray-600 mb-4">
                Book services, get reminders,
                <br />
                track orders & more — all in one app.
              </p>

              <div className="flex gap-2">
                <div className="bg-black rounded-lg px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-white text-xs">GET IT ON</div>
                    <div className="text-white font-semibold text-sm">Google Play</div>
                  </div>
                </div>

                <div className="bg-black rounded-lg px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-white text-xs">Download on the</div>
                    <div className="text-white font-semibold text-sm">App Store</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-4">
              <div className="w-32 h-64 bg-white rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-2 bg-gray-100 rounded-xl">
                  <div className="p-2">
                    <div className="bg-teal-500 h-8 rounded mb-2"></div>
                    <div className="space-y-1">
                      <div className="bg-gray-300 h-3 rounded"></div>
                      <div className="bg-gray-300 h-3 rounded w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-3">
                      <div className="bg-white h-8 rounded shadow-sm"></div>
                      <div className="bg-white h-8 rounded shadow-sm"></div>
                      <div className="bg-white h-8 rounded shadow-sm"></div>
                      <div className="bg-white h-8 rounded shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      <div className="bg-teal-500 h-8"></div>
    </div>
  )
}


