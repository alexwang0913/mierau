import React from 'react';
import {
     Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import CKEditor from "react-ckeditor-component";

class FormCKEditor extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          content: 'content',
        };
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.afterPaste = this.afterPaste.bind(this);
      }

      updateContent(newContent) {
        this.setState({
          content: newContent
        });
      }


    onChange(evt){
      //console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      //console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      //console.log("afterPaste event called with event info: ", evt);
    }
 
    render(){
        

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">CKEditor</h1>
                        </div>
                    </div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">CKEditor</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                       

                                    <CKEditor 
                                      activeClass="p10" 
                                      content={this.state.content} 
                                      events={{
                                        "blur": this.onBlur,
                                        "afterPaste": this.afterPaste,
                                        "change": this.onChange
                                      }}
                                     />
                          
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

export default FormCKEditor;
