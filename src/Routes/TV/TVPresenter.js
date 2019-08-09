import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
    padding: 0px 10px;
`;


const TVPresenter = ({topRated, popular, airing_today, loading, error}) => (
    loading ? <Loader /> : (
        <Container>
             {topRated && topRated.length > 0 && (
            <Section title = "topRated">
                {topRated.map(tv => (
                    <span key={tv.id}>{tv.name}></span>
                ))}
            </Section>
            )}
            {popular && popular.length > 0 && (
            <Section title = "popular">
                {popular.map(tv => (
                    <span key={tv.id}>{tv.name}></span>
                ))}
            </Section>
            )}
             {airing_today && airing_today.length > 0 && (
            <Section title = "airing_today">
                {airing_today.map(tv => (
                    <span key={tv.id}>{tv.name}></span>
                ))}
            </Section>
            )}
            {error && <Message color="#e74c3c" text={error}></Message>}
        </Container>
    )
);

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular : PropTypes.array,
    airing_today : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default TVPresenter;

// loading ? <Loader/> : (
//     <Container>
//         {nowPlaying && nowPlaying.length > 0 && (
//             <Section title = "Now Playing">
//                 {nowPlaying.map(movie => (
//                     <span key={movie.id}>{movie.title}></span>
//                 ))}
//             </Section>
//         )}
//         {upcoming && upcoming.length > 0 && (
//             <Section title = "Upcomming">
//                 {upcoming.map(movie => (    
//                     <span key={movie.id}>{movie.title}</span>
//                 ))}
//             </Section>
//         )}
//         {popular && popular.length > 0 && (
//             <Section title = "popular">
//                 {popular.map(movie => movie.title)}
//             </Section>
//         )}
//     </Container>
// );