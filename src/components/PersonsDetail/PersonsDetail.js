import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Col, Row } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const PersonsDetail = (props) => {
    const { Meta } = Card;

    // eslint-disable-next-line max-len
    const { picture, name, id, gender, email, location, dob, registered, phone, cell } = props.person;
    const locationStr = `
        str. ${location.street.name} #${location.street.number}, ${location.city},
        st. ${location.state}, ${location.country}
    `;

    return (
      <Row gutter={ 16 }>
        <Col span={ 3 } />
        <Col span={ 8 }>
          <Card
            style={ { width: 240 } }
            cover={ <img src={ picture.large } alt={ `${name.first}-avatar` } /> }
          >
              <Meta
                title={ `${name.title}. ${name.first} ${name.last}` }
                description={ `${id.name || ''} ${id.value || ''}` }
              />
          </Card>
        </Col>
        <Col span={ 10 }>
          <Card>
            <p><strong>Gender:</strong> { gender }</p>
            <hr />
            <p><strong>Age:</strong> { dob.age } </p>
            <hr />
            <p><strong>Email:</strong> { email }</p>
            <hr />
            <p><strong>Location:</strong> { locationStr }</p>
            <hr />
            <p><strong>Date of Birth: </strong> { moment(dob.date).format('MM.DD.YYYY') } </p>
            <hr />
            <p><strong>Registered:</strong> { moment(registered.date).format('MM.DD.YYYY') } </p>
            <hr />
            <p><strong>Phone:</strong> { phone }</p>
            <hr />
            <p><strong>Cell:</strong> { cell }</p>
          </Card>
        </Col>
      </Row>
    );
};

PersonsDetail.propTypes = {
    person: PropTypes.object.isRequired,
};

export default PersonsDetail;
