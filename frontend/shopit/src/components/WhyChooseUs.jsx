const WhyChooseUs = () => {
  const items = [
    {
      title: "Quality Assurance",
      desc:
        "We meticulously select and vet each product to ensure it meets our stringent quality standards."
    },
    {
      title: "Convenience",
      desc:
        "With our user-friendly interface and hassle-free ordering process, shopping has never been easier."
    },
    {
      title: "Exceptional Customer Service",
      desc:
        "Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map(item => (
        <div
          key={item.title}
          className="border px-6 py-8 text-center space-y-3"
        >
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
