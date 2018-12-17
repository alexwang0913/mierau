import React from 'react';
import {
    Collapse, Navbar, NavbarBrand, Nav, NavItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Container, InputGroup, InputGroupAddon, Input
} from 'reactstrap';


import {
    Messages, Notifications
} from 'components';

import dashboardRoutes from 'routes/dashboard.jsx';

import { messages } from 'variables/topbar.jsx';
import { notifications } from 'variables/topbar.jsx';

//import messages from 'variables/topbar';
//import notifications from 'variables/topbar';

import logofull from "assets/img/mierau_logo.png";
import logomini from "assets/img/logo-mini.png";
import useravatar from "assets/img/profile.jpg";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            userddOpen: false,
            searchOpen: false,
            messagesddOpen: false,
            notificationsddOpen: false,
            color: "primary"
        };
        this.toggle = this.toggle.bind(this);
        this.userddToggle = this.userddToggle.bind(this);
        this.messagesddToggle = this.messagesddToggle.bind(this);
        this.notificationsddToggle = this.notificationsddToggle.bind(this);
        this.searchToggle = this.searchToggle.bind(this);

    }
    toggle() {
        if(this.state.isOpen){
            this.setState({
                color: "primary"
            });
        } else {
            this.setState({
                color: "white"
            });
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    userddToggle(e){
        this.setState({
            userddOpen: !this.state.userddOpen
        });
    }
    searchToggle(){
        //this.refs.searchbarToggle.classList.toggle('toggled');
        this.setState({
            searchOpen: !this.state.searchOpen
        });
        //console.log(this.state.searchOpen);
        //this.refs.searchbarToggle.classList.toggle('opened');
    }
    messagesddToggle(e){
        this.setState({
            messagesddOpen: !this.state.messagesddOpen
        });
    }
    notificationsddToggle(e){
        this.setState({
            notificationsddOpen: !this.state.notificationsddOpen
        });
    }
    getBrand(){
        var name;
        dashboardRoutes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }else{
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }
            }
            return null;
        })
        return name;
    }
    openSidebar(){
        document.documentElement.classList.toggle('nav-toggle');
        this.refs.sidebarToggle.classList.toggle('toggled');

        // close chat bar if open on smaller screens
        // if(window.innerWidth < 993){
        //     document.documentElement.classList.remove('nav-toggle-chat');
        //     this.refs.chatToggle.classList.remove('toggled');
        // }
    }
    openChat(){
        document.documentElement.classList.toggle('nav-toggle-chat');
        this.refs.chatToggle.classList.toggle('toggled');

        // close menu bar if open on smaller screens
        if(window.innerWidth < 993){
            document.documentElement.classList.remove('nav-toggle');
            this.refs.sidebarToggle.classList.remove('toggled');
        }
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor(){
        if(window.innerWidth < 993 && this.state.isOpen){
            this.setState({
                color: "primary"
            });
        } else {
            this.setState({
                color: "primary"
            });
        }

    }
    componentDidMount(){
        window.addEventListener("resize", this.updateColor.bind(this));
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-toggle') !== -1){
            document.documentElement.classList.toggle('nav-toggle');
            this.refs.sidebarToggle.classList.toggle('toggled');
        }
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-toggle-chat') !== -1){
            document.documentElement.classList.toggle('nav-toggle-chat');
            this.refs.chatToggle.classList.toggle('toggled');
        }
    }
    render(){
        return (
            // add or remove classes depending if we are on full-screen-maps page or not
            <Navbar
                color={this.props.location.pathname.indexOf('full-screen-maps') !== -1 ? "white":this.state.color} expand="lg"
                className={
                    this.props.location.pathname.indexOf('full-screen-maps') !== -1 ?
                    "navbar-absolute fixed-top":"navbar-absolute fixed-top " + (this.state.color === "transparent" ? "navbar-transparent ":"navbar-"+this.state.color)}>
                <Container fluid>
                <div className="logo">
                    {/* <a href="/" className="simple-text logo-mini">
                        <div className="logo-img">
                            <img src={logomini} alt="react-logo" />
                        </div>
                    </a> */}
                    <a href="/" className="logo-full">
                            <img src={logofull} alt="react-logo" style={{background: "white"}} />
                    </a>
                </div>
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" ref="sidebarToggle" className="navbar-toggler" onClick={() => this.openSidebar()}>
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>


                            {/* <Dropdown nav isOpen={this.state.messagesddOpen} toggle={(e) => this.messagesddToggle(e)} className="navbardd">
                                <DropdownToggle caret nav>
                                    <i className="fa fa-envelope"></i>
                                    <span className="badge badge-pill badge-accent">3</span>
                                </DropdownToggle>
                                <Messages messages={messages}/>
                            </Dropdown>

                            <Dropdown nav isOpen={this.state.notificationsddOpen} toggle={(e) => this.notificationsddToggle(e)} className="navbardd">
                                <DropdownToggle caret nav>
                                    <i className="fa fa-bell"></i>
                                    <span className="badge badge-pill badge-accent">7</span>
                                </DropdownToggle>
                                <Notifications notifications={notifications}/>
                            </Dropdown>
    
                            <form className="topbar-search-form">
                                <InputGroup className={"topbar-search "+(this.state.searchOpen === true ? "open":"")}>
                                    <InputGroupAddon  onClick={() => this.searchToggle()}><i className="fa fa-search"></i></InputGroupAddon>
                                    <Input placeholder="Search..." />
                                </InputGroup>
                            </form> */}


                        <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>



                    </div>
                    
                    <Collapse isOpen={this.state.isOpen} navbar className="">
                        <Nav navbar>
                            <Dropdown nav isOpen={this.state.userddOpen} toggle={(e) => this.userddToggle(e)} className="userdd">
                                <DropdownToggle caret nav>
                                   <img src={useravatar} alt="react-logo" className="rounded-circle" /> <span>Budhi Kapoor</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {/* <DropdownItem tag="a"><i className="fa fa-wrench" href="#!"></i> Settings</DropdownItem> */}
                                    <DropdownItem tag="a"><i className="fa fa-user" href="#!"></i> Profile</DropdownItem>
                                    {/* <DropdownItem tag="a"><i className="fa fa-info" href="#!"></i> Help</DropdownItem> */}
                                    <DropdownItem tag="a" className="" href="#!"><i className="fa fa-lock"></i> Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* <NavItem>
                                <div className="navbar-toggle chat-toggle">
                                    <button type="button" ref="chatToggle" className="navbar-toggler" onClick={() => this.openChat()}>
                                            <i className="fa fa-comments"></i>
                                            <span className="badge badge-pill badge-accent">9</span>
                                    </button>
                                </div>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
