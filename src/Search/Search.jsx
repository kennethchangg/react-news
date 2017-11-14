import React, {Component} from 'react';




class Search extends Component {

    render() {
      

        return (
       
                 <div class="row">
                        <div class="col-lg-12">
                                <div class="input-group">   
                                   
                                    <input type="text" class="form-control" placeholder="Search for..." search={this.props.search} onChange={this.props.updateSearch}/>
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button">Go!</button>
                                    </span>
                                    
                                </div>         
                        </div>
                        </div>     
        )
    }
}

export default Search;