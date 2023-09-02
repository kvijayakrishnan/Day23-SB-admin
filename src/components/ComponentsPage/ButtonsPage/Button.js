import React from 'react'

export default function Button({btnClass, iconClass}) {
  return (
    <a href='#' className={btnClass} style={{marginLeft:'4px'}}>
      <i className={iconClass}></i>
    </a>
  )
}
