import React from "react";
import SaunaImage from "../images/sauna.jpeg";
import RedlightImage from "../images/redlight.jpeg";
import VibrationTherapyImage from "../images/VibrationTherapyImage.jpeg";
import "./AddonServices.css"; // Import CSS file
import BootImage from "../images/bootimage.jpeg";

const AddonServices = () => {
  return (
    <div className="addon-services-container">
      <section className="addon-service">
        <h2 className="addon-service-header">Redlight Therapy</h2>
        <img
          src={RedlightImage}
          alt="Redlight Therapy"
          className="addon-service-image"
        />
        <p className="addon-service-description">
          Red Light Therapy can be added on with any of our other spa services.
          Infrared Red light therapy (RLT) is a non-invasive treatment that uses
          low-wavelength red or near-infrared light to penetrate the skin and
          stimulate cellular function and improve your skin's appearance. Red
          light therapy is promoted as a treatment for some common skin
          conditions, including:
        </p>
        <ul className="addon-service-list">
          <li>Improve wound healing</li>
          <li>Reduce stretch marks</li>
          <li>Reduce wrinkles, fine lines, and age spots</li>
          <li>Improve facial texture</li>
          <li>Improve psoriasis, rosacea, and eczema</li>
          <li>Improve scars</li>
          <li>Improve sun-damaged skin</li>
          <li>Improve hair growth</li>
          <li>Improve acne</li>
        </ul>
      </section>

      <section className="addon-service">
        <h2 className="addon-service-header">Sauna Blanket</h2>
        <img
          src={SaunaImage}
          alt="Sauna Blanket"
          className="addon-service-image"
        />
        <p className="addon-service-description">
          Relax and detox for 30 minutes with our sauna blanket. This is a great
          add on to any of our body sculpting services. There are many health
          benefits, some listed below:
        </p>
        <ul className="addon-service-list">
          <li>
            Detoxification: The heat helps stimulate sweating, which can aid in
            flushing toxins from the body and support in burning calories and
            weight loss.
          </li>
          <li>
            Pain Relief: Infrared heat may reduce inflammation and provide
            relief from sore muscles, joint pain, or chronic conditions like
            arthritis.
          </li>
          <li>Reduce wrinkles, fine lines, and age spots</li>
          <li>
            Improved Circulation: The increased blood flow helps improve
            oxygenation and nutrient delivery to tissues.
          </li>
          <li>
            Stress Reduction: The heat can promote relaxation, reduce tension,
            and improve mood.
          </li>
          <li>
            Skin Health: Regular use may help improve skin tone and texture by
            promoting blood flow and sweat, which can clear pores.
          </li>
        </ul>
      </section>
      <section className="addon-service last-addon-service">
        <h3 className="addon-service-header">Vibration Therapy Plate</h3>
        <img
          src={VibrationTherapyImage}
          alt="Vibration Therapy"
          className="addon-service-image"
        />
      </section>
      <section className="addon-service last-addon-service">
        <h3 className="addon-service-header">Air Compression Leg Massage</h3>

        <img
          src={BootImage}
          alt="Air Compression Leg Massage"
          className="addon-service-image"
        />
        <p className="addon-service-description">
          Air Compression Leg Massage The air compression leg massager provides
          cyclic air compression around your calves and feet, loosening stiff
          muscles, relieving fatigue and improving blood circulation.
        </p>
      </section>

      {/* BOOK NOW Button with Inline Styles */}
      <button
        onClick={() =>
          (window.location.href = "https://calendly.com/at-the-gspa")
        }
        className="book-now-button"
      >
        BOOK NOW
      </button>
    </div>
  );
};
export default AddonServices;
