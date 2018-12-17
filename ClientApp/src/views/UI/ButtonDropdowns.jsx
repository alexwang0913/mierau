import React from 'react';
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Row, Col, 
} from 'reactstrap';

import {
    
} from 'components';

class UIButtonDropdowns extends React.Component{
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      btnDropup: false,
      btnDropleft: false,
      btnDropright: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Button Dropdown</h1>
                        </div>
                    </div>


                            

                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Button Dropdown</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            

                                
<h5>Button Dropdown</h5>
<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>





<br/>
<h5>Colors</h5>
<ButtonDropdown  isOpen={this.state.btnDrop1} toggle={() => { this.setState({ btnDrop1: !this.state.btnDrop1 }); }}>
  <DropdownToggle caret color="primary">
    Primary
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<span>&nbsp;</span>

<ButtonDropdown isOpen={this.state.btnDrop2} toggle={() => { this.setState({ btnDrop2: !this.state.btnDrop2 }); }}>
  <DropdownToggle caret color="secondary">
    Secondary
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>


<span>&nbsp;</span>
<ButtonDropdown  isOpen={this.state.btnDrop3} toggle={() => { this.setState({ btnDrop3: !this.state.btnDrop3 }); }}>
  <DropdownToggle caret color="success">
    Success
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<span>&nbsp;</span>
<ButtonDropdown isOpen={this.state.btnDrop4} toggle={() => { this.setState({ btnDrop4: !this.state.btnDrop4 }); }}>
  <DropdownToggle caret color="warning">
    Warning
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<span>&nbsp;</span>
<ButtonDropdown  isOpen={this.state.btnDrop5} toggle={() => { this.setState({ btnDrop5: !this.state.btnDrop5 }); }}>
  <DropdownToggle caret color="info">
    Info
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
<span>&nbsp;</span>
<ButtonDropdown isOpen={this.state.btnDrop6} toggle={() => { this.setState({ btnDrop6: !this.state.btnDrop6 }); }}>
  <DropdownToggle caret color="danger">
      Danger
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>


<br/>

<h5>Dropdown direction</h5>
<ButtonDropdown direction="up"  isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
  <DropdownToggle caret>
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
<span>&nbsp;</span>

<ButtonDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
  <DropdownToggle caret>
    Dropleft
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
<span>&nbsp;</span>

<ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UIButtonDropdowns;
