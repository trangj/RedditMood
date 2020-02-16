import React from 'react';
import ListItem from './ListItem';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class List extends React.Component {
    render() {
        return (
            <InfiniteScroll
                dataLength={this.props.posts.length}
                next={this.props.fetchPosts}
                hasMore={true}
                className="row row-cols-1 row-cols-md-3"
            >
                {
                    this.props.posts.map(post => (
                        <ListItem post={post} />
                    ))
                }
            </InfiniteScroll>

        )
    }
}