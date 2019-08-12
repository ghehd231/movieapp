import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

//class SearchContainer extends Component {
export default class extends Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: null,
    }

    handleSubmit = event => {
        event.preventDefault();
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
                data: { results: tvResults }
            } = await moviesApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            });       
        }catch{
            this.setState({ error: "Can't find result... "});
        }finally{
            this.setState({ loading: false });
        }
    }
   
    render() {
        const { movieResults, tvResults, searchTerm, error, loading} = this.state;
        return (
           <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit = {this.handleSubmit}
            updateTerm = {this.updateTerm}
           />
        );
    }
}

