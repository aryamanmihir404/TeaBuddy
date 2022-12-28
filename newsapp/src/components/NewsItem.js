import React, { Component } from 'react'
 import PropTypes from 'prop-types'

const NewsItem =(props) =>  {
  
    
           
  
    return (
      <div>
        <div className="card" >
        <img src={props.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">By {!props.author?"Unknown":props.author} on {props.date}</small></p>
            <a href={props.newsUrl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem
