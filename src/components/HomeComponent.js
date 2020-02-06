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

import iacoverview from '../assets/icons/iacoverview.svg';
import event from '../assets/icons/event.svg';
import engagement from '../assets/icons/engagement.svg';
import eks from '../assets/icons/eks.svg';
import newsarticle from '../assets/icons/newsarticle.svg';
import globalfinance from '../assets/icons/globalFinance.svg';
import globalcommercialops from '../assets/icons/globalcommercialops.svg';
import globalmarketing from '../assets/icons/globalMarketing.svg';
import it from '../assets/icons/it.svg';
import manufacturing from '../assets/icons/manufacturing.svg';
import rnd from '../assets/icons/rnd.svg';

import './css/home.css';
import $ from 'jquery';
import '../jquery.waterwheelCarousel.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faKey, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faKey, faSearch);


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [slider1, slider2, slider3, slider4, slider5,slider6, slider7],
      isResponsive: false,
      openMenu: 0,
      displaySearch: false
    };
    this.rollMenu = this.rollMenu.bind(this);
    this.menuMouseOver = this.menuMouseOver.bind(this);
    this.subMenuMouseOut = this.subMenuMouseOut.bind(this);    
    this.menuMouseOut = this.menuMouseOut.bind(this);
    this.showSearchbox = this.showSearchbox.bind(this);
  }

  menuMouseOut() {
  }

  componentDidMount() {
    $('.searchFeatures').after().click(() => {
      this.setState({"displaySearch":false});
    });
    $('.searchFeatures input').click(() => {
      this.setState({"displaySearch":true});
    });

    var carousel = $("#carousel").waterwheelCarousel({
      flankingItems: 3,
      orientation: ((window.innerWidth > 1200) ? 'horizontal' : 'vertical'), 
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

  showSearchbox() {
   this.setState({"displaySearch":!this.state.displaySearch});
  }

  menuMouseClick(x) {
    if (this.state.isResponsive)
      this.setState({openMenu: this.state.openMenu ? 0 : x});   
  }
  menuMouseOver(x) {
    this.setState({openMenu: x});    
  }
  subMenuMouseOver(c) {
    this.setState({openMenu: c});
  }
  subMenuMouseOut() {
    if (!this.state.isResponsive)
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
          <div className="links">
          <div className={this.state.isResponsive ? "responsive menu" : "menu"} style={this.state.displaySearch ? {"visibility":"hidden"} : {}}>
          <div class="item">
            <span 
              href="home" 
              className={this.state.openMenu === 1 ? "hoverClass" : ""}
              onMouseOver={() => this.menuMouseOver(1)}
              onClick={() => this.menuMouseClick(1)}>
              About Us
            </span>
          <div
            className={this.state.openMenu === 1 ? "submenu homeMenu" : "submenu"}
            onMouseOver={() => this.subMenuMouseOver(1)}
            onMouseOut={this.subMenuMouseOut}
          >
          <ul>
            <li><img src={iacoverview} alt="IAC Overview"/></li>
            <li><b>IAC Overview</b></li>
            <li><a href="/about">History</a></li>
            <li><a href="/about">Why IAC</a></li>
            <li><a href="/about">Global Capability Center</a></li>
            <li><a href="/about">Leadership</a></li>
            <li><a href="/about">Mission</a></li>
            <li><a href="/about">Governance</a></li>
            <li><a href="/about">Diversity and Inclusion</a></li>
            <li><a href="/about">CSR</a></li>
            <li><a href="/about">Innovation</a></li>
            <li><a href="/about">Success Stories</a></li>
            <li><a href="/about">FAQs</a></li>
          </ul>
          <ul>
            <li><img src={newsarticle} alt="News Article"/></li>
            <li><b>News Articles</b></li>
            <li><a href="/about">Top Stories</a></li>
            <li><a href="/about">Newsletters</a></li>
            <li><a href="/about">eMagaines</a></li>
          </ul>
          <ul>
            <li><img src={event} alt="News Article"/></li>
            <li><b>Events</b></li><li><a href="/test">GDOP</a></li>
            <li><a href="/about">Town Hall</a></li>
            <li><a href="/about">Leadership visits</a></li>
          </ul>
          <ul>
            <li><img src={engagement} alt="News Article"/></li>
            <li><b>Engagements</b></li>
            <li><a href="/about">Employee Resource Groups</a></li>
            <li><a href="/about">Testimonials</a></li>
            <li><a href="/about">Business Integration</a></li>
          </ul>
          </div>  
          </div>
          <div class="item">
            <span
              href="about"
              className={this.state.openMenu === 2 ? "hoverClass" : ""}
              onMouseOut={() => this.menuMouseOut()}
              onMouseOver={() => this.menuMouseOver(2)}
              onClick={() => this.menuMouseClick(2)}>
              Capabilities
            </span>
          <div 
            className={this.state.openMenu === 2 ? "submenu homeMenu capabilityMenu" : "submenu"}
            onMouseOver={() => this.subMenuMouseOver(2)}
            onMouseOut={this.subMenuMouseOut}
          >
          <ul>
            <li><img src={rnd} alt="Research and Development"/></li>
            <li><b>Research and Development</b></li>
            <li className="subheading">
              Global Regulatory
              <ul>
                <li><a href="/test">CMC</a></li>
                <li><a href="/test">Safety</a></li>                
                <li><a href="/test">Quality</a></li>
              </ul>
            </li>
            <li className="subheading">
              Global Operations
              <ul>
                <li><a href="/test">Document Management</a></li>                
                <li><a href="/test">Biostatics and Data Management</a></li>                
                <li><a href="/test">Project Management</a></li>
              </ul>
            </li>
            <li className="subheading">Bioinformatics</li>
          </ul>
          <ul>
            <li><img src={globalmarketing} alt="Global Marketing"/></li>
            <li><b>Global Marketing</b></li>
            <li><a href="/test">Marketing Analytics</a></li>
            <li><a href="/test">Digital Marketing</a></li>
            <li><a href="/test">Marketing Ops</a></li>
          </ul>
          <ul>
            <li><img src={globalcommercialops} alt="Global Commercial Ops"/></li>
            <li><b>Global Commercial Ops</b></li>
            <li><a href="/test">Descriptive Analytics</a></li>
            <li><a href="/test">Advanced Analytics</a></li>
            <li><a href="/test">Technical Academic & Consumer Service(TACS)</a></li>
         
            <li class="subListing"><img src={eks} alt="Elanco Knowledge Solutions"/></li>
            <li><b>Elanco Knowledge Solutions</b></li>
            <li><a href="/test">Innovation</a></li>
            <li><a href="/test">Operations</a></li>
          </ul>
          <ul>
            <li><img src={globalfinance} alt="Global Finance"/></li>
            <li><b>Global Finance</b></li>
            <li><a href="/test">US Finance</a></li>
            <li><a href="/test">Intl Finance</a></li>           
            
            <li class="subListing" id="it"><img src={it} alt="Information Technology"/></li>
            <li><b>Information Technology</b></li>
            <li><a href="/test">Data Engineering</a></li>
            <li><a href="/test">UI/UX</a></li>
          </ul>
          <ul>
            <li><img src={manufacturing} alt="Manufacturing"/></li>
            <li><b>Manufacturing</b></li>
            <li><a href="/test">Supply Chain</a></li>
          </ul>
          </div>
          </div>
          <div class="item">
            <span href="governance" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(3)} onClick={() => this.menuMouseClick(3)}>Governance</span>
          </div>
          <div class="item"><span href="products" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(4)} onClick={() => this.menuMouseClick(4)}>Engage Us</span>
          </div>
          <div class="item"><span href="products" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(5)} onClick={() => this.menuMouseClick(5)}>Quick Links</span>
          </div>  
          </div>    
          <div className="actionIcon" ><img src={search} className="search" alt="Search" onClick={() => this.showSearchbox()} /></div>
          <div className="actionIcon"><a href="login"><img src={login} alt="Login" /></a></div>
          <div className="actionIcon locateus"><a href="locate"><img src={locate} alt="Locate Us" /></a></div>
          <img src={logo} className="elanco-logo" alt="logo" />
          </div>
          <div className={this.state.displaySearch ? "searchBar show" : "searchBar"}><div class="searchButton"><FontAwesomeIcon icon="search" /></div><div class="searchFeatures"><input type="text" placeholder="Search"/></div></div>
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