import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">
                    <img src={require('./../assets/logo.svg')} width="30" height="30" alt=""/>
                    </a>
                    

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Menu 1 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Menu 2<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Menu 3<span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                           <form class="form-inline my-2 my-lg-0">
                               <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

                    </div>
                </nav>
            </div>

        )


    }



}


export default Header;