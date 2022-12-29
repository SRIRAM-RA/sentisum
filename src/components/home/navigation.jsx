import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
// import { Connect } from "react-redux";



class Navbar extends Component{

    render(){
        return(
            <div className="Navbar">
                <ul>
                    <li>
                        <div className="logo-filter">
                            <img src="images/logo.png" alt="logo"></img>
                            <h3>Source :&nbsp;</h3>
                            <h3> Support &nbsp;</h3>
                            <FontAwesomeIcon icon={faCaretDown} className="drop"/>
                        </div>

                        <div className="menu-items">
                            <button type="submit" className="summary active">
                                Summary
                            </button>
                            <button type="submit" className="discover">
                                Discover
                            </button>
                        </div>
                        
                        <div className="settings">
                            <FontAwesomeIcon icon={faGear} className="gear"/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar