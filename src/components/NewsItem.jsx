const NewsItem = (props) => {
  const { details } = props;
  const { title, description, urlToImage, url } = details;
  const image =
    "https://static.vecteezy.com/system/resources/previews/001/226/460/original/breaking-news-tv-background-vector.jpg";
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={urlToImage ? urlToImage : image}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0.9) : "News "}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
