import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SectionFooter from '../sections/SectionFooter';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[64px] lg:mt-[76px]">
        <Outlet></Outlet>
      </div>
      <SectionFooter />
    </div>
  );
};

export default Root;
