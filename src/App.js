import './App.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Process from './components/process/process';
import Service from './components/service/service';
import Feature from './components/feature/feature';
import Screenshot from './components/screenshot/screen';
import Testimonial from './components/testimonial/testimonial';
import Post from './components/post/post';
import Footer from './components/footer/footer';
import ScrollTop from './components/scrolltop/scrolltop';

function App() {
  useEffect(() => {
		AOS.init({
			offset: 100,
      delay: 0
		});
	  }, []);
  return (
    <>
        <ScrollTop />
        <Header />
        <Banner />
        <Process />
        <Service />
        <Feature /> 
        <Screenshot />
        <Testimonial />
        <Post />
        <Footer />
    </>
  );
}
export default App;
