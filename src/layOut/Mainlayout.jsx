import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from './header/Headers';
import Footers from '../shared/footer/Footers';

const Mainlayout = () => {
    return (
        <>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
        </>
    );
};

export default Mainlayout;