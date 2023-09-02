import React, { useState } from 'react'
import Card from './Card'
import Footer from '../../Footer'
import LogoutModel from '../../LogoutModel'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'


export default function Cards({handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen, setOpen1, setOpen2 }) {
  const cardData = [
    {
      cardtype: 'card border-left-primary shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
      heading: 'Earning (Monthly)',
      content: '$40,000',
      progress: false,
      icon: 'fas fa-calender fa-2x text-gray-300',
    },
    {
      cardtype: 'card border-left-success shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-success text-uppercase mb-1',
      heading: 'Earning (Annual)',
      content: '$215,000',
      progress: false,
      icon: 'fas fa-dollar-sign fa-2x text-gray-300',
    },
    {
      cardtype: 'card border-left-info shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-info text-uppercase mb-1',
      heading: 'Tasks',
      content: '50%',
      progress: true,
      icon: 'fas fa-clipboard-list fa-2x text-gray-300',
    },
    {
      cardtype: 'card border-left-warning shadow h-100 py-2',
      textcolor: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
      heading: 'Pending Request',
      content: '18',
      progress: false,
      icon: 'fas fa-comments fa-2x text-gray-300',
    },
  ]

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
        <div id='content-wrapper' class='d-flex flex-column'>
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
              <div class='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 class='h3 mb-0 text-gray-800'>Cards</h1>
              </div>
              <div class='row'>
                {cardData.map((card) =>(
                  <Card 
                    cardType={card.cardtype}
                    textColor={card.textcolor}
                    heading={card.heading}
                    content={card.content}
                    progress={card.progress}
                    icon={card.icon}
                  />
                ))}
              </div>
              <div class='row'>
                <div class='col-lg-6'>
                  {/* default card example */}
                  <div class='card mb-4'>
                      <div class='card-header'>Default card example</div>
                      <div class='card-body'>
                        This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                      </div>
                  </div>

                  {/* basic card example */}
                  <div class='card shadow mb-4'>
                    <div class='card-header py-3'>
                      <h6 class='m-0 font-weight-bold text-primary'>
                        Basic card Example
                      </h6>
                    </div>
                    <div class='card-body'>
                      The styling for this basic card examples created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                    </div>
                  </div>
                </div>
                <div class='col-lg-6'>
                  {/* Dropdown card example */}
                  <div class='card shadow mb-4'>
                    {/* card header dropdown */}
                    <div class='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                      <h6 class='m-0 font-weight-bold text-primary'>
                        Dropdown Card Example
                      </h6>
                      <div class='dropdown no-arrow'>
                        <a 
                          class='dropdown-toggle'
                          href='#'
                          role='button'
                          id='dropdownMenuLink'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false' >
                          <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                        </a>
                        <div 
                        class='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                        aria-labelledby='dropdownMenuLink' >
                          <div class='dropdown-header'>Dropdown Header</div>
                          <a class='dropdown-item' href='#'>
                            Action
                          </a>
                          <a class='dropdown-item' href='#'>
                            Another action
                          </a>
                          <div class='dropdown-divider'></div>
                          <a class='dropdown-item' href='#'>
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div class='card-body'>
                      Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
                    </div>
                  </div>

                  {/* collapsable card example */}
                  <div class='card shadow mb-4'>
                    <a 
                      href='#collapseCardExample'
                      class='d-block card-header py-3'
                      data-toggle='collapse'
                      role='button'
                      aria-expanded='true'
                      aria-controls='collapseCardExample'
                    >
                      <h6 class='m-0 font-weight-bold text-primary'>
                        Collapsable card example
                      </h6>
                    </a>
                    {/* card content collapse */}
                    <div class='collapse show' id='collapseCardExample'>
                      <div class='card-body'>
                        This is a collapsable card example using Bootstrap's built in collapse functionality.{''}
                        <strong>Click on the card header</strong> to see the card body collapse and expand!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* container fluid */}
          </div>
          {/* end of main content */}
          {/* footer */}
          <Footer />
          {/* end footer */}
        </div>
        {/* end of page wrapper */}
      </div>
      <ScrollToTop />
      <LogoutModel/>
    </>
  )
}
