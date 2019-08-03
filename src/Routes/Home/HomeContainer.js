import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

class HomeContainer extends Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: null,
    }

    async componentDidMount() {
        try {
            const {
                data: { result: nowPlaying }
            } = await moviesApi.nowPlaying();

            const {
                data: { result: upcoming }
            } = await moviesApi.upcoming();
            
            const {
                data: { result: popular }
            } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        }catch{
            this.setState({
                error: "Can't find movies information."
            })
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading} = this. state;
        return (
           <HomePresenter
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
           />
        );
    }
}

export default HomeContainer;