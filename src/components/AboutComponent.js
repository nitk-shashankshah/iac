import React from 'react';
import logo from '../assets/images/logo.svg';
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
import iac from '../assets/images/pic1.svg';
import india from '../assets/images/india.svg';

import mission from '../assets/images/mission.svg';
import csrimage from '../assets/images/csr.svg';

import pic1 from '../assets/images/Mukta.jpg';
import pic2 from '../assets/images/Sajeesh.jpg';
import pic3 from '../assets/images/LKN.jpg';
import diversity from '../assets/images/diversity.svg';

import './css/home.css';
import './css/about.css';

import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faKey, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faKey, faSearch);

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isResponsive: false,
      openMenu: 0,
      displaySearch: false,
      activeLink:1,
      row:-1,
      col:0,
      info:[["Elanco", "needs", "sdsd"], ["xds","ds","sdds sdsd"], ["zxx", "ffdfd", "pop"]] 
    };
    this.rollMenu = this.rollMenu.bind(this);
    this.menuMouseOver = this.menuMouseOver.bind(this);
    this.subMenuMouseOut = this.subMenuMouseOut.bind(this);    
    this.menuMouseOut = this.menuMouseOut.bind(this);
    this.showSearchbox = this.showSearchbox.bind(this);
    this.learnMore = this.learnMore.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }
  menuMouseOut(){

  }

  closeInfo() {
    this.setState({row:-1});
  }

  learnMore(x,y) {
    this.setState({row:x});
    this.setState({col:y});    
  }

  componentDidMount(){
    $('.searchFeatures').after().click(() => {
      this.setState({"displaySearch":false});
    });
  
    var isAnimate = false;

    $(window).on('scroll', function() {
      if (isAnimate == false) {
       if ((window.scrollY <= $("#history").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(0).find("a").addClass("active");
       }
       else if ((window.scrollY > $("#history").offset().top - 150)  && (window.scrollY <= $("#whyIAC").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(0).find("a").addClass("active");
       }
       else if ((window.scrollY > $("#whyIAC").offset().top - 150) && (window.scrollY <= $("#globalCapabilityCenter").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(1).find("a").addClass("active");
       }
       else if ((window.scrollY > $("#globalCapabilityCenter").offset().top - 150) && (window.scrollY <= $("#leadership").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(2).find("a").addClass("active");
       }
       else if ((window.scrollY > $("#leadership").offset().top - 150) && (window.scrollY <= $("#mission").offset().top - 150)){        
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(3).find("a").addClass("active");
       }
       else if ((window.scrollY > $("#mission").offset().top - 150) && (window.scrollY <= $("#diversity").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(4).find("a").addClass("active");
       }       
       else if ((window.scrollY > $("#diversity").offset().top - 150) && (window.scrollY <= $("#csr").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(6).find("a").addClass("active");
       }
       else if ((window.scrollY > $("#csr").offset().top - 150) && (window.scrollY <= $("#innovation").offset().top - 150)){
        $('.navPanel ul li a').removeClass("active");
        $(".navPanel ul").find("li").eq(7).find("a").addClass("active");
       }
      }
       if (window.scrollY > 200) {
         $("header").addClass("headerSticky");
         $("#headStrip").addClass("headStripSticky");
         $("#movableLogo").addClass("movableLogo");
       }
       else { 
         $("header").removeClass("headerSticky");
         $("#headStrip").removeClass("headStripSticky");
         $("#movableLogo").removeClass("movableLogo");
       }
    });

    $('.navPanel ul li a').mouseover(function(){
      $(this).addClass("hoverMe");
    });
    $('.navPanel ul li a').mouseout(function(){
      $(this).removeClass("hoverMe");
    });
    $('.navPanel ul li a').click(function(){     
        var lnk = $(this);
        isAnimate = true;
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 150
          }, 500, 'swing', function() {
            $('a').removeClass("active");
            lnk.addClass("active");
          });
        setTimeout(function(){ isAnimate = false; }, 1000);
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
          <img className="App-logo" src={iaclogo} alt="logo" id="movableLogo" />
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
            className={this.state.openMenu === 1 ? "submenu homeMenu fixed" : "submenu fixed"}
            onMouseOver={() => this.subMenuMouseOver(1)}
            onMouseOut={this.subMenuMouseOut}
          >
          <ul>
            <li><img src={iacoverview} alt="IAC Overview"/></li>
            <li><b>IAC Overview</b></li>
            <li><a href="/test">History</a></li>
            <li><a href="/test">Why IAC</a></li>
            <li><a href="/test">Global Capability Center</a></li>
            <li><a href="/test">Leadership</a></li>
            <li><a href="/test">Mission</a></li>
            <li><a href="/test">Governance</a></li>
            <li><a href="/test">Diversity and Inclusion</a></li>
            <li><a href="/test">CSR</a></li>
            <li><a href="/test">Innovation</a></li>
            <li><a href="/test">Success Stories</a></li>
            <li><a href="/test">FAQs</a></li>
          </ul>
          <ul>
            <li><img src={newsarticle} alt="News Article"/></li>
            <li><b>News Articles</b></li>
            <li><a href="/test">Top Stories</a></li>
            <li><a href="/test">Newsletters</a></li>
            <li><a href="/test">eMagaines</a></li>
          </ul>
          <ul>
            <li><img src={event} alt="News Article"/></li>
            <li><b>Events</b></li><li><a href="/test">GDOP</a></li>
            <li><a href="/test">Town Hall</a></li>
            <li><a href="/test">Leadership visits</a></li>
          </ul>
          <ul>
            <li><img src={engagement} alt="News Article"/></li>
            <li><b>Engagements</b></li>
            <li><a href="/test">Employee Resource Groups</a></li>
            <li><a href="/test">Testimonials</a></li>
            <li><a href="/test">Business Integration</a></li>
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
      <main class="layout">
        <div className="aboutBanner">
          <div class="detailSection">          
          </div>
          <div class="chatBtn" style={{top:"220px"}}>          
          <img src={chat} alt="Chat with us"/>
            <p>Chat With Us</p>
          </div>
        </div>
        <div id="headStrip" >
           <div style={{width:"90%", margin:"0px auto"}}>
             <ul class="tabs"><li><a href="#iac" class="active">IAC Overview</a></li><li><a href="#news">News Articles</a></li><li><a href="#events">Events</a></li><li><a href="#engagements">Engagements</a></li></ul>
           </div>
        </div>
        <div class="content">
           <div class="navPanel">
           <ul>
              <li><a href="#history" className={this.state.activeLink==1 ? "active": ""}>History</a></li>              
              <li><a href="#whyIAC" className={this.state.activeLink==2 ? "active": ""}>Why IAC</a></li>
              <li><a href="#globalCapabilityCenter" className={this.state.activeLink==3 ? "active": ""}>Global Capability Center</a></li>
              <li><a href="#leadership" className={this.state.activeLink==4 ? "active": ""}>Leadership Team</a></li>
              <li><a href="#mission" className={this.state.activeLink==5 ? "active": ""}>Mission</a></li>
              <li><a href="#governance" className={this.state.activeLink==6 ? "active": ""}>Governance</a></li>
              <li><a href="#diversity" className={this.state.activeLink==7 ? "active": ""}>Diversity & Inclusion</a></li>              
              <li><a href="#csr" className={this.state.activeLink==8 ? "active": ""}>CSR</a></li>
              <li><a href="#innovation" className={this.state.activeLink==9 ? "active": ""}>Innovation</a></li>
              <li><a href="#successStories" className={this.state.activeLink==10 ? "active": ""}>Success Stories</a></li>
              <li><a href="#faqs" className={this.state.activeLink==11 ? "active": ""}>FAQs</a></li>
           </ul>
           </div>
           <div class="contentPanel">
               <div class="topic" id="history">
                 <h3>History</h3>
                 <p>
                 Elanco Innovation & Alliance Centre India is registered in India on 14th March, 2019, it has been formally inaugurated by Aaron Schacht,
Executive VP on 1st October, 2019. We believe in leading through Innovation Productivity and Portfolio (IPP) strategy.
                 </p>
               </div>
               
               <div class="topic" id="whyIAC">
                 <h3>Why IAC</h3>
                
                 <div style={{display:"table-cell", width:"50%",verticalAlign:"middle", paddingRight:"10px"}}>
Elanco needs to continue identifying further opportunities to foster 
innovations, improve productivity and drive cost savings which can 
then be reinvested in the long-term sustainability of our portfolio.
Building an in-house capabilities centre in India is an opportunity 
which was identified to contribute to this strategic goal.
IAC was established in Bangalore, India to leverage the opportunity 
and contributes towards company growth by having global centres 
of excellence set up for various Elanco Business Units. 
IAC drives cost savings while also providing access to high level,
experienced talent in a deep labor market.</div>    
                 <div style={{display:"table-cell", width:"40%", verticalAlign:"middle"}}> 
                   <img src={iac} width="100%" />
                 </div>
                 <div style={{clear:"both"}}></div>
               </div>

               
               <div class="topic" id="globalCapabilityCenter">
                 <h3>Global Capability Center</h3>
                 <p>                 
There has been a significant increase in the adoption of the GCC model by several global enterprises with approximately 2000 GICs 
operational globally, half of which are situated in India.
                 </p>             
                 <div className="lhs">
                   <img src={india} style={{"width":"80%"}}/>
                 </div>
                 <div className="rhs">
                   <div className="box box1">
                    <p>
                    India to have world's largest youth population by 2020.<br/>
                    <span>Source: United Nations Population Fund</span>
                    </p>
                    <p>
                    India to be the largest supplier of university graduates in the world by 2020.<br/>
                    <span>Source: British Council</span>
                    </p>
                    <p>
                    India has the third largest group of scientists and technicians in the world.<br/>
                    <span>Source: All India Management Association & The Boston Consulting Group</span>
                    </p>
                    </div>
                    <div className="box box2">
                    <p><b>Bangalore</b></p>

<p>Silicon Valley of India</p>

<p>3rd largest city (10 m+)</p>

<p>Vibrant, diverse and deep talent pool</p>
 
<p>Transformed by IT revolution; home
to 50% startups and biotech companies</p>
                    </div>
                    <div className="box box3">
                    <p>Indian Economy 2.6 $ Trillion,</p>

<p>5th largest Economy </p>

 <p>Fastest growing @7 %</p>

<p style={{marginLeft:"7%",lineHeight:"22px"}}>
           Services: 53.9 per cent<br/>
           Industry: 29.1 per cent<br/>
           Agriculture: 17.1 per cent</p>
                    </div>
                 </div>
                 <div style={{clear:"both"}}></div>

                 <div class="banners">
                  <div class="flicker banner1">
                    <div className="diversity">
                       <p>27%</p> 
                       <p><span>Of the US based Global 2000 companies have a GIC in India</span></p>  
                    </div>
                  </div>
                  <div class="flicker banner2">
                    <div className="diversity">
                       <p>40% </p> 
                       <p><span>Of retail GICs were established in the last 5 years</span></p>  
                   </div>
                  </div>
                  <div class="flicker banner3">
                    <div className="diversity">
                       <p>1400+</p> 
                       <p><span>MNCs have set up GICs in India, till date</span> </p>                        
                    </div>
                  </div>
                  <div class="flicker banner4">
                    <div className="diversity">
                       <p>1.5M </p> 
                       <p><span>The current installed talent in GCCI</span></p>                      
                    </div>
                  </div>
                </div>
                <div style={{clear:"both"}}></div>
               </div>
               
               <div class="topic" id="leadership">
                 <h3>Leadership Team</h3>
                 <h3 class="topic" style={{"float":"left"}}>Site Leaders</h3>
                 <div class="row">
                   <div class="leaderboard centerAlign">
                      <div class="picture"><img src={pic1} /></div>
                      <div class="leaderDetails">
                         <div class="profile">
                         <span class="name">Mukta Arora</span><br/>
                             Managing Director, EIACI<br/>
                             R&D Regulatory & Admin
                         </div>
                         <div class="knowMore"><a href="/leadership">Know more about Mukta...</a></div>
                      </div>   
                      <div style={{clear:"both"}} />                  
                   </div>
                 </div>
                 <div class="row">
                   <div class="leaderboard">
                   <div class="picture"><img src={pic2} /></div>
                      <div class="leaderDetails">
                         <div class="profile">
                         <span class="name">Sajeesh Krishnan</span><br/>
                           Director Business Integration
                         </div>
                         <div class="knowMore"><a href="/leadership">Know more about Sajeesh...</a></div>
                      </div>        
                   </div>
                   <div class="leaderboard">
                   <div class="picture"><img src={pic3} /></div>
                      <div class="leaderDetails">
                         <div class="profile">
                           <span class="name">Lakshminarayanan</span><br/>
                           Director,Finance & HR-EIACI
                         </div>
                         <div class="knowMore"><a href="/leadership">Know more about Lakshmi...</a></div>
                      </div>        
                   </div>
                 </div>


                 <h3 class="topic" style={{"float":"left"}}>Functional Leaders</h3>
                 <div class="row">
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div>
                     <div style={{clear:"both"}} />  
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(0,0)}>Learn More</span>
                     </div>
                   </div>
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />      
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(0,1)}>Learn More</span>
                     </div>
                   </div>
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />      
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(0,2)}>Learn More</span>
                     </div>
                   </div>                
                  </div>
                  <div class="row">
                    <div className={this.state.row === 0 ? "info show" : "info"}>
                      <div class="close"><input type="button" value="X" onClick={()=>this.closeInfo()}/></div>
                      <p>{this.state.info[0][this.state.col]}</p>
                    </div>
                  </div>
                  <div class="row">
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />     
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(1,0)}>Learn More</span>
                     </div> 
                   </div>
                   
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />     
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(1,1)}>Learn More</span>
                     </div> 
                   </div>

                   <div class="funcleaderboard">
                     <div class="funcPicture"></div>
                     <div style={{clear:"both"}} />  
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(1,2)}>Learn More</span>
                     </div>     
                   </div>
                  </div>
                  <div class="row">
                    <div className={this.state.row === 1 ? "info show" : "info"}>
                      <div class="close"><input type="button" value="X" onClick={()=>this.closeInfo()}/></div>
                    <p>{this.state.info[1][this.state.col]}</p>
                    </div>
                  </div>

                  <div class="row">
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />     
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(2,0)}>Learn More</span>
                     </div> 
                   </div>
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />      
                     <div class="desc">
                     <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(2,1)}>Learn More</span>
                     </div>
                   </div>
                   <div class="funcleaderboard">
                     <div class="funcPicture"></div> 
                     <div style={{clear:"both"}} />      
                     <div class="desc">
                           <span class="name">Name Surname</span><br/>
                           Director,Finance & HR-EIACI<br/>
                     <span onClick={()=>this.learnMore(2,2)}>Learn More</span>
                     </div>
                   </div>
                 </div>
                 <div class="row">
                    <div className={this.state.row === 2 ? "info show" : "info"}>
                      <div class="close"><input type="button" value="X" onClick={()=>this.closeInfo()}/></div>
                    <p>{this.state.info[1][this.state.col]}</p>
                    </div>
                  </div>
                 <div style={{clear:"both"}}></div>
               </div>

               
               <div class="topic" id="mission">
                 <h3>Mission</h3>
                 <p>                
                 <div style={{display:"table-cell", width:"50%",verticalAlign:"middle", paddingRight:"10px", color:"#303f6a", fontWeight:"normal", lineHeight:"36px", fontSize:"28px", textAlign:"center"}}>
                 Our mission is to enable Elanco’s IPP 
