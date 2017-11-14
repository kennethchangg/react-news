import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import App from '../App';
import Information from '../Information/Information';
import News from '../News/News';



class Gateway extends Component {



  render() {
    {console.log(this.props.articles)}
    return (

        <Switch>
                      
              <Route path="/" component={App} />
              <Route path="/:studentId" component={Information} />
          
        </Switch>
    
    )
  }
}

export default Gateway;
