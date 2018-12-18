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
                </div>
            </div>
        );
    }
}

export default Sidebar;
