import React from "react";

import {labelData} from "../../ConstentData";
import "./Home.css";
import Background from "../../assest/background_image.png";

const Home = () => {
  return (
    <section className="home">
      <img src={Background} alt="background_Image" className="home__img" />
      <div className="home__content">
        <div className="home__Cari">
          <h1>Cari Cari</h1>
        </div>
        <div className="home__contentText">
          <p>
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
