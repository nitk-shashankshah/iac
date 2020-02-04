import React from 'react';
import logo from '../assets/images/logo.svg';
import slider1 from '../assets/images/eks.png';
import slider2 from '../assets/images/gfin.svg';
import slider3 from '../assets/images/global_commercial.png';
import slider4 from '../assets/images/globalmarketing.png';
import slider5 from '../assets/images/it.svg';
import slider6 from '../assets/images/manufacturing.png';
import slider7 from '../assets/images/researchndev.png';
import iaclogo from '../assets/images/iaclogo.svg';
import login from '../assets/images/login.png';
import search from '../assets/images/search.png';
import chat from '../assets/images/chat.png';
import locate from '../assets/images/location.png';
import iacoverview from '../assets/images/iacoverview.svg';
import event from '../assets/images/event.svg';
import engagement from '../assets/images/engagement.svg';
import newsarticle from '../assets/images/newsarticle.svg';

import $ from 'jquery';
import '../jquery.waterwheelCarousel.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faKey);


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [slider1, slider2, slider3, slider4, slider5,slider6, slider7],
      isResponsive: false,
      openMenu: 0
    };
    this.rollMenu = this.rollMenu.bind(this);
    this.menuMouseOver = this.menuMouseOver.bind(this);
    this.subMenuMouseOut = this.subMenuMouseOut.bind(this);    
    this.menuMouseOut = this.menuMouseOut.bind(this);
  }

  menuMouseOut() {
  }

  componentDidMount(){
    var carousel = $("#carousel").waterwheelCarousel({
      flankingItems: 3,      
      movingToCenter: function ($item) {
        $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      },
      movedToCenter: function ($item) {
        $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      },
      movingFromCenter: function ($item) {
        $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      },
      movedFromCenter: function ($item) {
        $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      },
      clickedCenter: function ($item) {
        $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      }
    });

    $('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    $('#next').bind('click', function () {
      carousel.next();
      return false;
    });

  }

  menuMouseOver(x) {
    this.setState({openMenu: x});
  }
  subMenuMouseOver(c) {
    this.setState({openMenu: c});
  }
  subMenuMouseOut() {
    this.setState({openMenu: 0});
  }
  rollMenu() {
    this.setState({isResponsive: !this.state.isResponsive});
  }

  render() {
  return (
    <div>
      <header className="header">
          <img className="App-logo" src={iaclogo} alt="logo" />
          <div className={this.state.isResponsive ? "responsive menu" : "menu"}>
          <div class="item"><a href="home" className={this.state.openMenu === 1 ? "hoverClass" : ""} onMouseOver={() => this.menuMouseOver(1)}>About Us</a>
          <div className={this.state.openMenu === 1 ? "submenu homeMenu" : "submenu"} onMouseOver={() => this.subMenuMouseOver(1)} onMouseOut={this.subMenuMouseOut}>
          <ul><li><img src={iacoverview} alt="IAC Overview"/></li><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><img src={newsarticle} alt="News Article"/></li><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><img src={event} alt="News Article"/></li><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><img src={engagement} alt="News Article"/></li><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>  
          </div>
          <div class="item"><a href="about" className={this.state.openMenu === 2 ? "hoverClass" : ""} onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(2)}>Capabilities</a>
          <div className={this.state.openMenu === 2 ? "submenu capabilityMenu" : "submenu"} onMouseOver={() => this.subMenuMouseOver(2)} onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>    
          </div>
          <div class="item"><a href="governance" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(3)}>Governance</a>
          {/*<div className={this.state.openMenu === 3 ? "submenu governanceMenu" : "submenu"} onMouseOver={() => this.subMenuMouseOver(3)} onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>*/}
          </div>
          <div class="item"><a href="products" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(4)}>Engage Us</a>
          {/*<div className={this.state.openMenu === 4 ? "submenu engageMenu" : "submenu"} onMouseOver={() => this.subMenuMouseOver(4)} onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>*/}
          </div>
          <div class="item"><a href="products" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(5)}>Quick Links</a>
          {/*<div className={this.state.openMenu === 5 ? "submenu quickLinksMenu" : "submenu"} onMouseOver={() => this.subMenuMouseOver(5)} onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>*/}
          </div>       
          <div className="actionIcon"><a href="search"><img src={search} alt="logo" /></a></div>
          <div className="actionIcon"><a href="login"><img src={login} alt="logo" /></a></div>
          <div className="actionIcon locateus"><a href="locate"><img src={locate} alt="logo" /></a></div>
          <img src={logo} className="elanco-logo" alt="logo" />
          </div>
          <div className="icon"><FontAwesomeIcon icon="bars" onClick={this.rollMenu}/></div>
      </header>
      <main>
        <div className="banner">
          <div class="detailSection">
            <div className="details">
            <p className="pageHeading">Leading Through Innovation</p>
            <p>IAC is Elanco's Global Capability Center (GCC), established in India, and is a key pillar in driving Elanco's IPP strategy. GCC or Global Capability Center is an offshore, owned, integrated strategic platform for leveraging global talent.</p>
            <a href="more" className="btn primary">Know More</a>
            <a href="watchVideoBtn" className="btn activeBtn">Watch Video..</a>
            </div>
          </div>
          <div class="chatBtn">          
          <img src={chat} alt="Chat with us"/>
            <p>Chat With Us</p>
          </div>
        </div>
        <div class="sliderSection">     
        <p className="capabilities">Our Capabilities</p>
        <div class="slider">
        <a href="previous" id="prev" alt="Previous"></a>
        <div id="carousel">
          <a href="/eks" alt="Elanco Knowledge Solutions"><div style={{"background":`url(${slider1})`,"background-position":"left bottom","width":"273px","height":"318px","background-size":"contain"}} id="item-1"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>
          <a href="/gfin" alt="Global Finance"><div style={{"background":`url(${slider2})`,"background-position":"left bottom","width":"266px","height":"318px","background-size":"contain"}} id="item-2"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>
          <a href="/operations" alt="Global Commercial Operations"><div style={{"background":`url(${slider3})`,"background-position":"left bottom","width":"273px","height":"318px","background-size":"contain"}} id="item-3"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>
          <a href="/marketing" alt="Global Marketing"><div style={{"background":`url(${slider4})`,"background-position":"left bottom","width":"273px","height":"318px","background-size":"contain"}} id="item-4"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>
          <a href="/it" alt="Information Technology"><div style={{"background":`url(${slider5})`,"background-position":"left bottom","width":"268px","height":"320px","background-size":"contain"}} id="item-5"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>
          <a href="/manufacturing" alt="Manufacturing"><div style={{"background":`url(${slider6})`,"background-position":"left bottom","width":"273px","height":"318px","background-size":"contain"}} id="item-6"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>
          <a href="/rnd" alt="Research and Development"><div style={{"background":`url(${slider7})`,"background-position":"left bottom","width":"273px","height":"318px","background-size":"contain"}} id="item-7"><p style={{"width": "100%","height": "100%","background":"rgb(255, 255, 255, 0.8)","padding":"0px","margin":"0px","display": "block","visibility": "visible","position": "absolute","z-index": "4","opacity": "0.8"}}></p></div></a>     
        </div>
        <a href="next" id="next" alt="Next"></a>
        </div>
        </div> 
        </main>
        </div>
  );
  }
}

export default HomeComponent;