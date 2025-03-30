import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div>
        <div className="card my-5">
          <img
            src={
              !props.urlImage
                ? "https://spaceflightnow.com/wp-content/uploads/2025/03/20250326_Starlink_11-7_liftoff-SpaceX_small.jpeg"
                : props.urlImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small class="text-body-secondary">
                By {!props.author ? "unknown" : props.author} on {props.date}
              </small>
            </p>
            <a
              href={props.url}
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
};

export default NewsItem;
