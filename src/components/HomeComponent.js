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
      isResponsive: false
    };
    this.rollMenu = this.rollMenu.bind(this);
    this.fn = this.fn.bind(this);
  }

  fn() {
    /* do you want */  
  }
  
  rollMenu() {
    this.setState({isResponsive: !this.state.isResponsive});
  }

  render() {
  return (
    <div>
      <header className="header">
        <img src={iaclogo} className="App-logo" alt="logo" />
        <ul className="menu">
          <li><a href="home">About Us</a>
          <div className="submenu homeMenu">
          <ul><li><b>IAC Overview</b></li><li>History</li><li>Global Capability Center</li><li>Leadership</li><li>Mission & Vision</li><li>Diversity & Inclusion</li><li>CSR</li><li>Innovation</li><li>Success Stories</li><li>FAQs</li></ul>
          <ul><li><b>News Articles</b></li><li>Top Stories</li><li>Newsletters</li><li>eMagaines</li></ul>
          <ul><li><b>Events</b></li><li>GDOP</li><li>Town Hall</li><li>Leadership visits</li></ul>
          <ul><li><b>Engagements</b></li><li>Employee Resource Groups</li><li>Testimonials</li><li>Business Integration</li></ul>
          </div>  
          </li>
          <li><a href="about">Capabilities</a>
          <div className="submenu capabilityMenu">
          <ul><li><b>IAC Overview</b></li><li>History</li><li>Global Capability Center</li><li>Leadership</li><li>Mission & Vision</li><li>Diversity & Inclusion</li><li>CSR</li><li>Innovation</li><li>Success Stories</li><li>FAQs</li></ul>
          <ul><li><b>News Articles</b></li><li>Top Stories</li><li>Newsletters</li><li>eMagaines</li></ul>
          <ul><li><b>Events</b></li><li>GDOP</li><li>Town Hall</li><li>Leadership visits</li></ul>
          <ul><li><b>Engagements</b></li><li>Employee Resource Groups</li><li>Testimonials</li><li>Business Integration</li></ul>
          </div>    
          </li>
          <li><a href="governance">Governance</a>
          <div className="submenu governanceMenu">
          <ul><li><b>IAC Overview</b></li><li>History</li><li>Global Capability Center</li><li>Leadership</li><li>Mission & Vision</li><li>Diversity & Inclusion</li><li>CSR</li><li>Innovation</li><li>Success Stories</li><li>FAQs</li></ul>
          <ul><li><b>News Articles</b></li><li>Top Stories</li><li>Newsletters</li><li>eMagaines</li></ul>
          <ul><li><b>Events</b></li><li>GDOP</li><li>Town Hall</li><li>Leadership visits</li></ul>
          <ul><li><b>Engagements</b></li><li>Employee Resource Groups</li><li>Testimonials</li><li>Business Integration</li></ul>
          </div>    
          </li>
          <li><a href="products">Engage Us</a>
          <div className="submenu engageMenu">
          <ul><li><b>IAC Overview</b></li><li>History</li><li>Global Capability Center</li><li>Leadership</li><li>Mission & Vision</li><li>Diversity & Inclusion</li><li>CSR</li><li>Innovation</li><li>Success Stories</li><li>FAQs</li></ul>
          <ul><li><b>News Articles</b></li><li>Top Stories</li><li>Newsletters</li><li>eMagaines</li></ul>
          <ul><li><b>Events</b></li><li>GDOP</li><li>Town Hall</li><li>Leadership visits</li></ul>
          <ul><li><b>Engagements</b></li><li>Employee Resource Groups</li><li>Testimonials</li><li>Business Integration</li></ul>
          </div>   
          </li>
          <li><a href="products">Quick Links</a>
          <div className="submenu quickLinksMenu">
          <ul><li><b>IAC Overview</b></li><li>History</li><li>Global Capability Center</li><li>Leadership</li><li>Mission & Vision</li><li>Diversity & Inclusion</li><li>CSR</li><li>Innovation</li><li>Success Stories</li><li>FAQs</li></ul>
          <ul><li><b>News Articles</b></li><li>Top Stories</li><li>Newsletters</li><li>eMagaines</li></ul>
          <ul><li><b>Events</b></li><li>GDOP</li><li>Town Hall</li><li>Leadership visits</li></ul>
          <ul><li><b>Engagements</b></li><li>Employee Resource Groups</li><li>Testimonials</li><li>Business Integration</li></ul>
          </div>    
          </li>       
          <li className="actionIcon"><a href="location"><i className="fa fa-search" aria-hidden="true"></i></a></li>
          <li className="actionIcon"><a href="user"><i className="fa fa-user" aria-hidden="true"></i></a></li>
          <li className="actionIcon"><a href="search"><i className="fa fa-map-marker" aria-hidden="true"></i></a></li>
          <li><img src={logo} className="extra-logo" alt="logo" /></li>
        </ul>
        <div className="icon"><a href="test" onClick={this.rollMenu}><i className="fa fa-bars"></i></a></div>
        <div style={{"clear":"both"}}/>     
      </header>
      <main>
        <div className="banner">
          <div className="detailSection">
            <h3 className="pageHeading">Leading Through Innovation</h3>
            <p>IAC is Elanco's Global Capability Center (GCC), established in India, and is a key pillar in driving Elanco's IPP strategy. GCC or Global Capability Center is an offshore, owned, integrated strategic platform for leveraging global talent.</p>
            <a href="more" className="btn primary">Know More</a>
            <a href="watchVideoBtn" className="btn activeBtn">Watch Video..</a>
          </div>
          <div class="chatBtn">          
            <i className="fa fa-comments"></i>
            <p>Chat With Us</p>
          </div>
        </div>                        
        <h2>Our Capabilities</h2>
        <Coverflow
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          clickable
          infiniteScroll
          media={{
            '@media (max-width: 600px)': {
              width: '500px',
              height: '300px'
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
              height: '550px'
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

      </main>
    </div>
  );
  }
}

export default Radium(HomeComponent);