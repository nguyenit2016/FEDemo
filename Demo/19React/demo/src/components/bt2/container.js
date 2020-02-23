import React from 'react';
import WhatWeDo from './whatwedo';
import Contact from './contact';
import Card from './card';

export default function Container() {
    return (
        <div className='container'>
            <div className="row">
                <WhatWeDo />
                <Contact />
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <Card />
                </div>
                <div className="col-sm-4">
                    <Card />
                </div><div className="col-sm-4">
                    <Card />
                </div>
            </div>
        </div>
    );
}