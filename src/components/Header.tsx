import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="flex max-w-7xl mx-auto px-4 justify-between items-center">
        <h1 className="text-xl font-bold">Dieng Adventure</h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about-us">About Us</Link>
            </li>
            <li>
              <Link href="#our-services">Our Services</Link>
            </li>
            <li>
              <Link href="#teams">Teams</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
