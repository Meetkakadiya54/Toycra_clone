import './App.css';
import Header from './shared/component/header';
import Home from './modules/home';
import Contactus from './modules/contactus';
import Footer from './shared/component/footer';
import Aboutus from './modules/aboutus';
import Magnatileshundredproduct from './modules/magnatileshundredproduct';
import Alltoys from './modules/alltoys';
import Bulkorders from './modules/bulkorders';
import Yourcart from './modules/yourcart';
function App() {
  return (
    <>
      <Header />
      <Home />
      <Magnatileshundredproduct />
      <Alltoys />
      <Bulkorders />
      <Contactus />
      <Aboutus />
      <Yourcart/>
      <Footer />
    </>
  );
}

export default App;
