import React from 'react';
import logo from '../assets/images/logo.svg';
import slider1 from '../assets/images/eks.png';
import slider2 from '../assets/images/globalfinance.svg';
import slider3 from '../assets/images/global commercial.png';
import slider4 from '../assets/images/globalmarketing.png';
import slider5 from '../assets/images/it.png';
import slider6 from '../assets/images/manufacturing.png';
import slider7 from '../assets/images/researchndev.png';
import iaclogo from '../assets/images/iaclogo.svg';
import Radium from "radium";
import 'font-awesome/css/font-awesome.min.css';
var Coverflow = require('react-coverflow');

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
    alert(this.state.openMenu);
  }

  menuMouseOut() {

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
        <img src={iaclogo} className="App-logo" alt="logo" />
        <ul className={this.state.isResponsive ? "responsive menu" : "menu"}>
          <li><a href="home" onMouseOut={() => this.menuMouseOut()} onMouseOver={() => this.menuMouseOver(1)}>About Us</a>
          <div className={this.state.openMenu == 1 ? "submenu homeMenu" : "submenu"} onMouseOver={() => this.subMenuMouseOver(1)} onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>  
          </li>
          <li><a href="about">Capabilities</a>
          <div className="submenu capabilityMenu" onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>    
          </li>
          <li><a href="governance">Governance</a>
          <div className="submenu governanceMenu" onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>    
          </li>
          <li><a href="products">Engage Us</a>
          <div className="submenu engageMenu" onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>   
          </li>
          <li><a href="products">Quick Links</a>
          <div className="submenu quickLinksMenu" onMouseOut={this.subMenuMouseOut}>
          <ul><li><b>IAC Overview</b></li><li><a href="/test">History</a></li><li><a href="/test">Global Capability Center</a></li><li><a href="/test">Leadership</a></li><li><a href="/test">Mission & Vision</a></li><li><a href="/test">Diversity & Inclusion</a></li><li><a href="/test">CSR</a></li><li><a href="/test">Innovation</a></li><li><a href="/test">Success Stories</a></li><li><a href="/test">FAQs</a></li></ul>
          <ul><li><b>News Articles</b></li><li><a href="/test">Top Stories</a></li><li><a href="/test">Newsletters</a></li><li><a href="/test">eMagaines</a></li></ul>
          <ul><li><b>Events</b></li><li><a href="/test">GDOP</a></li><li><a href="/test">Town Hall</a></li><li><a href="/test">Leadership visits</a></li></ul>
          <ul><li><b>Engagements</b></li><li><a href="/test">Employee Resource Groups</a></li><li><a href="/test">Testimonials</a></li><li><a href="/test">Business Integration</a></li></ul>
          </div>    
          </li>       
          <li className="actionIcon"><a href="location"><i className="fa fa-search" aria-hidden="true"></i></a></li>
          <li className="actionIcon"><a href="user"><i className="fa fa-user" aria-hidden="true"></i></a></li>
          <li className="actionIcon"><a href="search"><i className="fa fa-map-marker" aria-hidden="true"></i></a></li>
          <li><img src={logo} className="extra-logo" alt="logo" /></li>
        </ul>
        <div className="icon"><i className="fa fa-bars" onClick={this.rollMenu}></i></div>
        <div style={{"clear":"both"}}/>     
      </header>
      <main>
        <div className="banner">
          <div class="detailSection">
            <div className="details">
            <h3 className="pageHeading">Leading Through Innovation</h3>
            <p>IAC is Elanco's Global Capability Center (GCC), established in India, and is a key pillar in driving Elanco's IPP strategy. GCC or Global Capability Center is an offshore, owned, integrated strategic platform for leveraging global talent.</p>
            <a href="more" className="btn primary">Know More</a>
            <a href="watchVideoBtn" className="btn activeBtn">Watch Video..</a>
            </div>
          </div>
          <div class="chatBtn">          
            <i className="fa fa-comments"></i>
            <p>Chat With Us</p>
          </div>
        </div>                  
        <div class="sliderSection">     
        <h2>Our Capabilities</h2>
        <Coverflow
          displayQuantityOfSide={3}
          navigation={false}
          enableHeading={false}
          clickable
          infiniteScroll
          media={{
            '@media (max-width: 767px)': {
              width: '80%',
              height: 'calc(50vmin)'
            },
            '@media (min-width: 768px)': {
              width: '700px',
              height: '360px'
            },
            '@media (min-width: 992px)': {
              width: '900px',
              height: '420px'
            },
            '@media (min-width: 1200px)': {
              width: '1200px',
              height: 'calc(80vmin)'
            },
            '@media (min-width: 1400px)': {
              width: '90%',
              height: 'calc(60vmin)'
            }
          }} 
        >
          <img src={slider1} alt='Album one' data-action="http://passer.cc"/>
          <img src={slider2} alt='Album two' data-action="http://passer.cc"/>
          <img src={slider3} alt='Album three' data-action="https://doce.cc/"/>
          <img src={slider4} alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src={slider5} alt='Album six' data-action="https://medium.com"/>
          <img src={slider6} alt='Album seven' data-action="http://www.google.com"/>
          <img src={slider7} alt='Album one' data-action="https://facebook.github.io/react/"/>
        </Coverflow>
        </div>
        </main>
        </div>
  );
  }
}

export default Radium(HomeComponent);