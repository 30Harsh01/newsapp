import React, { Component } from 'react'


export default function NewsItem(props) {

  return (
      
    <div className=' container my-2'>
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imgURL} className="card-img-top" alt="Image not found" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className='card-text'><small className='text-muted'>Published By {props.author?props.author:"Unknown"} on {props.date}</small></p>
        <a href={props.newsURL} target='_blank' className="btn btn-sm btn-primary">Read more</a>
      </div>
    </div>
  </div>
  )
}
