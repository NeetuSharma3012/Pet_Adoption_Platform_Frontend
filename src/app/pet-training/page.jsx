'use client';

const PetTraining = () => {
  return (
    <div className="bg-gray-50  p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">Pet Training Services</h1>
      <p className="text-lg mb-6 text-black">
        Unlock your pet&apos;s potential with our expert training services. Whether it&apos;s basic obedience or advanced skills, we have the right program for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Training Program 1 */}
        <div className="border rounded-lg bg-white p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-black">Basic Obedience Training</h2>
          <p className="text-black">
            Teach your pet essential commands such as sit, stay, and come, laying the foundation for good behavior.
          </p>
        </div>

        {/* Training Program 2 */}
        <div className="border rounded-lg bg-white p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-black">Behavioral Training</h2>
          <p className="text-black">
            Address behavioral issues such as aggression, anxiety, or excessive barking with our customized programs.
          </p>
        </div>

        {/* Training Program 3 */}
        <div className="border rounded-lg bg-white p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-black">Advanced Skills Training</h2>
          <p className="text-black">
            Take your pet&apos;s skills to the next level with advanced tricks, agility training, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetTraining;
