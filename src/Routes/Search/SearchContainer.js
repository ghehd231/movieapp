import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends Component {
    state = {
        movieResult: null,
        tvResult: null,
        searchTerm: null,
        error: null,
        loading: null,
    }

    render() {
        const { movieResult, tvResult, searchTerm, error, loading} = this. state;
        return (
           <SearchPresenter
            movieResult={movieResult}
            tvResult={tvResult}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
           />
        );
    }
}

export default SearchContainer;