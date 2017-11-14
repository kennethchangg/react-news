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
                                
                             
                                <h3 ><Link to={'/:'+ this.props.title} >{this.props.title}</Link></h3>          
                                <h4>{this.props.time}</h4>
                                {/* <img className="articleImg" src={this.props.img} /> */}
                                <p>{this.props.description}</p>
                                <h4>Author: {this.props.author}</h4>

                           
                  </div>
             </div>
        )
    }
}

export default Todo;


