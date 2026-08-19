import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const AboutIntro = () => {
  const {assets} = useContext(ShopContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <img
        src={assets.about_img}
        alt="About Forever"
        className="w-500 h-125 object-contain"
      />

      {/* Text */}
      <div className="space-y-5 text-gray-600 leading-relaxed">
        <p>
          SHOPit was born out of a passion for innovation and a desire to
          revolutionize the way people shop online. Our journey began with a
          simple idea: to provide a platform where customers can easily
          discover, explore, and purchase a wide range of products from the
          comfort of their homes.
        </p>

        <p>
          Since our inception, we've worked tirelessly to curate a diverse
          selection of high-quality products that cater to every taste and
          preference. From fashion and beauty to electronics and home
          essentials, we offer an extensive collection sourced from trusted
          brands and suppliers.
        </p>

        <h4 className="font-semibold text-gray-900">Our Mission</h4>

        <p>
          Our mission at SHOPit is to empower customers with choice,
          convenience, and confidence. We're dedicated to providing a seamless
          shopping experience that exceeds expectations, from browsing and
          ordering to delivery and beyond.
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;
