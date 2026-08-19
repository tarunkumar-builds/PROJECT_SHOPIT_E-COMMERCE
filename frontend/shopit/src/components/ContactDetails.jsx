const ContactDetails = () => {
  return (
    <div className="space-y-6 text-gray-600">
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900">Our Store</h4>
        <p>
          54709 Willms Station <br />
          Suite 350, Washington, USA
        </p>
        <p>
          Tel: (415) 555-0132 <br />
          Email: admin@shopit.com
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">
          Careers at SHOPit
        </h4>
        <p>
          Learn more about our teams and job openings.
        </p>

        <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
          Explore Jobs
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
