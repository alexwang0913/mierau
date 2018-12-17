import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

import { Navmenudropdown } from 'components';
import { Navmenugroup } from 'components';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import useravatar from "assets/img/profile.jpg";

var ps;


class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.activeRoute.bind(this);
        this.state = {
          opendd: ''
        };
        this.handleOpendd = this.handleOpendd.bind(this);
    }
    handleOpendd(open) {    
        if(this.state.opendd === open){
            this.setState({     
                opendd: ''    
            });  
        } else {
            this.setState({     
                opendd: open    
            });  
        }
        //console.log(open + this.state.opendd);
    }
    
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? ' active' : '';
    }
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.sidebar,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    render(){

        const children = (child) => {
            var links = [];
            if (child) {
                for (var i = 0; i < child.length; i++) {
                    links.push(
                        <li key={i}>
                            <NavLink to={child[i].path} className="nav-link" activeClassName="active">
                                <span>{child[i].name}</span>
                            </NavLink>
                        </li>
                    );
                }
                return <Nav>{links}</Nav>
            }
        }

        return (
            <div className="sidebar menubar" data-color="primary">
                
                <div className="sidebar-wrapper" ref="sidebar">
                {/* <div className="profile-info row">
                    <div className="profile-image col-4">
                        <a href="#!">
                            <img alt="" src={useravatar} className="img-fluid rounded-circle"/>
                        </a>
                    </div>
                    <div className="profile-details col-8">
                        <h3>
                            <a href="#!">Shane Taylor</a>
                            <span className="profile-status online"></span>
                        </h3>
                        <p className="profile-title">Web Developer</p>
                    </div>
                </div> */}

                    <Nav className="navigation">
                        {
                            this.props.routes.map((prop,key) => {
                                if(prop.redirect)
                                    return null;
                                if(prop.type === "child")
                                    return null;
                                if(prop.type === "navgroup")
                                    return ( 
                                      <Navmenugroup name={prop.name} key={key}>
                                      </Navmenugroup>
                                    );
                                if(prop.type === "dropdown")
                                    return ( 

                                        <li className={(this.state.opendd === prop.name ? 'active': '')} data-toggle="collapse" key={key}>
                                            <a to={prop.path} className="nav-link" onClick={() => this.handleOpendd(prop.name)}>
                                                        <i className={"fa fa-"+prop.icon}></i>
                                                        <p>{prop.name}</p>
                                                        <span className="badge">{prop.badge}</span>
                                                        <span className={"arrow fa fa-chevron-left"}></span>
                                            </a>
                                            { children(prop.child) }
                                        </li>

                                    );

                                if(prop.type === "dropdown-backup")
                                    return ( 
                                      <Navmenudropdown name={prop.name} icon={prop.icon} path={prop.path} badge={prop.badge} child={prop.child} key={key} openclass={this.state.opendd === prop.name ? 'activethis': ''}  onClick={() => this.handleOpendd(prop.name)}>
                                      </Navmenudropdown>
                                    );
                                return (
                                    <li className={this.activeRoute(prop.path)} key={key} onClick={() => this.handleOpendd(prop.name)}>
                                        <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                            <i className={"fa fa-"+prop.icon}></i>
                                            <p>{prop.name}</p>
                                            <span className="badge">{prop.badge}</span>
                                        </NavLink>
                                  </li>
                                );
                            })
                        }
                    </Nav>
                    <div class="menustats">    
                    
                    {/* <h5>Project Progress</h5> */}
                    {/* <div class="progress">
                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: 50+'%'}}>
                            </div>
                        </div> */}
                    {/* <h5>Target Achieved</h5>
                    <div class="progress">
                                <div class="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: 70+'%'}}>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
