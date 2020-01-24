import React from 'react'


export default function Footer(){
  return (
    <div className = "footer">
      <style>
        {`
          .footer {
            text-align:center;
          }
          .write-for-us {
            border:3px dashed lightblue;
            width:25%;
            margin:3rem auto;
            font-size:1.5em;
            color:inherit;
            padding:0.5rem;
          }
          .footer-links {
            display:flex;
            justify-content:center;
            margin:4rem 0 4rem 0;
          }
          .footer-links a {
            margin:0 3rem;
            font-size:1.2em;
            color:inherit;
          }
          .footer-links a:hover {
            color:blue;
          }
        `}
      </style>
      <a className = "write-for-us">Write for us</a>

      <div className = "footer-links">
        <a>About</a>
        <a>Contact</a>
        <a>Credits</a>
        <a>Privacy</a>
      </div>

      <p>Content and graphics © 2020</p>
    </div>
  )
}