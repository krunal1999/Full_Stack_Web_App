// src/HomePage.jsx
import React from "react";

const HomePage = () => {
  const dummyData = {
    title: "Welcome to ABC Manufacturing Co.",
    subtitle: "Innovating the Future of Manufacturing",
    description:
      "We specialize in high-quality manufacturing solutions tailored to meet the needs of our clients.",
    services: [
      {
        id: 1,
        name: "Precision Machining",
        description: "Expert machining services for complex components.",
        icon: "⚙️",
      },
      {
        id: 2,
        name: "Assembly Line Production",
        description: "Efficient assembly line solutions for mass production.",
        icon: "🏭",
      },
      {
        id: 3,
        name: "Quality Control",
        description: "Rigorous testing and quality assurance processes.",
        icon: "✔️",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "John Doe",
        text: "ABC Manufacturing provided exceptional service and quality products that exceeded our expectations.",
      },
      {
        id: 2,
        name: "Jane Smith",
        text: "The team at ABC Manufacturing is professional and efficient. Highly recommended!",
      },
    ],
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "info@abcmanufacturing.com",
    },
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800">{dummyData.title}</h1>
        <h2 className="text-3xl text-gray-600 mt-2">{dummyData.subtitle}</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          {dummyData.description}
        </p>
      </div>

      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {dummyData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dummyData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <p className="italic text-gray-600">"{testimonial.text}"</p>
                <p className="mt-4 font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600">
          Phone: {dummyData.contactInfo.phone}
        </p>
        <p className="text-lg text-gray-600">
          Email:{" "}
          <a
            href={`mailto:${dummyData.contactInfo.email}`}
            className="text-blue-600"
          >
            {dummyData.contactInfo.email}
          </a>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
