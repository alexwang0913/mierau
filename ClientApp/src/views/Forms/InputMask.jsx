import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import InputMask from 'react-input-mask';

class FormInputMask extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          value: '',
          valuecard: '',
          mask: '9999-9999-9999-9999'
        };
        this.onChange = this.onChange.bind(this);
        this.beforeMaskedValueChange = this.beforeMaskedValueChange.bind(this);
        this.onChangeCard = this.onChangeCard.bind(this);

      }

      onChange(event) {
        this.setState({
          value: event.target.value
        });
      }

      beforeMaskedValueChange(newState, oldState, userInput) {
        var { value } = newState;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        // keep minus if entered by user
        if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
          if (cursorPosition === value.length) {
            cursorPosition--;
            selection = { start: cursorPosition, end: cursorPosition };
          }
          value = value.slice(0, -1);
        }

        return {
          value,
          selection
        };
      }
       
      onChangeCard(event) {
        var valuecard = event.target.valuecard;
        var newState = {
          mask: '9999-9999-9999-9999',
          valuecard: valuecard
        };
        if (/^3[47]/.test(valuecard)) {
          newState.mask = '9999-999999-99999';
        }
        this.setState(newState);
      }



    render(){
        

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Input Mask</h1>
                        </div>
                    </div>


                                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Input Mask</h2>
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
   <label class="form-label" for="field-1">Phone (+49 99 999 99)</label>
   <InputMask className="form-control" {...this.props} mask="+4\9 99 999 99" maskChar="_" />
</div>

<div class="form-group">
   <label class="form-label" for="field-1">Zip (99999-9999)</label>
  <InputMask className="form-control" mask="99999-9999" maskChar="_" value={this.state.value} onChange={this.onChange} beforeMaskedValueChange={this.beforeMaskedValueChange} />
</div>

<div class="form-group">
   <label class="form-label" for="field-1">Phone</label>
  <InputMask className="form-control" mask="+7 (999) 999-99-99" />
</div>

<div class="form-group">
   <label class="form-label" for="field-1">Phone</label>
  <InputMask className="form-control" mask="+4\9 99 999 99" maskChar={null} />
</div>
            
<div class="form-group">
   <label class="form-label" for="field-1">Date</label>
  <InputMask className="form-control" mask="99-99-9999" defaultValue="27-07-2018" />
</div>

<div class="form-group">
   <label class="form-label" for="field-1">Date</label>
    <InputMask className="form-control" mask="99/99/9999" placeholder="Enter birthdate" />
</div>

<div class="form-group">
   <label class="form-label" for="field-1">Credit card</label>
    <InputMask className="form-control" {...this.state}  value={this.state.valuecard} onChange={this.onChangeCard} />
</div>


                                
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

export default FormInputMask;
