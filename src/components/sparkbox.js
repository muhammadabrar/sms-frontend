import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FaUserPlus} from 'react-icons/fa'
import {BsFillCalendarCheckFill, BsArrowRight} from 'react-icons/bs'


function Sparkboxes() {
    const theme = useSelector((state) => state.theme.value)

  return (<>
   
   <div class="row sparkboxes">
          <div class="col-md-3">
          <div className="box box2 ">
              <h6 style={{ margin: 0, fontWeight: "bold" }}>Students</h6>
              <h2 className="spark-box-value">200 <small className="value-ref">(present)</small></h2>
              <div className="box-footer">Start Attendance <button class="btn-icon btn-warning shadow" style={{marginLeft: "0.5em" }} data-toggle="popover"  aria-label="Start students attendance" data-cooltipz-dir="bottom"><FaUserPlus/></button></div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="box box2 ">
              <p style={{ margin: 0, fontWeight: "bold" }}>Students Attendance</p>
              <h2 className="spark-box-value">150 <small className="value-ref">(present)</small></h2>
              <div className="box-footer ">Start Attendance <button class="btn-icon btn-warning shadow float-end" style={{marginLeft: "0.5em" }} data-toggle="popover"  aria-label="Start students attendance" data-cooltipz-dir="bottom"><BsFillCalendarCheckFill/></button></div>
            </div>
          </div>
          <div class="col-md-3">
            <div className=" box box2 " >
              <h6 style={{ margin: 0, fontWeight: "bold" }}>Staff Attendance</h6>
              <h2 className="spark-box-value">15 <small className="value-ref">(present)</small></h2>
              <div className="box-footer">Start Attendance <button class="btn-icon btn-warning shadow" style={{marginLeft: "0.5em" }} data-toggle="popover"  aria-label="Start staff attendance" data-cooltipz-dir="bottom"><BsFillCalendarCheckFill/></button></div> 
            </div>
          </div>
          <div class="col-md-3">
            <div className="box box4 ">
              <h6 style={{ margin: 0, fontWeight: "bold" }}>Appointments & Meetings</h6>
              <h2 className="spark-box-value">2 <small className="value-ref">(today)</small></h2>

              <div className="box-footer">Details  <BsArrowRight/></div>
            </div>
          </div>

        </div>
          
        </>
  );
}

export default Sparkboxes
