import contact_img from "../assets/contact_img.png";


const ContactImage = () => {
  return (
    <img
      src={contact_img}
      alt="Contact Forever"
      className="w-300 h-125 object-contain"
    />
  );
};

export default ContactImage;
