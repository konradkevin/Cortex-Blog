import React from 'react';
import {Link} from 'react-router-dom'


// Styles
import '../css/FamousArticles.css';
import {Image} from 'react-bootstrap';

import Image_blog from '../subcomponent/Image_blog'

function FamousArticles() {
  return (
    <section className='famous_article-section'>

      <div className='famous_article-div col-10 rounded shadow mt-4 row'>

        <Image_blog id={'famous_article-first'}/>


        <div className='row third'>


          <div className='famous_article famous_article-third'>
            <Image src={'https://picsum.photos/200/300'}/>
            <div className='layer'>

              <div className='details'>
                <div className=' d-flex align-items-center ml-3'>
                  <div className='mt-4 d-flex align-items-center'>
                    <img src={'https://picsum.photos/200/300'} alt=""/>
                    <b>La_laborantine</b>
                    <div style={{width: '20px'}}></div>
                    <img src={'https://picsum.photos/200/300'} alt=""/>
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

          <Link to='/article' className='famous_article famous_article-third'>
            <Image src={'https://picsum.photos/200/300'}/>
            <div className='layer'>
              <div className='details'>
                <div className=' d-flex align-items-center ml-3'>
                  <div className='mt-4 d-flex align-items-center'>
                    <img src={'https://picsum.photos/200/300'} alt=""/>
                    <b>La_laborantine</b>
                    <div style={{width: '20px'}}></div>
                    <img src={'https://picsum.photos/200/300'} alt=""/>
                    <b>21/06/2021</b>
                  </div>
                </div>
              </div>
              <div className='tags row ml-2 m-2'>
                <Link to='/' className='btn btn-primary p-1 mt-2 ml-2'>Mouche</Link>
                <Link to='/' className='btn btn-info p-1 mt-2 ml-2'>Mouche</Link>
                <Link to='/' className='btn btn-info p-1 mt-2 ml-2'>Mouche</Link>
              </div>
            </div>
          </Link>


        </div>
      </div>

    </section>
  );
}

export default FamousArticles;
