import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[64px] lg:mt-[76px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
