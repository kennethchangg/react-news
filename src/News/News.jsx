import React from 'react';
import Todo from '../Todo/Todo'
import Search from '../Search/Search'
import './News.css';
import {Route, Switch, Link} from 'react-router-dom'
import Information from '../Information/Information'

class News extends React.Component {



    constructor(){

        super();
        this.state={
          search: ''
        }
      }
    

      updateSearch = (event) => {
        this.setState({search: event.target.value.substr(0,20)})
      }
    
    
      render(){
        {console.log(this.props.articles)}
    
        let filterInfo = this.props.articles.filter(
    
                  (articles) => {
                    return articles.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                  }
         
        );
    
        return(
                     <div>
                         <div className="Search">
                       <Search search={this.state.search} updateSearch={this.updateSearch}/>
                         </div>
                        <ul>
                        {console.log(filterInfo)}
                
                                {filterInfo.map((articles, id) => {
                                return  <Todo     
                                                    id={articles.id}                        
                                                    title={articles.title}
                                                    author={articles.author}
                                                                                                                                             
                                                    />
                                })}
                        </ul>                      
                          
                       
                    </div>
        
        )
      }
    
    }


export default News
