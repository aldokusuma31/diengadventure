const OurService: React.FC = () => {
    return (
      <section className="our-service py-20 bg-stone-700 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service bg-stone-800 p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold">Paket Wisata Dieng</h3>
              <p className="mt-4 text-white">Jelajahi keindahan alam Dieng dengan berbagai paket yang kami tawarkan, mulai dari perjalanan harian hingga paket liburan panjang.</p>
            </div>
            <div className="service bg-stone-800 p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold">Tur Pribadi dan Grup</h3>
              <p className="mt-4 text-white">Kami melayani perjalanan untuk individu, pasangan, keluarga, dan grup besar dengan itinerary yang dapat disesuaikan.</p>
            </div>
            <div className="service bg-stone-800 p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold">Trekking dan Hiking</h3>
              <p className="mt-4 text-white">Nikmati pengalaman trekking dan hiking di kawasan pegunungan Dieng yang menantang namun mempesona.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurService;
  