export default function Home() {
  return (
    <div className="h-11/12">
      <div className="inline-block w-full overflow-hidden  p-2 min-h-full">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-1">
          <div className="rounded shadow-sm border-2 border-gray-200 " style={{ height: "150px" }}>
            <div className="grid grid-cols-3 h-4/6">
              <div className="col-span-2 bg-orange-200">
                <h1>Image</h1>
              </div>
              <div className="col-span-1 bg-red-500">
                <h1>Text</h1>
              </div>
            </div>
            <div className="bg-sky-500 h-full">
              <p>Container</p>
            </div>
          </div>
          {/* <div className="card border-2 border-gray-300">
          <h1>Card will be here</h1>
        </div>
        <div className="card border-2 border-gray-300">
          <h1>Card will be here</h1>
        </div>
        <div className="card border-2 border-gray-300">
          <h1>Card will be here</h1>
        </div> */}
        </div>
      </div>

      <div class="bg-blue-lightest">
        <div id="app" class="bg-white w-50 h-60 rounded shadow-md flex card text-grey-darkest">
          <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" />
            <div class="w-full flex flex-col">
              <div class="p-4 pb-0 flex-1">
                <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                <div class="text-xs flex items-center mb-4">
                  <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                  Soho, London
                </div>
                <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                <div class="flex items-center mt-4">
                  <div class="pr-2 text-xs">
                    <i class="fas fa-wifi text-green"></i> Free WiFi
                  </div>
                  <div class="px-2 text-xs">
                    <i class="text-grey-darker far fa-building"></i> 2mins to center
                  </div>
                </div>
              </div>
              <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                Book Now
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}
