import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.


class FormTagsinput extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      tags: [],
      tags1: [],
      tags2: [],
      tags3: [],
      tags4: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
  }

  handleChange(tags) {    this.setState({      tags: tags    })  }
  handleChange1(tags) {    this.setState({      tags1: tags    })  }
  handleChange2(tags) {    this.setState({      tags2: tags    })  }
  handleChange3(tags) {    this.setState({      tags3: tags    })  }
  handleChange4(tags) {    this.setState({      tags4: tags    })  }

    render(){

                const inputProps = {
                        type: 'search',
                        placeholder: 'Custom Placeholder'
                    };
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Tags Input</h1>
                        </div>
                    </div>


                            
                                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Tags Input</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">

                                <div class="form-group">
                                            <label class="form-label" for="field-1">Basic</label>
                                            <div class="controls">
                                <TagsInput value={this.state.tags} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="form-group">
                                            <label class="form-label" for="field-1">On blur</label>
                                            <div class="controls">
                                <TagsInput value={this.state.tags1} onChange={this.handleChange1} addOnBlur={true}/>
                                    </div>
                                </div>

                                <div class="form-group">
                                            <label class="form-label" for="field-1">Placehoder</label>
                                            <div class="controls">
                                <TagsInput value={this.state.tags2} onChange={this.handleChange2} inputProps={inputProps}/>
                                    </div>
                                </div>

                                <div class="form-group">
                                            <label class="form-label" for="field-1">On Paste</label>
                                            <div class="controls">
                                <TagsInput value={this.state.tags3} onChange={this.handleChange3} addOnPaste={true}/>
                                    </div>
                                </div>

                                <div class="form-group">
                                            <label class="form-label" for="field-1">onlyUnique</label>
                                            <div class="controls">
                                <TagsInput value={this.state.tags4} onChange={this.handleChange4} onlyUnique={true}/>
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

export default FormTagsinput;
