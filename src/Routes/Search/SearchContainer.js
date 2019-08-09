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

    handleSubmit = event => {
        event.preventDfault();
        const { searchTerm } = this.state;
        if( searchTerm !== ""){
            this.searchByTerm();
        }
    }

    updateTerm = event =>{
        const {
            target: {value}
        }= event;
        this.setState({
            searchTerm: value
        })
    }


    searchByTerm = async () => {
        const { searchTerm } = this.state;
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
            handleSubmit = {this.handleSubmit}
            updateTerm = {this.updateTerm}
           />
        );
    }
}

export default SearchContainer;