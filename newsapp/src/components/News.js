import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {



  articles =  [
    ]

    static propTypes={
      country:PropTypes.string,
      category:PropTypes.string,
    } 

    capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  constructor(props){
    super(props);
    this.state ={
      articles: this.articles,
      loading:false,
      page:1,
      totalResults:0,
     
      }
      document.title=`${this.capitalizeFirstLetter(this.props.category)} - TeaBuddy`;
  }


  async componentDidMount(props){ //async function is a function which, in it's body can wait for promises to complete
     
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e26d6fef28d74c1cb62f4c2111b13896&page=1`
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults})
  }


  handlePrevClick=async ()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fae596b2feae4c9fb2d79c050bd71262`
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page -1,
      articles:parsedData.articles,
      totalResults:parsedData.totalResults})

  }

  handleNextClick=async ()=>{

    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fae596b2feae4c9fb2d79c050bd71262`
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page +1,
      articles:parsedData.articles,
      totalResults:parsedData.totalResults})
     
    

  }
  fetchMoreData= async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fae596b2feae4c9fb2d79c050bd71262`
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles:this.state.articles.cocat(parsedData.articles),
    totalResults:parsedData.totalResults})
    
  };

  render() {  
    return (
      <>
        <h1 className="text-center my-4" >TeaBuddy-Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container"></div>
         <div className="row">
          {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
             <NewsItem   title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
         </div>
          
          })}
         
       </div>
          
        </InfiniteScroll>
        
       
       

      </>
      
    )
  }
}

export default News

// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e26d6fef28d74c1cb62f4c2111b13896



