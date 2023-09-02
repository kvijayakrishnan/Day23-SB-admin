import React, {useState} from 'react'
import Footer from '../../Footer'
import LogoutModel from '../../LogoutModel'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'


export default function Borders({handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen, setOpen1, setOpen2}) {

  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () =>{
    setSidebarToggle((prevSidebarToggle) =>!prevSidebarToggle)
  }

  return (
    <>
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
        <div id='content-wrapper' className='d-flex-column'>
          {/* main content */}
          <div id='content'>
            {/* topbar */}
            <Navbar 
              sidebarToggle ={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
            {/* begin page content */}
            <div className='container-fluid'>
              {/* page heading */}
              <h1 className='h3 mb-1 text-gray-800'>Border Utilities</h1>
              <p className='mb-4'>
                <a href='https://getbootstrap.com/docs'>
                  Bootstrap Documentation
                </a>{' '}
                page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.
              </p>
              {/* content row */}
              <div className='row'>
                {/* border left utilities */}
                <div className='col-lg-6'>

                  <div className='card mb-4 py-3 border-left-primary'>
                    <div className='card-body'>.border-left-primary</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-secondary'>
                    <div className='card-body'>.border-left-secondary</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-success'>
                    <div className='card-body'>.border-left-success</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-info'>
                    <div className='card-body'>.border-left-info</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-warning'>
                    <div className='card-body'>.border-left-warning</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-danger'>
                    <div className='card-body'>.border-left-danger</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-dark'>
                    <div className='card-body'>.border-left-dark</div>
                  </div>

                </div>
                {/* boder bottom utilityes */}
                <div className='col-lg-6'>
                  <div className='card mb-4 py-3 border-left-primary'>
                    <div className='card-body'>.border-left-primary</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-secondary'>
                    <div className='card-body'>.border-left-secondary</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-success'>
                    <div className='card-body'>.border-left-success</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-info'>
                    <div className='card-body'>.border-left-info</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-warning'>
                    <div className='card-body'>.border-left-warning</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-danger'>
                    <div className='card-body'>.border-left-danger</div>
                  </div>

                  <div className='card mb-4 py-3 border-left-dark'>
                    <div className='card-body'>.border-left-dark</div>
                  </div>
                </div>
              </div>
            </div>
            {/* container fluid */}
          </div>
          {/* end of main content */}
          {/* footer */}
          <Footer />
          {/* end of footer */}
        </div>
        {/* end of content wrapper */}
      </div>
      <ScrollToTop />
      <LogoutModel />
    </>
  )
}
