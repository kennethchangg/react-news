import React, {Component} from 'react';
import axios from 'axios'
import Todo from '../TodoInfo/Todo'

class Information extends Component {

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

        {console.log(this.state.array)}

        let filterInfo = this.state.array.filter(
            
                          (articles) => {
                            return articles.title.indexOf(this.props.match.params.userId.substring(1,20)) !== -1;
                           
                          }
                 
                );
      
      
            return(

              
                <div>
                   <ul>
                   {console.log(filterInfo)}
           
                           {filterInfo.map((articles, id) => {
                             
                           return  <Todo     
                                               id={articles.id}                        
                                               title={articles.title}
                                               author={articles.author}
                                               img={articles.urlToImage}
                                               description={articles.description}
                                               url={articles.url}
                                           
                                               />
                           })}
                   </ul>                      
                     
               </div>
   
   )
       

      
    }
    
}

export default Information;