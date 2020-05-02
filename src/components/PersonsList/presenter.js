/* eslint-disable no-undef */

import React, { PropTypes } from 'react';
import Person from '../Person';
// import { Table, Tag } from 'antd';

const PersonsList = (props) => {
    // const AuthorService = getAngularService(document, 'AuthorService');
    // const {  } = props.persons;
    const toPerson = (p, i) =>
        <Person key={ i } person={ p } />;
    return (
        <div>
            {props.persons.map(toPerson)}
        </div>
    );
};

PersonsList.propTypes = {
    persons: PropTypes.array.isRequired,
};

export default PersonsList;
