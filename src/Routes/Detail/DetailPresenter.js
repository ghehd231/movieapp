import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const DetailPresenter = ({
    result,
    loading,
    error
    
}) => null;

DetailPresenter.propTypes = {
    result: PropTypes.array,
    error : PropTypes.array,
    loading: PropTypes.bool.isRequired
};

export default DetailPresenter;