import React from "react";
import { Link } from "gatsby";


     	var Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="mobile-nav w-100 tc white  bg-dark-blue z-3 shadow-5">
          <input type="checkbox" id="burger" className="absolute top-2 right-1 dn" />
          <label htmlFor="burger" className="dn-l pointer absolute top-1 right-1">
            <i className="fa fa-bars white dib f2" />
          </label>
          <div className="fl w-15-ns w-20 pa2">
            <a className="dtc v-mid mid-gray link " href="#" title="Home">
              <img src="assets/ICIsquare_color_32x32.png" className="dib mw-100 h-auto" alt="Site Name" />
            </a>
          </div>
          <div className="fl w-65-ns w-60 pa2">
            <div className="link dim white b f2-ns db mb2 f5-m" href="#" title="Home">Institute for Community Inclusion</div>
          </div>
          <ul className="overflow-hidden menu db-l w-100 list tc pl0 pt3 mv0 f3 fw3 f5-l">
            {/*<li className="absolute top-1 static-l ph4 mh2 fw3 di-l pt1 pb3 pv3-l">
<a href="/" className="white link">
<img src="assets/ICIsquare_color_32x32.png" alt="dwyl heart logo" className="dib mw-100 h-auto">
Institute for Community Inclusion
</a>
</li> */}
            <li className="ph4  tl dn-l"><a href="/" className="white link">About ICI</a></li>
            <li className="ph4 di-l  tl pv0-l"><a href="#" className="white link">Areas of Emphasis</a></li>
            <li className="ph4 di-l  tl pv0-l"><a href="#" className="white link">Projects</a></li>
            <li className="ph4 di-l  tl pv0-l"><a href="#" className="white link">Services</a></li>
            <li className="ph4 dib-l  tl pv0-l"><a href="#" className="white link">Resources</a></li>
          </ul>
        </nav>
        {/*----End Mobile Nav */}
        <div className="desktop-nav mw9 center ">
          <div className="cf ph2-ns">
            <div className="fl w-15-ns w-20 pa2">
              <a className="dtc v-mid mid-gray link " href="#" title="Home">
                <img src="assets/ICIsquare_color_32x32.png" className="dib mw-100 h-auto" alt="Site Name" />
              </a>
            </div>
            <div className="fl w-65-ns w-60 pa2">
              <h1 className="link dim dark-blue b f2-ns db mb2  f5 " href="#" title="Home">Institute for Community Inclusion</h1>
              <span className="f5-ns f6 f-subheadline dark-blue tracked-mega-ns"> PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES</span>
            </div>
            <div className="fl w-20-ns w-20 pa2 ">
              <div className="db dtc-l v-mid w-100 w-75-l">
                <ul className="flex-container space-between list pl0">
                  <li className="flex-item dib"><a className="link dim dark-gray f6 dib " href="#" title="About">Subscribe </a></li>
                  <li className="flex-item dib"> <a className="link dim dark-gray f6 dib " href="#" title="Store">Contact</a></li>
                  <li className="flex-item dib"> <a className="link dim dark-gray f6 dib " href="#" title="Contact">Donate</a></li>
                </ul>
              </div>
              <div className="k--group mb2">
                <input className="k--input" type="text" placeholder="Search" />
                <button className="k--button" type="button">SEARCH</button>
              </div>
              <ul className="social-links flex-container space-between list pl0">
                <li className="flex-item dib">  <a href="https://twitter.com/ICInclusion" target="_blank" rel="noopener noreferrer"><i className="fab  fa-2x fa-twitter" /></a></li>
                <li className="flex-item dib"> <a href="https://www.instagram.com/communityinclusion/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-instagram" /></a></li>
                <li className="flex-item dib"> <a href="https://medium.com/@communityinclusion" target="_blank" rel="noopener noreferrer"><i className="fab  fa-2x fa-medium" /></a></li>
                <li className="flex-item dib"> <a href="https://www.facebook.com/communityinclusion/" target="_blank" rel="noopener noreferrer"><i className="fab  fa-2x fa-facebook-square" /></a></li>
                <li className="flex-item dib">  <a href="https://www.youtube.com/user/communityinclusion" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-youtube" /></a></li>
              </ul>
            </div>
          </div>
          <nav className="db dt-l w-100 border-box pa3 ph5-l bg-dark-blue ">
            <ul className="db dtc-l v-mid w-100 w-75-l tc  ">
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="About">ABOUT ICI</a></li>
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Store">AREAS OF EMPHASIS</a></li>
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Contact">PROJECTS</a></li>
              <li className="dib mr2">   <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Contact">SERVICES</a></li>
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib" href="#" title="Contact">RESOURCES</a></li>
            </ul>
          </nav>
        </div>
        <div classnamename="vh-100 dt o-80 w-100 tc bg-dark-gray white cover" style={{background: 'url(assets/boston-skyline.jpg) no-repeat center'}}>
          <div classnamename="dtc v-mid">
            <header classnamename="tc ph4 bg-white o-60">
              <h1 classnamenames="f3 f2-m f1-l fw2 dark-blue mv3"><em>PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES</em></h1>
            </header>
          </div>
        </div>
      </div>
    );
  }
});


export default Navbar
