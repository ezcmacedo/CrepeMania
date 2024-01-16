import React from "react";
import { UilInstagram } from "@iconscout/react-unicons";


//  Crete a header menu

function Menu() {
  return (
    //colocando imagem logo
    <div className="w-3/5 m-auto">
      <img src={require("../crepe.png")} alt="My Image" />

      {/* link instagram */}
      <div id="instagram" className="flex justify-center m-5">
        <UilInstagram id="gradient" />
        <a
          className="ml-1  underline font-bold"
          href="https://www.instagram.com/crepemaniagyn/"
        >
          @crepemaniagyn
        </a>
      </div>
    </div>
  );
}

export default Menu;