strategy by building global capabilities, 
fostering innovations and forging 
external alliances</div>    
                 <div style={{display:"table-cell", width:"40%", verticalAlign:"middle"}}> 
                   <img src={mission} width="100%" />
                 </div>
                 <div style={{clear:"both"}}></div>
                 </p>
               </div>

                              
               <div class="topic" id="diversity">
                 <h3>Diversity & Inclusion</h3>
                 <p>          
                 <div style={{display:"table-cell", width:"40%", verticalAlign:"middle"}}> 
                   <img src={diversity} width="100%" />
                 </div>      
                 <div style={{display:"table-cell", width:"50%",verticalAlign:"middle", paddingRight:"10px", textAlign:"left"}}>
                 At IAC, we are focused on discovering new ways for innovation and 
productivity to help our business thrive which requires a culture 
where our members are willing to bring their diverse backgrounds, 
strengths and perspective into the workplace. Our culture of inclusi-
on and focus on health and well-being helps ensure that everyone –
regardless of background – feels included and can contribute at 
their best.</div>                 
                 </p>
                 <div className="row" style={{marginBottom:"0px"}}>
                   <div className="diversity">
                       <p>17+</p>
                       <p><span>State diversity of employees</span></p>
                   </div>
                   
                   <div className="diversity">
                       <p>50%</p>
                       <p><span>Diversity in leadership</span></p>
                   </div>
                   
                   <div className="diversity">
                       <p>40%</p>
                       <p><span>Women in IAC workforce</span></p>
                   </div>
                 </div>
                 
                 <div className="row"  style={{marginBottom:"0px"}}>
                   <div className="diversity">
                       <p>125+</p>
                       <p><span>Employees</span></p>
                   </div>
                   
                   <div className="diversity">
                       <p>32</p>
                       <p><span>Average age of employees</span></p>
                   </div>
                   
                   <div className="diversity">
                       <p>8+</p>
                       <p><span>Average years of experience</span></p>
                   </div>
                 </div>  
                 <div style={{clear:"both"}}></div>
                </div>

               <div class="topic" id="csr">
                 <h3>Corporate Social Responsibility</h3>
                 <p>                
                 <div style={{display:"table-cell", width:"50%", verticalAlign:"middle", paddingRight:"10px", textAlign:"left"}}>
                 IAC is of the belief that when businesses are conscious of their social 
and environmental impact on the world, they can benefit society by 
giving back and helping to find solutions to everyday issues. Our CSR
activities are aligned with the Global framework Elanco’s Healthy Pur-
pose that embody the very belief through programs that advance the
well-being of animals, people and the planet.</div>    
                 <div style={{display:"table-cell", width:"40%", verticalAlign:"middle"}}> 
                   <img src={csrimage} width="100%" />
                 </div>
                 <div style={{clear:"both"}}></div>
                 </p>
               </div>

               
               <div class="topic" id="governance"></div>
               
               <div class="topic" id="innovation"></div>
               
               <div class="topic" id="successStories"></div>
               
               <div class="topic" id="faqs"></div>
           </div>
        </div>
      </main>
      </div>
  );
  }
}

export default AboutComponent;