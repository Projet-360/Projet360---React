import React from "react";

import Logo from './../assets/img/home/logo-accueil.svg'
import LogoWeb from './../assets/img/home/logo-web.svg'
import LogoAudio from './../assets/img/home/logo-audio.svg'
import LogoImage from './../assets/img/home/logo-image.svg'
import LogoVideo from './../assets/img/home/logo-video.svg'


import * as ScrollMagic from "scrollmagic";
import TweenMax from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax);


class Accueil extends React.Component {
  
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }



  render() {
    return (
      <div id="home" className="home"> 
      <div className="home-menu">
        <div className="home-menu-colonne">
        
          <div id="home-web" className="home-menu-colonne--box up-left home-web">
            <a href="/Web#accueil">
              <div id="sq11" className="home-menu-colonne--box----item">
                <div className="home-menu-colonne--box----item-----icon">
                <img className="rounded  rotating d-block img-fluid" src={LogoWeb} alt="logo" /> 
                </div>
                <div className="home-menu-colonne--box----item-----titre">
                  <h2>Web</h2>
                </div>
                <div className="home-menu-colonne--box----item-----description">
                  <h2 className="home-menu-colonne--box----item-----description------titre">Création de site web</h2>
                  <p className="home-menu-colonne--box----item-----description------text">projets sur mesure, Wordpress, UX design, référencement, réseaux sociaux, ...</p>
                </div>
              </div>
            </a>
          </div>
        
        
          <div id="home-audio" className="home-menu-colonne--box up-right home-audio">
            <a href="/Audio#accueil">
              <div id="sq22" className="home-menu-colonne--box----item ">
                <div className="home-menu-colonne--box----item-----icon">
                <img className="rounded  rotating d-block img-fluid" src={LogoAudio} alt="logo" /> 
                </div>
                <div className="home-menu-colonne--box----item-----titre">
                  <h2>Audio</h2>
                </div>
                <div className="home-menu-colonne--box----item-----description">
                  <h2 className="home-menu-colonne--box----item-----description------titre">Création sonore</h2>
                  <p className="home-menu-colonne--box----item-----description------text">musique à l'image, radio, sound design, exposition, voix off, identité sonore, ...</p>
                </div>
              </div>
            </a>
          </div>

          </div>
        
          <div className="home-menu-colonne--titre">
            <div className="row home-menu-colonne--titre----box">
              <h1>
                Projet 360 Projet360 Agence de Communication digitale et print Toulouse Occitanie
              </h1>
              <h2>Web design,Développeur, Sound designer, Musique de Film, Référencement, Ergonomie, Identité Visuelle Sonore Graphique Vidéos,Wordpress, Symfony, inforgraphie,logo, packaging, charte</h2>
              <img className="rounded  rotating d-block img-fluid" src={Logo} alt="logo" />  
            </div>
          </div>
        
        <div className="home-menu-colonne">
          <div id="home-image" className="home-menu-colonne--box down-left home-image">
            <a href="/Image#accueil">
              <div id="sq33" className="home-menu-colonne--box----item ">
                <div className="home-menu-colonne--box----item-----icon">
                  <img className="rounded  rotating d-block img-fluid" src={LogoImage} alt="logo" /> 
                </div>
                <div className="home-menu-colonne--box----item-----titre">
                  <h2>Image</h2>
                </div>
                <div className="home-menu-colonne--box----item-----description">
                  <h2 className="home-menu-colonne--box----item-----description------titre">Création d'image</h2>
                  <p className="home-menu-colonne--box----item-----description------text">infographie, logo, charte graphique, packaging, print, design graphique, ...</p>
                </div>
              </div>
            </a>
          </div>
        
        
          <div id="home-video" className="home-menu-colonne--box down-right home-video">
            <a href="/Video#accueil">
              <div id="sq44" className="home-menu-colonne--box----item ">
                <div className="home-menu-colonne--box----item-----icon">
                  <img className="rounded  rotating d-block img-fluid" src={LogoVideo} alt="logo" /> 
                </div>
                <div className="home-menu-colonne--box----item-----titre">
                  <h2>Vidéo</h2>
                </div>
                <div className="home-menu-colonne--box----item-----description">
                  <h2 className="home-menu-colonne--box----item-----description------titre">Création vidéo</h2>
                  <p className="home-menu-colonne--box----item-----description------text">montage, présentation d'identité, vidéo de prospection, motion design, ...</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-6 home-footer">
        <div className="footer-social-links">
          <a href="https://www.facebook.com/pg/Projet360.AgenceDeCommunication" title="Facebook" className="facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://soundcloud.com/projet360" title="Soundcloud" className="soundcloud">
            <i className="fab fa-soundcloud"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCc1xUVq5SakSLELZg48U7Ag" title="Google+" className="googleplus">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCc1xUVq5SakSLELZg48U7Ag" title="Google+" className="googleplus">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
    </div>  
      </div>
  </div>
    );
  }
}
export default Accueil;