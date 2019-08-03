import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

class SearchContainer extends Component {
    state = {
        movieResult: null,
        tvResult: null,
        searchTerm: "",
        error: null,
        loading: null,
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if( searchTerm !== ""){
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const { searchByTerm } = this.state;
        this.setState({loading: true});

        try{
            const {
                data: { results: movieResults }
            } = await moviesApi.search(searchTerm);
            const {
                data: { results: tvResult }
            } = await moviesApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResult
            })        
        }catch{
            this.setState({ error: "Can't find result... "});
        }finally{
            this.setState({ loading: false });
        }
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
            handleSubmit = {handleSubmit}
           />
        );
    }
}

export default SearchContainer;