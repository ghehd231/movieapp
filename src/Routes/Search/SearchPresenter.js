import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
    padding: 0px 20px;
`;
const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;
const Input = styled.div`
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
             placeholder="Search MOvies or TV Shows.."
             value ={searchTerm}
             onChange={updateTerm}
             >
            </Input>
        </Form>
        {loading ? (
            <Loader />
        ): (
            <>
            {movieResults && movieResults.length > 0 && (
                <Section title = "movie results">
                    {movieResults.map(movie =>(
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
             {tvResults && tvResults.length > 0 && (
                <Section title = "tv show Result">
                    {tvResults.map(tv =>(
                        <span key={tv.id}>{tv.name}</span>
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