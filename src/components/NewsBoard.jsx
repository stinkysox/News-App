import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = (props) => {
  const { category } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "580c0d1774c4440eb46fccee9de1ed2d";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem key={index} details={news} />
      ))}
    </div>
  );
};

export default NewsBoard;
