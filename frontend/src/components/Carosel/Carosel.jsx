import React from "react";
import serja from "../../assets/bodo/serja-bodo.jpg";
import sonowal_kachari_2 from "../../assets/sonowal kachari/flute-sonowal-kachari.webp";

import "../../Css/Carosel.css";
import Carosel_Items from "./Carosel_Items";
import Chevron_Buttons from "./Chevron_Buttons";

function Carosel() {
  return (
    <>
      <div
        id="carouselExample"
        style={{ backgroundColor: "rgb(246, 248, 247)" }}
        className="carousel slide"
      >
        <div className="carousel-inner img-height">
          {/* carosel items in the slider  */}
          <Carosel_Items img={serja} isActive={true} />
          <Carosel_Items img={sonowal_kachari_2} isActive={false} />
        </div>

        {/* chevron left right btn component */}
        <Chevron_Buttons />
      </div>
    </>
  );
}

export default Carosel;
