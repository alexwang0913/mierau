import React from 'react'
import {
   Row, Col
} from 'reactstrap';

import {  } from 'components';

import BigCalendar from 'react-big-calendar'
import events from 'views/Calendar/events.js'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  render() {
 
	const allViews = Object
	  .keys(BigCalendar.Views)
	  .map(k => BigCalendar.Views[k])

  	//console.log({events});
    return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Calendar</h1>
                        </div>
                    </div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Calendar</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            

									  <div style={{ height: 700, width: 100+'%' }}>
									    <BigCalendar
									      events={events}
									      step={60}
									      views={allViews}
									      defaultDate={new Date(2015, 3, 1)}
									    />
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

export default Calendar;
