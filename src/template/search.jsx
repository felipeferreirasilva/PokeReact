import React from 'react'

const Search = props => {
    return (
        <div>
            <form onSubmit={(event) => props.search(props.searchValue, event)}>
                <div className="input-group mt-4 mb-5">
                    <input type="text" className="form-control form-control-lg" onChange={(event) => props.searchHandler(event)} placeholder="Pokemon..." required />
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search