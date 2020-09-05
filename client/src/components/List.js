import React from "react";
import ListItem from "./ListItem";

function List({ posts }) {
  return posts.map((post) => <ListItem post={post} />);
}

export default List;
