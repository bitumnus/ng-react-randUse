/* eslint-disable no-undef */

import React, { PropTypes } from 'react';
import Comment from '../Comment';
import { getAngularService } from '../../services/AngularReactHelper';

const CommentList = (props) => {
    const AuthorService = getAngularService(document, 'AuthorService');
    const toComment = (c, i) =>
        <Comment key={ i } comment={ c } author={ AuthorService.getPerson(c.login.uuid) } />;
    return (
        <div>
            { props.comments.map(toComment) }
        </div>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
};

export default CommentList;
