import React, {useContext} from 'react';

// Styles
import './Aside.css';

import InstagramFeed from "../instagram-feed/InstagramFeed";

// Contexts
import LangContext from "../../../app/contexts/LangContext";

function Aside() {
  const {language, setLanguage} = useContext(LangContext);

  return (
    <section id='#aside' className='col-lg-3 col-sm-12  '>

      <article className='aside-card shadow pb-2'>
        <h3>En ce moment</h3>
        <div className='img-aside'>
          <img src={'https://lalaborantine.files.wordpress.com/2020/06/383514-pcbnbm-880.png?w=195'} alt=""/>
          <div>
            <p>
              Hi all!
              To celebrate the 10th article of the blog La laborantine which arrives next week we are organizing a
              contest to win a goodie for the logo of the blog.
              You have until the end of next week to participate! For that leave a comment at the bottom of an article
              of your choice on the blog! Thereafter, a draw among the names of the participants will be organized.
              At your comments!
            </p>
          </div>
        </div>
      </article>

      <article className='aside-card shadow pb-4'>
        <h3>Instagram</h3>
        <div className='img-aside'>
          <InstagramFeed/>
        </div>
      </article>

      <article className='aside-card shadow pb-2'>
        <h3>Newsletter</h3>
        <div>
          <p>Entrez votre adresse mail pour suivre ce blog et être notifié(e) par email des nouvelles publications.</p>
        </div>
        <div>
          <input type="text" className='m-2 col-8' style={{height: '50px'}} placeholder='E-mail'/>
        </div>
        <div>
          <input type="button" className='m-2 col-6 btn btn-info' value='Suivre'/>
        </div>
      </article>

    </section>
  );
}

export default Aside;
