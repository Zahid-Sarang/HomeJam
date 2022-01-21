import React from "react";
import LabelList from './LabelList';

import "./Home.css";
import Background from "../../assest/background_image.png";
import vector from '../../assest/Vector.png'
import list from '../../assest/list.png'
import star from '../../assest/start.png'

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
        <div className="home_list">
        <LabelList img={vector} count='0' label='Label' classname='labelList__cricle' />
        <LabelList img={list } count='0' label='Label' classname='labelList__cricle_option' star={star} />
        <LabelList img={list } count='0' label='Label' classname='labelList__cricle_option'  star={star} />
        <LabelList img={list } count='0' label='Label' classname='labelList__cricle_option'  star={star} />
        </div>
        
      </div>
    </section>
  );
};

export default Home;
