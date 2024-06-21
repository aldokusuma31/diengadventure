
const Contact: React.FC = () => {
  return (
    <div>
      <section className="py-20 px-4 bg-stone-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="mt-4 text-lg text-center">
            We are located in the heart of Dieng. Visit us or reach out using the details below:
          </p>
          <div className="mt-10 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-gray-700">
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p className="mt-2">Jl. Raya Dieng No.123</p>
            <p>Dieng, Wonosobo</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="mt-2">Phone: +62 812-3456-7890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
