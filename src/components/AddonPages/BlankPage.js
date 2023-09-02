import React, {useState} from 'react'
import Footer from '../Footer'
import LogoutModal from '../LogoutModel';
import Navbar from '../Navbar';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../Sidebars/Sidebar';

export default function BlankPage({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
setOpen1, setOpen2}) {

  const [SidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebar = () =>{
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }

  return (
    <>
      <div id='wrapper'>
        <Sidebar
          sidebarToggle={SidebarToggle}
          setSidebarToggle = {setSidebarToggle}
          handleSidebar = {handleSidebar}
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
          {/* Main content */}
          <div id='content'>
            {/* Topbar */}
            <Navbar
              sidebarToggle={SidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar} 
              />
              {/* Begin Page Content */}
              <div className='container-fluid'>
                {/* Page heading */}
                <h1 className='h3 mb-4 text-gray-800'>BlankPage</h1>
              </div>
              {/* container fluid */}
          </div>
            {/* end of main content */}
            {/* Footer */}
            <Footer />
            {/* End of footer */}
        </div>
          {/* end of content wrapper */}
      </div>
      {/* end of page wrapper */}
      <ScrollToTop />
      <LogoutModal />
    </>
  )
}
