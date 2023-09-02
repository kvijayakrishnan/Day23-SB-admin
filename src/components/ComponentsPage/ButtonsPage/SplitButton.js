import React from 'react'

export default function SplitButton({button, text, icon, content}) {
  return (
    <div>
      <a href='#' className={button}>
        <span className={text}>
          <i className={icon}></i>
        </span>
        <span className='text'>{content}</span>
      </a>
      <div className='my-2'></div>
    </div>
  )
}
