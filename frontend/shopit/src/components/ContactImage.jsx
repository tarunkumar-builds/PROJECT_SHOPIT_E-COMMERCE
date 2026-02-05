import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const ContactImage = () => {
  const {assets} = useContext(ShopContext);
  return (
    <img
      src={assets.contact_img}
      alt="Contact Forever"
      className="w-300 h-125 object-contain"
    />
  );
};

export default ContactImage;
