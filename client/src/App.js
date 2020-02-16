import React from 'react';
import Search from './components/Search';
import List from './components/List';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      search: '',
      loading: false
    }
  }

  searchSubreddit = search => {
    this.setState({ loading: true, search: search }, () => {
      fetch(`http://localhost:5000/api/getposts?search=${search}`)
        .then(res => res.json())
        .then(res => this.setState({ posts: res, loading: false }));
    })
  }

  fetchPosts = () => {
    const { posts } = this.state;
    const after = posts[posts.length-1].name;
    fetch(`http://localhost:5000/api/getposts?search=${this.state.search}&after=${after}`)
      .then(res => res.json())
      .then(res => this.setState({ posts: this.state.posts.concat(res) }))
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-4">RedditMood</h1>
        {
          this.state.loading ?
            <div className="d-flex justify-content-center my-4">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div> :
            <React.Fragment>
              <Search searchSubreddit={this.searchSubreddit} />
              {
                this.state.posts !== 0 ?
                <List posts={this.state.posts} fetchPosts={this.fetchPosts} /> : ''
              }
            </React.Fragment>
        }
      </div>
    );
  }
}
