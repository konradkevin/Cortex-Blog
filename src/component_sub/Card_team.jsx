import React from 'react';




import '../css/Card_team.css'
// Styles
// import { Button } from 'react-bootstrap';
import imgTest from '../media/img/author_1.jpg'
import imgPlus from '../media/icons/plus.png'
import iconTwitterO from '../media/icons/twitterO.png'
import iconFacebookO from '../media/icons/facebookO.png'
import iconInstagramO from '../media/icons/instagramO.png'



function Card_team() {
    return (

        <div class="col-12">
            <div class="image-flip" >
                <div class="mainflip flip-0">
                    <div class="frontside">
                        <div class="card-team">
                            <div class="card-team-body text-center">
                                <p style={{ display: 'flex', justifyContent: 'center' }}><img class=" img-fluid mt-4" src={imgTest} style={{ objectFit: 'cover', borderRadius: '50%', width: '200px', height: '200px' }} alt="card-team image" /></p>
                                <h4 class="card-team-title">Tartanpion le scientifique</h4>
                                <p class="card-team-text">Aime bien la science <br /> Physicien .</p>
                                <div className='card-team-plus'>
                                    <img src={imgPlus} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card-team">
                            <div class="card-team-body text-center mt-4">
                                <h4 class="card-team-title">Tartanpion le scientifique</h4>
                                <p class="card-team-text card-text2">Après avoir été diplômée de deux masters en biologie, un en biologie moléculaire et cellulaire, un autre en systématique et évolution avec une spécialité en entomologie, je cherche à rendre le savoir scientifique accessible au grand public. Un premier article, publié dans le magazine La Recherche à mon nom, m’a poussée par la suite à créer ce blog afin de continuer à écrire des articles de vulgarisation en biologie.

</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="social-ic" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                            <div>  <img src={iconTwitterO} alt="" /></div>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-ic" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                            <div>  <img src={iconFacebookO} alt="" /></div>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-ic" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                            <div>  <img src={iconInstagramO} alt="" /></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card_team;
