// src/components/ArticleList.js
import React from "react";
import Article from "./Article.jsx";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes} 
        />
      ))}
    </main>
  );
}

export default ArticleList;