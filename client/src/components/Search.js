import React, { useState } from 'react';

function Search({searchSubreddit}) {
    const [search, setSearch] = useState('');

    const onChange = e => {
        setSearch(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        searchSubreddit(search);
        setSearch('');
    }

    return (
        <form onSubmit={onSubmit} className="input-group my-4">
            <input
                type="text"
                onChange={onChange}
                name="search"
                value={search}
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

export default Search;