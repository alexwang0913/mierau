import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UserProfile extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">User Profile</h1>
                        </div>
                    </div>


                            



                    <div class="col-xl-12">
                        <section class="box nobox ">
                            <div class="content-body">    <div class="row">
                                    <div class="col-lg-3 col-md-4 col-12">
                                        <div class="uprofile-image">
                                            <img alt="" src="images/profile/user.png" class="img-fluid" />
                                        </div>
                                        <div class="uprofile-name">
                                            <h3>
                                                <a href="#!">Shane Taylor</a>

                                                <span class="uprofile-status online"></span>
                                            </h3>
                                            <p class="uprofile-title">Web Developer</p>
                                        </div>
                                        <div class="uprofile-info">
                                            <ul class="list-unstyled">
                                                <li><i class='fa fa-home'></i> New York, USA</li>
                                                <li><i class='fa fa-user'></i> 340 Contacts</li>
                                                <li><i class='fa fa-suitcase'></i> Tech Lead, YIAM</li>
                                            </ul>
                                        </div>
                                        <div class="uprofile-buttons">
                                            <a class="btn btn-md btn-primary">Send Message</a>
                                            <a class="btn btn-md btn-primary">Add as Friend</a>
                                        </div>
                                        <div class=" uprofile-social">

                                            <a href="#!" class="btn btn-primary btn-md facebook"><i class="fa fa-facebook icon-xs"></i></a>
                                            <a href="#!" class="btn btn-primary btn-md twitter"><i class="fa fa-twitter icon-xs"></i></a>
                                            <a href="#!" class="btn btn-primary btn-md google-plus"><i class="fa fa-google-plus icon-xs"></i></a>
                                            <a href="#!" class="btn btn-primary btn-md dribbble"><i class="fa fa-dribbble icon-xs"></i></a>

                                        </div> 

                                    </div>
                                    <div class="col-lg-9 col-md-8 col-12">

                                        <div class="uprofile-content row">
                                            <div class="enter_post col-12">

                                                <div class="form-group">
                                                    <div class="controls">
                                                        <textarea class="form-control autogrow" id="field-7"  placeholder="What's on your mind?"></textarea>
                                                    </div>
                                                </div>
                                                <div class="enter_post_btns">
                                                    <a href="#!" class="btn btn-md float-right btn-primary">Post</a>
                                                    <a href="#!" class="btn btn-md float-right btn-link"><i class="fa fa-image"></i></a>
                                                    <a href="#!" class="btn btn-md float-right btn-link"><i class="fa fa-map-marker"></i></a>
                                                </div>
                                            </div>






                                            <div class="uprofile_wall_posts col-12">
                                                <div class="row">
                                                    <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                        <img src="images/profile/avatar-2.png" class="" alt="" />
                                                    </div>
                                                    <div class="info-wrapper float-left col-10 col-md-11">                  
                                                        <div class="username">
                                                            <span class="bold">John Smith</span> post in group <span class="bold">work</span>   
                                                        </div>
                                                        <div class="info text-muted">
                                                            "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance.
                                                        </div>  
                                                        <div class="info-details">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item"><a href="#!" class="text-muted">15 Minutes ago</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-muted"><i class="fa fa-comment"></i> 584</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart"></i> 12k</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-info"><i class="fa fa-reply"></i> Reply</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-warning"><i class="fa fa-star"></i> Favourite</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                            </ul>

                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="comment row">
                                                            <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                                <img data-src-retina="images/profile/avatar-3.png" data-src="images/profile/avatar-3.png" src="images/profile/avatar-3.png" alt="" />
                                                            </div>
                                                            <div class="info-wrapper float-left col-10 col-md-11">                  
                                                                <div class="username">
                                                                    <span class="bold">Fin</span> 
                                                                </div>
                                                                <div class="info text-muted">
                                                                    Perfect info for the project. Great work :)
                                                                </div>  
                                                                <div class="info-details">
                                                                    <ul class="list-unstyled list-inline">
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">10 Minutes ago</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart-o"></i> Like</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div class="clearfix"></div>                        
                                                        </div>

                                                        <div class="clearfix"></div>
                                                        <div class="comment row">
                                                            <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                                <img data-src-retina="images/profile/avatar-4.png" data-src="images/profile/avatar-4.png" src="images/profile/avatar-4.png" alt="" />
                                                            </div>
                                                            <div class="info-wrapper float-left col-10 col-md-11">                  
                                                                <div class="username">
                                                                    <span class="bold">Arun</span> 
                                                                </div>
                                                                <div class="info text-muted">
                                                                    Keep it up. Much appreciated effort.
                                                                </div>  
                                                                <div class="info-details">
                                                                    <ul class="list-unstyled list-inline">
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">8 Minutes ago</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart"></i> Liked</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div class="clearfix"></div>                        
                                                        </div>

                                                        <div class="comment comment-input row">                         

                                                            <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                                <img data-src-retina="images/profile/profile.jpg" data-src="images/profile/profile.jpg" src="images/profile/profile.jpg" alt="" />
                                                            </div>
                                                            <div class="info-wrapper float-left col-10 col-md-11 input-group">
                                                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                <div class="input-group-append primary">
                                                                    <span class="input-group-text" id="basic-addon2"><i class="fa fa-rocket"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>  
                                                </div>
                                            </div>



                                            <div class="uprofile_wall_posts col-12">
                                                <div class="row">
                                                    <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                        <img src="images/profile/avatar-1.png" class="" alt="" />
                                                    </div>
                                                    <div class="info-wrapper float-left col-10 col-md-11">                  
                                                        <div class="username">
                                                            <span class="bold">John Smith</span> post in group <span class="bold">work</span>   
                                                        </div>
                                                        <div class="info text-muted">
                                                            "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance.
                                                        </div>  
                                                        <div class="info-details">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item"><a href="#!" class="text-muted">15 Minutes ago</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-muted"><i class="fa fa-comment"></i> 584</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart"></i> 12k</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-info"><i class="fa fa-reply"></i> Reply</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-warning"><i class="fa fa-star"></i> Favourite</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                            </ul>

                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="comment row">
                                                            <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                                <img data-src-retina="images/profile/avatar-2.png" data-src="images/profile/avatar-2.png" src="images/profile/avatar-2.png" alt="" />
                                                            </div>
                                                            <div class="info-wrapper float-left col-10 col-md-11">                  
                                                                <div class="username">
                                                                    <span class="bold">Fin</span> 
                                                                </div>
                                                                <div class="info text-muted">
                                                                    Perfect info for the project. Great work :)
                                                                </div>  
                                                                <div class="info-details">
                                                                    <ul class="list-unstyled list-inline">
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">10 Minutes ago</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart-o"></i> Like</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div class="clearfix"></div>                        
                                                        </div>

                                                        <div class="clearfix"></div>
                                                        <div class="comment row">
                                                            <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                                <img data-src-retina="images/profile/avatar-3.png" data-src="images/profile/avatar-3.png" src="images/profile/avatar-3.png" alt="" />
                                                            </div>
                                                            <div class="info-wrapper float-left col-10 col-md-11">                  
                                                                <div class="username">
                                                                    <span class="bold">Arun</span> 
                                                                </div>
                                                                <div class="info text-muted">
                                                                    Keep it up. Much appreciated effort.
                                                                </div>  
                                                                <div class="info-details">
                                                                    <ul class="list-unstyled list-inline">
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">8 Minutes ago</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart"></i> Liked</a></li>
                                                                        <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div class="clearfix"></div>                        
                                                        </div>

                                                        <div class="comment comment-input row">                         

                                                            <div class="pic-wrapper float-left col-2 col-md-1 text-center">
                                                                <img data-src-retina="images/profile/profile.jpg" data-src="images/profile/profile.jpg" src="images/profile/profile.jpg" alt="" />
                                                            </div>

                                                            <div class="info-wrapper float-left col-10 col-md-11 input-group">
                                                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                <div class="input-group-append primary">
                                                                    <span class="input-group-text" id="basic-addon2"><i class="fa fa-rocket"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>  
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section></div>
           



                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UserProfile;
