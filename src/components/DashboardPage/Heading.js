import React from 'react'

export default function Heading() {
  return (
    // page heading
    <div className='d-sm-flex align-items-center justify-content-between mb-4'>
      <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
      <a 
        href='#'
        className='d-sm-flex align-items-center justify-content-between mb-4'
      >
        <i
          className='fas fa-download fa-sm text-white-50'
        ></i>
        Generate Report
      </a>
    </div>
  )
}
