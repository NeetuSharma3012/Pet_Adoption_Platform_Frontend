'use client';

const PetCare = () => {
  return (
    <div className="bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">Pet Care Services</h1>
      <p className="text-lg mb-6 text-black">
        Our pet care services ensure that your furry, feathery, or scaly friends get the best care possible. From regular checkups to grooming and daycare, we are here to help!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service 1 */}
        <div className="border rounded-lg bg-white p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-black">Grooming Services</h2>
          <p className="text-black">
            We offer professional grooming to keep your pet clean and happy. Services include bathing, nail trimming, and haircuts.
          </p>
        </div>

        {/* Service 2 */}
        <div className="border rounded-lg bg-white p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-black">Pet Health Checkups</h2>
          <p className="text-black">
            Regular checkups by certified veterinarians to ensure your pet stays in top shape.
          </p>
        </div>

        {/* Service 3 */}
        <div className="border rounded-lg bg-white p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-black">Daycare</h2>
          <p className="text-black">
            Our daycare service provides a safe and playful environment for your pets while you're away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetCare;
