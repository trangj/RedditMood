import React, { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const searchSubreddit = (title) => {
    setSearch(title);
    setLoading(true);
    fetch(`http://localhost:5000/api/getposts?search=${title}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">RedditMood</h1>
      {loading ? (
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <Search searchSubreddit={searchSubreddit} />
          {posts !== 0 ? <List posts={posts} /> : ""}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
