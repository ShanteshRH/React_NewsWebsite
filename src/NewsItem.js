import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-success"
          style={{ left: "50%", zIndex: 1 }}
        >
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">By {author} </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              Last updated on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
