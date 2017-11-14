import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import News from './News/News'
import {Route, Switch} from 'react-router-dom'
import Information from './Information/Information'




class App extends Component {

 constructor() {

   super()

   this.state = {
      newsUrls: [],
      data: [],
      articles: [],
      array: [],
     
    }
  }

 componentWillMount() {
    this.newsUrls('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=9a2eb8590f2849d588eec49eae8f841a')
  }

 newsUrls = (url) => {    //get data and store it in a empty array

   let promise = axios.get(url);


    promise.then((response) => {

      var json = response.data.articles;

      this.setState({
        data: json


     }, () => {
              let array= [];

                for(let i =0; i< this.state.data.length; i++) {
                  
                  array.push(this.state.data[i])
                    
                  console.log(array)
                }

                this.setState({
                  array: array,
                 
          
               })
        
               
             
        })      
   })
  }

 render() {
    return (

      <div className="App.css">
        <header className="">
          

       </header>
        <Banner />
        <div class="container">
        <Carousel />
        </div>
          <div className="container news" >

                            <Switch> 

                                  <Route path="/Home" render={ () => {
                                    return <News articles={this.state.array} />
                                  }} />     
                                
                                <Route path="/:userId" component={Information} />

                          </Switch>       

          </div>
        
         
      </div>
    );
  }
}

export default App;