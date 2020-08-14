import React from 'react';

import Article from '../component_sub/Article'

// Styles
// import { Button } from 'react-bootstrap';
import '../css/home.css';



function Home() {
    return (
        <div className='col-12 pb-4  '>

            <h3 className='card-title rounded'>Recents Posts</h3>

            <div className='m-0 p-0 mt-2 col-12 article-container '>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />

            </div>
        </div>


    );
}

export default Home;
