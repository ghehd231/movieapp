import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
const Container = styled.div`
    padding: 0px 20px;
`;
const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;
const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    error,
    searchTerm,
    handleSubmit,
    loading,
    updateTerm

}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
             placeholder="Search Movies or TV Shows.."
             value ={searchTerm}
             onChange={updateTerm}
             />
            
        </Form>
         {loading ? (
            <Loader />
        ): (
            <>
            {movieResults && movieResults.length > 0 && (
                <Section title = "movie results">
                    {movieResults.map(movie =>(
                         <Poster 
                         key={movie.id}
                         id={movie.id}
                         imageUrl={movie.poster_path}
                         title={movie.original_title}
                         rating={movie.vote_average}
                         year={movie.release_date.substring(0, 4)}
                         isMovie = {true}
                     />
                    ))}
                </Section>
            )}
             {tvResults && tvResults.length > 0 && (
                <Section title = "tv show Result">
                    {tvResults.map(tv =>(
                         <Poster 
                         key={tv.id}
                         id={tv.id}
                         imageUrl={tv.poster_path}
                         title={tv.original_name}
                         rating={tv.vote_average}
                         year={tv.first_air_date}
                         
                     />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error}></Message>}
            {tvResults && 
                movieResults &&
                tvResults.length === 0 &&
                movieResults.length === 0 &&
                (
                    <Message text="Nothing found" color="#95a5a6" />
                )
                }
            </>
        )} 
    </Container>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults : PropTypes.array,
    error : PropTypes.array,
    searchTerm : PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;