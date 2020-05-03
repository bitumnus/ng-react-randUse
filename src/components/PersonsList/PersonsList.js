import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const PersonsList = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (text, record) => <img src={ text } alt={ record.name } />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <a href={ `person/${record.uuid}` }>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            responsive: ['md'],
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
    ];

    const data = props.persons.map(pd => ({
        key: pd.login.uuid,
        avatar: pd.picture.thumbnail,
        name: `${pd.name.first} ${pd.name.last}`,
        email: pd.email,
        phone: pd.phone,
        uuid: pd.login.uuid,
    }));

    return (
        <div>
            <Table
              columns={ columns }
              dataSource={ data }
              loading={ loading }
              pagination={ { pageSize: 50 } }
            />
        </div>
    );
};

PersonsList.propTypes = {
    persons: PropTypes.array.isRequired,
};

export default PersonsList;
