/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';
// import { UIRouter, UIView, useSrefActive } from '@uirouter/react';

const Person = ({ person }) => {
    const { title, first, last } = person.name;
    return (
        <div className="row notify-row">
            <div className="col-sm-3 col-xs-12 text-center">
                <img src={ person.picture.thumbnail } className="img-responsive" alt={ `${first}-avatar` } />
            </div>
            <a
              className="col-sm-3 col-xs-10 text-center"
              href={ `/person/${person.login.uuid}` }
            > {title}. {first} {last}
            </a>
            {/* <a { ...personDetail }> {first} </a> */}
            <div className="col-sm-5 col-xs-12 text-center">
                <h6>{person.gender}</h6>
                <p>{ person.email }</p>
            </div>
            {/* <UIView /> */}
        </div>
    );
};

export default Person;
