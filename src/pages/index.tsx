import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className='flex w-full flex-1 flex-col py-8 lg:py-20 text-center bg-gray-800'>
        <div>
          <span>00:00</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
