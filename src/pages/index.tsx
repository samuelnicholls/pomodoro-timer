import type { NextPage } from 'next';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Timer from '@/components/Timer';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col p-8 lg:py-20 text-center bg-gray-800">
        <div className="m-auto">
          <Timer />
          <div className="mt-8">
            <Button />
            <Button />
          </div>
          {/* <div>
            <button>Settings</button>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
