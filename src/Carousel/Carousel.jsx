import React, { Component } from 'react';
import './Carousel.css';



class Carousel extends Component {
    render() {
        return (
     

      <div className="wrapperCarousel"> 

        <div id="myCarousel" class="carousel slide" data-ride="carousel" >
                        
                        <ol class="carousel-indicators" >
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        
                        <div class="carousel-inner">

                        <div class="item active">
                            <img src="../img/h&m.jpg" alt="H&M" className="imgCarousel" />
                        </div>

                        <div class="item">
                             <img src="../img/cocacola1.jpg" alt="cocacola" className="imgCarousel" />
                        </div>
                        
                        <div class="item">
                         <img src="../img/rogers.jpg" alt="rogers" className="imgCarousel"/>
                        </div>
                        </div>

                        
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
         </div>
       
       
        )
    }
}

    export default Carousel;