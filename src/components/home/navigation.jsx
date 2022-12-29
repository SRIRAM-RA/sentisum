import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
// import { Connect } from "react-redux";



class Navbar extends Component{

    constructor(){
        super()

        this.state = {
            active: false
        }
        this.changetabs = this.changetabs.bind(this)
    }

    changetabs = (e) => {
        if(e.target.id === 'summaryactive'){
            this.setState({
                active:false
            })
        }else if (e.target.id === 'discoveractive'){
            this.setState({
                active:true
            })
        }
    }

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
                            <button type="button" className={this.state.active ? "summary" : "summary active"} id="summaryactive" onClick={this.changetabs.bind(this)}>
                                Summary
                            </button>
                            <button type="button" className={this.state.active ? "discovery active": "discovery"} id="discoveractive" onClick={this.changetabs.bind(this)}>
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