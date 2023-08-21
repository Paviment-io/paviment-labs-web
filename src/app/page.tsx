import { FC } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Banner from './components/banner/banner';
import Products from './components/products/products';
import Contact from './components/contact/contact';

const Home: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-color_secondary">
      <Navbar />

      <main className="flex-grow">
        <div>
          <Banner />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;