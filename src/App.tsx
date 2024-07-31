import React from 'react';
import AllBooks from './components/AllBooks/AllBooks';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Banner from './components/Banner/Banner';
import BestBooks from './components/BestBooks/BestBooks';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Testimonial from './components/Testimonial/Testimonial';
// aos import
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from './components/Popup/Popup';
import PdfReader from './components/PdfReader/PdfReader';

const App: React.FC = () => {
  const [orderPopup, setOrderPopup] = React.useState<boolean>(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="bg-white dark:bg-gray-900
      dark:text-white duration-200"
      >
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <BestBooks handleOrderPopup={handleOrderPopup} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <PdfReader />
        <Testimonial />
        <Footer />
        <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
      </div>
    </>
  );
};

export default App;
