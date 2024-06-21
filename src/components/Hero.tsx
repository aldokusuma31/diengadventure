import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-blue-500 text-white py-20 text-center">
      <Image
        src="/hero.webp"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 bg-slate-500 bg-opacity-50 py-20 px-10 ">
        <h1 className="text-5xl font-bold text-black">DIENG <p className='text-red-500'>Adventure</p></h1>
        <p className="mt-2 text-2xl italic">"Explore the Beauty, Embrace the Adventure"</p>
        <p className="mt-4 text-xl">We are committed to delivering the best travel experiences</p>
      </div>
    </section>
  );
};

export default Hero;
