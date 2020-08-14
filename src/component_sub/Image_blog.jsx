import React from 'react';
import { Link } from 'react-router-dom'


// Styles
import '../css/FamousArticles.css';
import { Image } from 'react-bootstrap';

// Styles
// import { Button } from 'react-bootstrap';


function Image_blog(props) {
    return (
        <div className={'famous_article ' + props.id} >
            <Image src={'https://picsum.photos/200/300'} />
            <div className='layer'>
                <div className='details'>
                    <div className=' d-flex align-items-center ml-3'>
                        <div className='mt-4 d-flex align-items-center'>
                            <img src={'https://picsum.photos/200/300'} alt="" />
                            <b>La_laborantine</b>
                            <div style={{ width: '20px' }}></div>
                            <img src={'https://picsum.photos/200/300'} alt="" />
                            <b>21/06/2021</b>
                        </div>
                    </div>
                </div>
                <div className='tags row ml-2 m-2'>
                    <Link className='btn btn-primary p-1 mt-2 ml-2'>Mouche</Link>
                    <Link className='btn btn-info p-1 mt-2 ml-2'>Mouche</Link>
                    <Link className='btn btn-info p-1 mt-2 ml-2'>Mouche</Link>
                </div>
            </div>
        </div>
    );
}

export default Image_blog;
