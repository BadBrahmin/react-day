import React from "react";

// function Aside() {
//   return (
//     <img
//       alt=""
//       className="imageCat"
//       src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpghttps://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"
//     />

//   );
// }

const Aside = ({ activeBtn = "en" }) => {
  const imgData = {
    en: {
      src: `https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpghttps://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg`
    },
    fr: {
      src: `https://www.wwwallaboutcats.com/wp-content/uploads/2018/06/cat-3062885_1280.jpg`
    },
    Hi: {
      src: `https://c8.alamy.com/comp/C0BPA0/indian-domestic-pet-cat-looking-back-C0BPA0.jpg`
    },
    Gr: {
      src: `https://rlv.zcache.com/katze_cat_funny_german_cat_poster-rd6b3da6b03fd436cbac7e9cf4ff5a835_fy0gv_8byvr_540.jpg`
    },
    Ch: {
      src: `http://iheartcats.com/wp-content/uploads/2015/04/shutterstock_205069864.jpg`
    }
  };
  return <img alt="" className="imageCat" src={imgData[activeBtn].src} />;
};

export default Aside;
