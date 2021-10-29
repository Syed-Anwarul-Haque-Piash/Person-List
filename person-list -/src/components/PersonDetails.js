import React from 'react';

const PersonDetails = (props) => {
    const {img,name,job}=props.person;
    const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <div className='person'>
            <img src={url} alt="" />
            <div>
                <h4>{name}</h4>
                <h4>{job}</h4>
            </div>
        </div>
    );
};

export default PersonDetails;