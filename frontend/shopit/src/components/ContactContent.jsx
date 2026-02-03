import ContactImage from "./ContactImage";
import ContactDetails from "./ContactDetails";

const ContactContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <ContactImage />
      <ContactDetails />
    </div>
  );
};

export default ContactContent;
