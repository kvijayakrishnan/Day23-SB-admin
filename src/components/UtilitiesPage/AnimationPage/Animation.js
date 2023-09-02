import React, {useState} from 'react'
import Footer from '../../Footer';
import LogoutModal from '../../LogoutModel'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'


export default function Animation({handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen, setOpen1, setOpen2}) {

  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () =>{
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
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
        <div id='content-wrapper' className='d-flex flex-column'>
          {/* main content */}
          <div id='content'>
            {/* topbar */}
            <Navbar 
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
            {/* begin page content */}
            <div className='container-fluid'>
              {/* page heading */}
              <h1 className='h3 mb-1 text-gray-800'>Animation Utilities</h1>
              <p className='mb-4'>
                <a href='https://getbootstrap.com/docs'>
                  Bootstrap Documentation1
                </a>{' '}
                page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.
              </p>
              {/* content row */}
              <div className='row'>
                {/* grow in utility */}
                <div className='col-lg-6'>
                  <div className='card position-relative'>
                    <div className='card-header py-3'>
                      <h6 className='m-0 font-weight-bold text-primary'>Grow In animation Utility</h6>
                    </div>
                    <div className='card-body'>
                      <div className='mb-3'>
                        <code>.animated--grow-in</code>
                      </div>
                      <div className='small mb-1'>Navbar Dropdown Example:</div>
                      <nav className='navbar navbar-expand navbar-light bg-light bg-light mb-4'>
                          <a className='navbar-brand' href='#'>
                            Navbar
                          </a>
                          <ul className='navbar-nav m1-auto'>
                            <li className='nav-item dropdown'>
                              <a
                                className='nav-link dropdown-toggle'
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                              >Dropdown</a>
                              <div className='dropdown-menu dropdown-menu-right animated--grow-in'>
                                <a className='dropdown-item' href='#'>
                                  Action
                                </a>
                                <a className='dropdown-item' href='#'>
                                  Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </li>
                          </ul>
                        </nav>
                        <p className="mb-0 small">
                        Note: This utility animates the CSS transform property,
                        meaning it will override any existing transforms on an
                        element being animated! In this theme, the grow in
                        animation is only being used on dropdowns within the
                        navbar.
                      </p>
                    </div>
                  </div>
                </div>
                {/* fade in utility */}
                <div className='col-lg-6'>
                  <div className='card position-relative'>
                    <div className='card-header py-3'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Fade in Animation Utility
                      </h6>
                    </div>
                    <div className='card-body'>
                      <div className='mb-3'>
                        <code>.animated--fade-in</code>
                      </div>
                      <div className='small mb-1'>Navbar Dropdown Example:</div>
                      <nav className='navbar navbar-expand navbar-light bg-light mb-4'>
                        <a className='navbar-brand' href='#'>
                          Navbar
                        </a>
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right animated--fade-in"
                              aria-labelledby="navbarDropdown"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <div className='small mb-1'>Dropdown Button Example:</div>
                      <div className='dropdown mb-4'>
                        <button 
                          className='btn btn-primary dropdown-toggle'
                          type='button'
                          id='dropdownMenuButton'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'
                        >Dropdown</button>
                        <div className='dropdown-menu animated--fade-in' aria-labelledby='dropdownButton'>
                          <a className='dropdown-item' href='#'>
                            Action
                          </a>
                          <a className='dropdown-item' href='#'>
                            Another action
                          </a>
                          <a className='dropdown-item' href='#'>
                            Something else here
                          </a>
                        </div>
                      </div>
                      <p className="mb-0 small">
                        Note: This utility animates the CSS opacity property,
                        meaning it will override any existing opacity on an
                        element being animated!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
      <LogoutModal/>
    </>
  )
}
