import React from 'react';
import PersonDetails from './PersonDetails';

const PersonList = () => {
    const people=[
        {img:22,
        name:'Piash',
        job:'developer'},

        {img:34,
        name:'Tasin',
        job:'Student'},

        {img:56,
        name:'Sakib',
        job:'designer'}
    ]
    return (
        <div>
            <section>
            <PersonDetails person={people[0]}></PersonDetails>
            <PersonDetails person={people[1]}></PersonDetails>
            <PersonDetails person={people[2]}></PersonDetails>
            </section>
            
        </div>
    );
};

export default PersonList;