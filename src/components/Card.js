import React from 'react'

export default function Card({ title, date, imgURL }) {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <p className = "mt3"><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
          </div>
        </div>
      </div>
    </div>
  )
}