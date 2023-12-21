import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center gap-2 justify-center'>
            <h2>Loading... Please wait</h2>
            <span className='animate-spin block p-4 bg-teal-600'></span>
        </div>
    );
};

export default Loading;