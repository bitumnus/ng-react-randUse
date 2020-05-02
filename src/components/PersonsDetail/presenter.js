import React, { PropTypes } from 'react';

const PersonsDetail = (props) => {
    console.log(props);

    const { name, login } = props.person;
    return (
        <div>
            <p> {login.uuid} </p>
            <p> {name.first} {name.last} </p>
        </div>
    );
};

PersonsDetail.propTypes = {
    person: PropTypes.object.isRequired,
};

export default PersonsDetail;
