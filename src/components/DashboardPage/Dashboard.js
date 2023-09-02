import React, {useState} from 'react'
import Navbar from '../Navbar';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../Sidebars/Sidebar';
import Footer from '../Footer';
import Heading from './Heading';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import LogoutModal from '../LogoutModel';
// import Collapse from 'react-bootstrap/Collapse';


export default function Dashboard({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen, setOpen1, setOpen2}) {
   const [sidebarToggle, setSidebarToggle] = useState(true)

  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }

  return (
    <div>
      <div id='wrapper'>
        <Sidebar 
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          open1={open1}
          setOpen1={setOpen1}
          handleOpen1={handleOpen1}
          open2={open2}
          setOpen2={setOpen2}
          handleOpen2={handleOpen2}
        />
        {/* content wrapper */}
        <div id='content-wrapper' className='d-flex flex-column'>
          {/* main content */}
          <div id='content'>
            {/* topbar */}
            <Navbar 
              handleSidebar={handleSidebar}
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
            {/* begin page content */}
            <div className='container-fluid'>
              <Heading />
              <Row1 />
              <Row2 />
              <Row3 />
            </div>
            {/* container-fluid */}
          </div>
          {/* end of main content */}
          {/* footer */}
          <Footer />
          {/* end of footer */}
        </div>
        {/* end of content wrapper */}
      </div>
      {/* end of page wrapper */}
      <ScrollToTop />
      <LogoutModal />
    </div>
  )
}
