import { FC } from 'react';
import Waves from './components/waves/waves';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const Home: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-color_dark text-white">
      <Navbar />

      <main className="flex-grow">
        <div className='-mt-10'>
          <Waves />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;