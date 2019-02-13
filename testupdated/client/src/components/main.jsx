import React, { Component } from 'react';
import './../css/main.css';

class Main extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      message:'Main Component'
    //   }
    // }
    
    // clickHandler(message){
    //     this.setState({
    //         message:message
    //     })
    // }

    render() {

        return (
//            <div className="content-wrapper mainDiv">
//                     <div  class="col-lg-12"> </div>
//                     {/* <button onClick={this.clickHandler.bind(this, "Clicked")}>Click Me  </button>  */}
//            </div>
            
      
              <div className="content-wrapper mainDiv">
                {this.props.message}
               </div>


        )


    }



}


export default Main