import React, { Component } from 'react';
import './banner.css';
import {Link} from 'react-router-dom'


class Banner extends Component{



  render() {
        console.log(this.props)
        return (
            //https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_band&stacked=h
           //eslint-disable-next-line  
           <nav class="navbar navbar-inverse navbar-fixed-top ">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="#">Logo</a>
                  </div>
                  <div class="collapse navbar-collapse" id="myNavbar">
                  {/* <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                  </Switch> */}
                    <ul class="nav navbar-nav">
                      <li ><Link to="/Home">Home</Link></li>
                      {/* <li><a href="#">Fashion</a></li>
                      <li><a href="#">Beauty</a></li>
                      <li><a href="#">Culture</a></li>
                      <li><a href="#">Living</a></li> */}
                      {/* <li><Link to="/">[Fashion]</Link></li> */}
                      <li><a href="#">Beauty</a></li>
                      <li><a href="#">Culture</a></li>
                      <li><a href="#">Living</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                      {/* <li><a href="#"><span class="glyphicon glyphicon-user"></span> Your Account</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li> */}
                      <li><a href="http://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbx32nj-1.0&url=http%3A%2F%2Fmisitioweb.com%2F2104%2Fnewsletter&pubid=xa-53551912096e7a72" target="_blank" ><img src="http://cache.addthiscdn.com/icons/v1/thumbs/32x32/facebook.png" border="0" alt="facebook" /></a>  </li>
                      <li><a href="http://api.addthis.com/oexchange/0.8/forward/instagram/offer?pco=tbx32nj-1.0&url=http%3A%2F%2Fmisitioweb.com%2F2104%2Fnewsletter&pubid=xa-53551912096e7a72" target="_blank" ><img src="http://cache.addthiscdn.com/icons/v1/thumbs/32x32/instagram.png" border="0" alt="instagram" /></a></li>
                      <li><a href="http://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbx32nj-1.0&url=http%3A%2F%2Fmisitioweb.com%2F2104%2Fnewsletter&pubid=xa-53551912096e7a72" target="_blank" ><img src="http://cache.addthiscdn.com/icons/v1/thumbs/32x32/twitter.png" border="0" alt="twitter" /></a></li>


                    </ul>
                  </div>
                </div>
              </nav>

        )
    }

}

export default Banner;