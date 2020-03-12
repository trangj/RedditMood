import React from 'react';
import ListItem from './ListItem';
import InfiniteScroll from 'react-infinite-scroll-component';

function List({posts, fetchPosts}) {
    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchPosts}
            hasMore={true}
            className="row row-cols-1 row-cols-md-3"
        >
            {
                posts.map(post => (
                    <ListItem post={post} />
                ))
            }
        </InfiniteScroll>

    )
}

export default List;