import React from 'react';
import Banner from './banner/Banner';
import Feartures from './features/Feartures';
import Benifites from './benifits/Benifites';
import HowitWorks from './howitWorks/HowitWorks';
import WhoUseit from './whoUseit/WhoUseit';

const Home = () => {
    return (
        <main className='min-h-screen'>
            <Banner></Banner>
            <Feartures></Feartures>
            <Benifites></Benifites>
            <WhoUseit></WhoUseit>
            <HowitWorks></HowitWorks>
        </main>
    );
};

export default Home;