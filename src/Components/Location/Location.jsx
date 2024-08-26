/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/location.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Location = () => {
  useEffect(() => {
    AOS.init({

      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card_left" data-aos="fade-right" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card1" data-aos="fade-left" data-aos-offset="-200">
            <h3 className="location_title"> Loyiha joylashuvi</h3>
            <p className="location_text">
            Samarqand shahrida barpo etilayotgan Minor Avenue turar-joy majmuasi bu tarix va zamonaviylikni birlashtirgan noyob loyihadir.



            </p>
            <p className="location_text">
            Bu joy sizga shaharning eng muhim infratuzilmasiga yaqinlikni, zamonaviy hayotning barcha qulayliklarini taqdim etadi. Shahar markazi, muhim ijtimoiy obyektlar va xizmatlar bir necha qadam masofada joylashgan.

            </p>
            <p className="location_text">
            Majmua zamonaviy arxitektura tamoyillari asosida loyihalashtirilgan boʻlib, Samarqandning tarixiy va madaniy boyliklarini zamonaviy dizayn elementlari bilan uygʻunlashtiradi.            </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
          <span> Minor Avenue </span> — bu Samarqand shahrida zamonaviy turar-joy majmuasida 
yashash orzusi. Loyiha sizga shahar markazidagi farovon hayot, qulaylik 
va tarixiy merosning uygʻunligini taqdim etadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
