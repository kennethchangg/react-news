import React, {Component} from 'react';
import './Todo.css';
import {Link} from 'react-router-dom'
// import Information from '../Information/Information';
// import Gateway from '../Gateway/Gateway'



class Todo extends Component {

    render() {
      

        return (
       
             <div className="">
                 <div className="">
                                
                             
                                <h3 >Title: {this.props.title}</h3>          
                                <h4>{this.props.time}</h4>
                               
                                <img className="articleImg" src={this.props.img} />
                                <p className="paragraph">{this.props.description}</p>
                                <h5 className="author">Author: {this.props.author}</h5>
                                <h4>More information: <a href= {this.props.url}> {this.props.url}</a></h4>
                              

                           
                  </div>
             </div>
        )
    }
}

export default Todo;
