import React from 'react';

export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchSubreddit(this.state.search);
        this.setState({search: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="input-group my-4">
                <input 
                    type="text" 
                    onChange={this.onChange} 
                    name="search"
                    value={this.state.search}
                    className="form-control"
                    placeholder="Search for a subreddit..."
                />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary ">
                        Search
                    </button>
                </div>
            </form>
        )
    }
}