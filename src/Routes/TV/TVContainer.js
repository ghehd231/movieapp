import React, { Component } from 'react';
import TVPresenter from './TVPresenter';
import {tvApi} from '../../api';

class TVContainer extends Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: null,
    }
    async componentDidMount() {
        try {
            const {
                data: { result: topRated }
            } = await moviesApi.topRated();

            const {
                data: { result: popular }
            } = await moviesApi.popular();
            
            const {
                data: { result: airingToday }
            } = await moviesApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
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
        const { topRated, popular, airingToday, error, loading} = this. state;
        return (
           <TVPresenter
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
           />
        );
    }
}

export default TVContainer;