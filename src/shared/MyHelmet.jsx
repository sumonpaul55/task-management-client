import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyHelmet = ({ title }) => {
    return (
        <>
            <Helmet>
                <title>Task Management || {title}</title>
            </Helmet>

        </>
    );
};

export default MyHelmet;