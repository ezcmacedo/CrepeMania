import React from "react";


// Create a first model dropdown to show flavors of this option

function Sabores() {
  return (
    <div className="flex justify-center py-8 ">
      <button className="bg-green-800 p-3 w-10/12 text-white flex justify-between rounded-3xl">
        <div>Tradicionais</div>
        <div id="animation-dropdown" className="font-bold" > V </div>
      </button>
    </div>
  );
}

export default Sabores;
