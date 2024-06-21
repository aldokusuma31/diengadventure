import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-black text-center md:text-left">About Us</h2>
          <p className="mt-4 text-lg text-gray-700">
          Dieng Adventure is a tourism travel agent dedicated to providing unforgettable experiences in the Dieng area and its surroundings. With a professional and experienced team, we are ready to serve your trip with the best service and complete facilities. We understand that every trip is a new adventure, and we are committed to making your every moment full of beautiful memories.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
          <Image
            src="/aboutus.jpg" // Pastikan Anda memiliki gambar ini di dalam folder public/images
            alt="About Us Image"
            width={500}
            height={300}
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
