import { FaShoppingBasket, FaSignal } from "react-icons/fa";
export default function Home() {
  return (
    <div className="h-11/12">
      <div className="border w-100 bg-gray-100 p-2 rounded">
        <h2>Header section</h2>
      </div>
      <div class="bg-blue-lightest mt-10 grid grid-cols-3 grid-gap w-full">
        <div class="bg-sky-500 w-5/6 h-48 rounded shadow-md flex card text-yellow-50">
          <div class="w-full flex flex-col">
            <div class="p-4 pb-0 flex-1">
              <div className="flex items-center">
                <div className="text-4xl font-light">
                  <FaSignal />
                </div>
                <div>
                  <h3 class="text-grey-darkest font-bold ms-2">
                    Revenue</h3>
                </div>
              </div>
              <div class="text-xs flex items-center mb-4">
                <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                Total revenue from the customers
              </div>
              <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/Month</span></span>
              <div class="flex items-center mt-4">
                <div class="pr-2 text-xs">
                  <i class="fas fa-wifi text-green"></i> Free WiFi
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-green-200 w-5/6 h-48 rounded shadow-md flex card text-gray-900">
          <div class="w-full flex flex-col">
            <div class="p-4 pb-0 flex-1">
              <div className="flex items-center">
                <div className="text-4xl font-light">
                  <FaShoppingBasket />
                </div>
                <div>
                  <h3 class="text-grey-darkest font-bold ms-2">
                    Complains</h3>
                </div>
              </div>
              <div class="text-xs flex items-center mb-4">
                <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                Total complains from the customers
              </div>
              <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/Month</span></span>
              <div class="flex items-center mt-4">
                <div class="pr-2 text-xs">
                  <i class="fas fa-wifi text-green"></i> Free WiFi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white w-5/6 h-48 rounded shadow-md flex card text-sky-500">
          <div class="w-full flex flex-col">
            <div class="p-4 pb-0 flex-1">
            <div className="flex items-center">
                <div className="text-4xl font-light">
                  <FaShoppingBasket />
                </div>
                <div>
                  <h3 class="text-grey-darkest font-bold ms-2">
                    Complains</h3>
                </div>
              </div>
              <div class="text-xs flex items-center mb-4">
                <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                Total complains from the customers
              </div>
              <span class="text-5xl text-grey-darkest">^720<span class="text-lg">/Month</span></span>
              <div class="flex items-center mt-4">
                <div class="pr-2 text-xs">
                  <i class="fas fa-wifi text-green"></i> Free WiFi
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
// /* <div className="inline-block w-full overflow-hidden  p-2 min-h-full">
// <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-1">
//   <div className="rounded shadow-sm border-2 border-gray-200 " style={{ height: "150px" }}>
//     <div className="grid grid-cols-3 h-4/6">
//       <div className="col-span-2 bg-orange-200">
//         <h1>Image</h1>
//       </div>
//       <div className="col-span-1 bg-red-500">
//         <h1>Text</h1>
//       </div>
//     </div>
//     <div className="bg-sky-500 h-full">
//       <p>Container</p>
//     </div>
//   </div>
//   {/* <div className="card border-2 border-gray-300">
//   <h1>Card will be here</h1>
// </div>
// <div className="card border-2 border-gray-300">
//   <h1>Card will be here</h1>
// </div>
// <div className="card border-2 border-gray-300">
//   <h1>Card will be here</h1>
// </div> */}
// </div>
// </div> */}
