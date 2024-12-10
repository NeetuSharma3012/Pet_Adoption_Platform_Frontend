import React from 'react';

const ServicePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">Our Services</h1>
        </div>
      </header> */}

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-black">Our Pet Services</h2>
          
          {/* Service 1 */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-black">Adopt a Pet</h3>
            <p className="text-black mb-4">Find your new furry friend through our easy-to-use adoption platform. We match you with the perfect pet.</p>
            <a href="/pets" className="text-lime-500 hover:text-gray-600 font-semibold">Learn More</a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-black">Pet Care</h3>
            <p className="text-black mb-4">Get expert tips and resources on how to take care of your new pet, from grooming to nutrition and more.</p>
            <a href="/pet-care" className="text-lime-500 hover:text-gray-600 font-semibold">Learn More</a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-black">Pet Training</h3>
            <p className="text-black mb-4">Sign up for pet training sessions to help your pet be well-behaved, happy, and healthy in their new home.</p>
            <a href="/pet-training" className="text-lime-500 hover:text-gray-600 font-semibold">Learn More</a>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-black">Volunteer with Us</h3>
            <p className="text-black mb-4">Join our volunteer team and help care for pets, assist with adoptions, and more.</p>
            <a href="/#" className="text-lime-500 hover:text-gray-600 font-semibold">Learn More</a>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-black">Donate</h3>
            <p className="text-black mb-4">Support our mission to rescue and care for pets in need by making a donation today.</p>
            <a href="/#" className="text-lime-500 hover:text-gray-600 font-semibold">Donate Now</a>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default ServicePage;
