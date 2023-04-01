import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  
  constructor() {
    super();
    console.log("This is test");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }




 async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2dfd3bfcb9564c2b8d03157705cd94ce&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , totalResults : parsedData.totalResults})
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2dfd3bfcb9564c2b8d03157705cd94ce&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: this.state.page -1,
        articles: parsedData.articles
    })
    }
    
    handleNextClick = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2dfd3bfcb9564c2b8d03157705cd94ce&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
    this.setState({
        page: this.state.page +1,
        articles: parsedData.articles})
    }
    }
  render() {
    return (
      <div className="container my-3 bg-white">
        <h1 className="text-center text-white">NewsMonk - Top Headlines</h1>


        <div className="row my-10">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?element.title.slice(0,45):""}
                description={element.description?element.description.slice(0,88):"more details"}
                imageUrl={element.urlToImage}
                newsUrl = {element.url}
              />
            </div>;
          })}
        </div>
        <div className="container">
        <div class="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button></div>
        
        </div>
      </div>
    );
  }
}

export default News;
