import React, { Component } from 'react';
import Main from './main';
import './../css/sidebar.css';
import Current from './current';

class Sidebar extends Component {
  state = {
    isOpen: false
  };

 toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

   clickHandler(event){
        //console.log('Clicked Here', event);
        this.props.callback(event);

    }

    render() {
         const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        
        return (

            <div class="wrapper " className="sidebar-wrapper">

                <nav id="sidebar">
                
                   <div class="sidebar-header">
                  
                        <h3>Fetch Details</h3>
                    </div>

                    <ul class="list-unstyled components">

         <li class="active"> <a href="#homeSub" data-toggle="collapse" aria-expanded="false"><i class="fa fa-spinner"></i>CM</a>
         <ul class="collapse list-unstyled" id="homeSub">
          <li><a href="#" onClick={this.clickHandler.bind(this, 'Configuration Clicked')}>Configuration</a></li>
          <li> <a href="#" onClick={this.clickHandler.bind(this, 'Interface Information Clicked')}>Interface Information</a></li>
          <li> <a href="#" onClick={this.clickHandler.bind(this, 'WaveLength')}>WaveLength</a></li>   
        
           </ul>
           </li>
              
            
      
        <li class="active"> <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"><i class="fa fa-home fa-fw"></i>FM</a>
            
        <ul class="collapse list-unstyled" id="homeSubmenu">
          <li><a href="#" onClick={this.clickHandler.bind(this, <Current/>)}>Current Alarms</a></li>
          <li> <a href="#" onClick={this.clickHandler.bind(this, 'History Alarms Clicked')}>History Alarms</a></li>
          <li> <a href="#" onClick={this.clickHandler.bind(this, 'Alarms Clicked')}>Alarms</a></li>   
           <li> <a href="#" onClick={this.clickHandler.bind(this, 'DB Current Alarms Clicked')}>DB Current Alarms</a></li>
         <li> <a href="#" onClick={this.clickHandler.bind(this, 'DB History Alarms Clicked')}>DB History Alarms</a></li>
         <li><a href="#" onClick={this.clickHandler.bind(this, 'Current Alarms RSS Clicked')}>Current RSS Alarms</a></li>
        <li> <a href="#" onClick={this.clickHandler.bind(this, 'History Alarms RSS Clicked')}>History RSS Alarms</a></li>
        </ul>
      </li>     
              
                    </ul>
                </nav>
 
   
    </div>
            


        );


    }
}


export default Sidebar;