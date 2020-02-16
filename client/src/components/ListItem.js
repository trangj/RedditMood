import React from 'react';

export default class ListItem extends React.Component {
    render() {
        const { url, title, score, author, post_hint } = this.props.post;
        return (
            <div className="col mb-4">
                <div className="card">
                    {
                        post_hint === "image" ?
                        <img src={url} className="card-img-top" alt="img" /> :
                        null
                    }
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <small className="card-text text-muted">Posted by u/{author} | {score} Upvotes</small>
                    </div>
                </div>
            </div>
        )
    }
}