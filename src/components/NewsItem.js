import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlImage, url, author, date } = this.props;
    return (
      <>
        <div>
          <div className="card my-5">
            <img
              src={
                !urlImage
                  ? "https://spaceflightnow.com/wp-content/uploads/2025/03/20250326_Starlink_11-7_liftoff-SpaceX_small.jpeg"
                  : urlImage
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small class="text-body-secondary">
                  By {!author ? "unknown" : author} on {date}
                </small>
              </p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
