import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Process from './components/process/process';
import Service from './components/service/service';
import Feature from './components/feature/feature';
import Screenshot from './components/screenshot/screen';
import Testimonial from './components/testimonial/testimonial';
import Pricing from './components/pricing/pricing';
import Post from './components/post/post';
import Footer from './components/footer/footer';
import Preload from './components/preloader/preload';
import ScrollTop from './components/scrolltop/scrolltop';
import { useEffect } from 'react';
import AOS from 'aos';
function App() {
  useEffect(() => {
		AOS.init({
			offset: 100,
      delay: 0
		});
	  }, []);
  return (
    <>
        <Preload />
        <ScrollTop />
        <Header />
        <Banner />
        <Process />
        <Service />
        <Feature /> 
        <Screenshot />
        <Testimonial />
        <Pricing />
        <Post />
        <Footer />
    </>
  );
}

export default App;
