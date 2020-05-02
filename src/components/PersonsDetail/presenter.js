import React from 'react';
import { PropTypes } from 'prop-types';

const PersonsDetail = (props) => {
    console.log(props);

    const { picture, name, id, gender, email, location, dob, registered, phone, cell } = props.person;
    return (
        <div>
            <p> {id.name} </p>
            <p> {name.first} {name.last} </p>
        </div>
    );
};

PersonsDetail.propTypes = {
    person: PropTypes.object.isRequired,
};

export default PersonsDetail;
