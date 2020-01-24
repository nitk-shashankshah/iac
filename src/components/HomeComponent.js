import React from 'react';
import logo from '../assets/images/logo.svg';
import slider1 from '../assets/images/1.svg';
import slider2 from '../assets/images/2.svg';
import slider3 from '../assets/images/3.svg';
import slider4 from '../assets/images/4.svg';
import slider5 from '../assets/images/5.svg';
import slider6 from '../assets/images/6.svg';
import slider7 from '../assets/images/7.svg';
import iaclogo from '../assets/images/iaclogo.svg';
import 'font-awesome/css/font-awesome.min.css';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: [slider1, slider2, slider3, slider4, slider5,slider6, slider7],
      widths: [150,150,150,278,150,150,150],
      heights: [230,260,290,321,290,260,230],
      opacity: [0.5,0.5,0.5,1,0.5,0.5,0.5],
      tops: [-30,-20,-10,0,-10,-20,-30]
    };
    this.rollSlider = this.rollSlider.bind(this);
  }

  rollSlider(e) {
    this.setState({widths: this.state.widths.map((val,ind) => (ind === parseInt(e.target.getAttribute('datakey'))) ? 278 : 150)});
    var hgts=this.state.heights;
    var tops=this.state.tops;
    var opacities=this.state.opacity;
    opacities = opacities.map(x=> {return 0.5});
    opacities[parseInt(e.target.getAttribute('datakey'))]=1;
    var cnt=0;
    for (var j=parseInt(e.target.getAttribute('datakey')); j<this.state.images.length; j++) {
      hgts[j] = 321-cnt*30;
      tops[j] = -cnt*15;      
      cnt++;
    }
    cnt=0;
    for (j=parseInt(e.target.getAttribute('datakey')); j>=0; j--) {
      hgts[j] = 321-cnt*30;      
      tops[j] = -cnt*15;
      cnt++;
    }
    this.setState({heights: hgts});    
    this.setState({tops: tops});
    this.setState({opacity: opacities});
  }

  render() {
  return (
    <div>
      <header className="header">
        <img src={iaclogo} className="App-logo" alt="logo" />
        <ul className="menu">
          <li><a href="home">About Us</a>
          <div className="submenu homeMenu">
          <ul><li>afsfd</li><li>sdfsdf</li><li>zxczxc</li><li>fgfgfg</li></ul>
          <ul><li>hgfhfg</li><li>yertert</li><li>poiuyt</li></ul>
          <ul><li>vsfsfsdf</li><li>mnbvc</li><li>kjhgfd</li><li>asasdasd</li></ul>
          <ul><li>brertert</li><li>tsdfsdf</li><li>hjhkjhk</li></ul>
          </div>  
          </li>
          <li><a href="about">Capabilities</a>
          <div className="submenu aboutMenu">
          <ul><li>afsfd</li><li>sdfsdf</li><li>zxczxc</li><li>fgfgfg</li></ul>
          <ul><li>hgfhfg</li><li>yertert</li><li>poiuyt</li></ul>
          <ul><li>vsfsfsdf</li><li>mnbvc</li><li>kjhgfd</li><li>asasdasd</li></ul>
          <ul><li>brertert</li><li>tsdfsdf</li><li>hjhkjhk</li></ul>
          </div>  
          </li>
          <li><a href="governance">Governance</a>
          <div className="submenu contactMenu">
          <ul><li>afsfd</li><li>sdfsdf</li><li>zxczxc</li><li>fgfgfg</li></ul>
          <ul><li>hgfhfg</li><li>yertert</li><li>poiuyt</li></ul>
          <ul><li>vsfsfsdf</li><li>mnbvc</li><li>kjhgfd</li><li>asasdasd</li></ul>
          <ul><li>brertert</li><li>tsdfsdf</li><li>hjhkjhk</li></ul>
          </div>  
          </li>
          <li><a href="products">Engage Us</a>
          <div className="submenu productsMenu">
          <ul><li>afsfd</li><li>sdfsdf</li><li>zxczxc</li><li>fgfgfg</li></ul>
          <ul><li>hgfhfg</li><li>yertert</li><li>poiuyt</li></ul>
          <ul><li>vsfsfsdf</li><li>mnbvc</li><li>kjhgfd</li><li>asasdasd</li></ul>
          <ul><li>brertert</li><li>tsdfsdf</li><li>hjhkjhk</li></ul>
          </div>  
          </li>
          <li><a href="products">Quick Links</a>
          <div className="submenu productsMenu">
          <ul><li>afsfd</li><li>sdfsdf</li><li>zxczxc</li><li>fgfgfg</li></ul>
          <ul><li>hgfhfg</li><li>yertert</li><li>poiuyt</li></ul>
          <ul><li>vsfsfsdf</li><li>mnbvc</li><li>kjhgfd</li><li>asasdasd</li></ul>
          <ul><li>brertert</li><li>tsdfsdf</li><li>hjhkjhk</li></ul>
          </div>  
          </li>
          <li><i className="fa fa-search" aria-hidden="true"></i></li>
          <li><i className="fa fa-user" aria-hidden="true"></i></li>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i></li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />    
      </header>
      <main>
        <div className="banner">
          <div className="detailSection">
            <h3 className="pageHeading">Leading Through Innovation</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
            <a href="more" class="btn primary">Know More</a>
            <a href="watchVideoBtn" class="btn activeBtn">Watch Video..</a>
          </div>
          <div class="chatBtn">          
            <i className='fa fa-comments' style={{"fontSize":"48px"}}></i>
            <p>Chat With Us</p>
          </div>
        </div>                
        <div className="slideshow-container">
          <h2>Our Capabilities</h2>
          <a class="prev">&#10094;</a>
          <div className="mySlides1">
            {this.state.images.map((item, index) => {
              {{return <div key={index} style={{ overflow:"hidden", opacity: this.state.opacity[index], background: "#fff", top: this.state.tops[index], width: this.state.widths[index], height: this.state.heights[index]}} ><img src={item} datakey={index} style={{opacity: this.state.opacity[index], height:"100%"}} onMouseOver={this.rollSlider}/></div>}}
            })}
          </div>
          <a class="next">&#10095;</a>
        </div>
      </main>
    </div>
  );
  }
}

export default HomeComponent;