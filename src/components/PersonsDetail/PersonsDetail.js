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
        <Col span={ 8 }>
          <Card>
            <p><strong>Gender:</strong> { gender }</p>
            <p><strong>Email:</strong> { email }</p>
            <p><strong>Location:</strong> { locationStr }</p>
            <p><strong>Date of Birth: </strong> { moment(dob.date).format('MM.DD.YYYY') } </p>
            <p><strong>Age:</strong> { dob.age } </p>
            <p><strong>Registered:</strong> { moment(registered.date).format('MM.DD.YYYY') } </p>
            <p><strong>Phone:</strong> { phone }</p>
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
