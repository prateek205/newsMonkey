import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `NewsMonkey | ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const handleNxtClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  return (
    <div className="container my-3">
      <h1 style={{ marginTop: "90px" }}>Top Headlines</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((ele) => {
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
          onClick={handlePrevClick}
          type="button"
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          className="btn btn-primary btn-dark ml-2"
          onClick={handleNxtClick}
          type="button"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defProps = {
  country: "us",
  pageSize: 10,
  category: "sport",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catergory: PropTypes.string,
};
export default News;
