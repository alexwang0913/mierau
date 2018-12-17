import React from 'react';
import { NavLink } from 'react-router-dom';

class Mailmenu extends React.Component{
    render(){
        return (
                                    <div class="col-lg-3 col-md-4 col-12">


                                        <NavLink to='/mail-compose' className="btn btn-primary btn-block composebtn">
                                            Compose
                                        </NavLink>

                                        <ul class="list-unstyled mail_tabs">
                                            <li class="active">
                                            <NavLink to='/mail-inbox'>
                                                <i class="fa fa-inbox"></i> Inbox <span class="badge badge-primary float-right">6</span>
                                            </NavLink>
                                            </li>
                                            <li class="">
                                                <a href="#!">
                                                    <i class="fa fa-send-o"></i> Sent
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#!">
                                                    <i class="fa fa-edit"></i> Drafts <span class="badge badge-accent float-right">2</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#!">
                                                    <i class="fa fa-star-o"></i> Important
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#!">
                                                    <i class="fa fa-trash-o"></i> Trash
                                                </a>
                                            </li>
                                        </ul>

                                    </div>

        );
    }
}

export default Mailmenu;
