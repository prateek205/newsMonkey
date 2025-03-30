import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultsProps = {
    country: "us",
    pageSize: 10,
    category: "sport",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catergory: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsMonkey | ${this.props.category}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNxtClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.title}
                    description={ele.description}
                    urlImage={ele.urlToImage}
                    url={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex gap-2 justify-content-between">
          <button
            className="btn btn-primary btn-dark"
            onClick={this.handlePrevClick}
            type="button"
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-primary btn-dark ml-2"
            onClick={this.handleNxtClick}
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
