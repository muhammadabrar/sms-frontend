
import Hero from '../components/hero';

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Card, Button, Image, Accordion } from 'react-bootstrap'
import avater from '../038.JPG';
import { currentTitle } from '../store/title'
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi';
import Attendance from '../components/student/attendance';
import Salary from '../components/staff/salary';
import Classess from '../components/staff/classes';
import Cbreadcrumb from '../components/cbreadcrumb';
import Test_records from '../components/student/Test_records';
import Fins from '../components/student/fins';
import Result from '../components/student/result';

    

function Student_profile() {
  const theme = useSelector((state) => state.theme.value)
  const { studentid } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Student Profile"))
  }, []);
  const [Isdropdown, setIsDropdown] = useState(false)
  const [IsAttendance, setIsAttendance] = useState(false)
  const [IsSalary, setIsSalary] = useState(false)






  //   dispatch(currentTitle("Student_profile"))
  return (<>
    <div className={!theme ? "page-content " : "page-content-dark"}>
    <Cbreadcrumb goto="Staff" />
      <Card className={!theme ? " shadow " : " text-light shadow bg-dark"}>
        <Card.Body >
          <div className="row">
            <div className="col-md-1 staff-profile">
              <Image src={avater} rounded fluid />
              <div className="top-right">
                <div className="dropdown">
                  <button onClick={() => setIsDropdown(!Isdropdown)} className="btn-icon shadow btn-primary" data-toggle="popover" aria-label="Menu" data-cooltipz-dir="bottom"><AiOutlineMenu /></button>
                  {/* <InfoBox show={Isdropdown} onClickOutside={() => {setIsDropdown(false)}} message="Click outside to close this"/> */}
                  {Isdropdown && <div className='info-box'>
                    <div id="myDropdown" className="dropdown-content">
                      <NavLink to="#home"><AiFillEdit /> Edit</NavLink>
                      <NavLink to="#about"><BiDetail /> Details</NavLink>
                      <NavLink to="#contact" className="text-danger"><AiOutlineUserDelete /> Delete</NavLink>
                    </div>
                  </div>}
                </div>


              </div>
            </div>

            <div className="col-md-3">
            <div className="info-item">
                <p className="info-title">RollNo#:</p>
                <p className="info-value">2101</p>
              </div>
              <div className="info-item">
                <p className="info-title">Name:</p>
                <p className="info-value">Muhammad Abrar</p>
              </div>
              
              <div className="info-item">
                <p className="info-title">Date of Birth:</p>
                <p className="info-value">March 02, 2000</p>
              </div>
              <div className="info-item">
                <p className="info-title">Gender:</p>
                <p className="info-value">MAle</p>
              </div>
              
              
              <div className="info-item text-success">
                <p className="info-title">Status:</p>
                <p className="info-value">Available</p>
              </div>
            </div>
            <div className="col-md-4 float-right">
              
              <div className="info-item">
                <p className="info-title">Father's Name:</p>
                <p className="info-value">Muhammad Abrar</p>
              </div>
              <div className="info-item">
              <p className="info-title">Father's CNIC:</p>
                <p className="info-value">16203-0402516-3</p>
              </div>
              <div className="info-item">
                <p className="info-title">Father's Occupation:</p>
                <p className="info-value">Doctor</p>
              </div>
              
              <div className="info-item ">
                <p className="info-title">Father's Contact:</p>
                <p className="info-value">03405216890</p>
              </div>
              <div className="info-item ">
                <p className="info-title">Disable:</p>
                <p className="info-value">No</p>
              </div>
            </div>
            <div className="col-md-3 float-right">
              <div className="info-item">
                <p className="info-title">Phone 1:</p>
                <p className="info-value">03405216890</p>
              </div>
              <div className="info-item">
              <p className="info-title">Phone 2:</p>
                <p className="info-value">03405216890</p>
              </div>
              <div className="info-item">
                <p className="info-title">Email:</p>
                <p className="info-value">Email@gmail.com</p>
              </div>
              <div className="info-item ">
                <p className="info-title">Permanent Address:</p>
                <p className="info-value">moh: redawan, po: maini, swabi kpk pakistan</p>
              </div>
              
            </div>

          </div>
        </Card.Body>
      </Card>
      <div className="row  pt-4">
        <div className="col-md-6" >
          <div className={!theme ? "card " : "card text-light bg-dark"} style={{ padding: "0.5em", }}>
            <div className="">

              <p style={{ margin: 0, }}> Attendance</p>
              <h3 className="">100% <small className="value-ref text-success">(present)</small></h3>

              <div className="box-footer " style={{ display: "flex", justifyContent: "end" }}>

                <button
                  class="btn-icon btn-warning shadow"
                  onClick={() => setIsAttendance(true)}
                  style={{ marginRight: "1em" }}
                  data-toggle="popover"
                  aria-label="Attendance Details"
                  data-cooltipz-dir="bottom">
                  <BiDetail />
                </button>

                <button
                  class="btn-icon btn-success shadow"
                  style={{ marginLeft: "0.5em" }}
                  data-toggle="popover"
                  aria-label="present" data-cooltipz-dir="bottom">
                  <AiOutlineCheck />
                </button>
                <button class="btn-icon btn-danger shadow" style={{ marginLeft: "0.5em" }} data-toggle="popover" aria-label="Absent" data-cooltipz-dir="bottom"><AiOutlineClose /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">

          <div className={!theme ? "card " : "card text-light bg-dark"} style={{ padding: "0.5em", }}>
            <div className=" ">
            <div className="row ">
              <div className="col-md-6">
              <p style={{ margin: 0, }}>Fee</p>
              <h3 className="">1000 <small className="value-ref text-success">(taken)</small></h3>
              </div>
              <div className="col-md-6">
              <p style={{ margin: 0, }}>Admission Fee</p>
              <h3 className="">1000 <small className="value-ref text-success">(taken)</small></h3>
              </div>
              </div>
              <div
                className="box-footer"
                style={{ display: "flex", justifyContent: "end" }}>

                <button class="btn-icon btn-warning shadow" onClick={() => setIsSalary(true)} style={{ marginRight: "1em" }} data-toggle="popover" aria-label="salary detail"
                  data-cooltipz-dir="bottom">
                  <BiDetail />
                </button>

                <button
                  class="btn-icon btn-success shadow"
                  style={{ marginLeft: "0.5em" }}
                  data-toggle="popover"
                  aria-label="give salary" data-cooltipz-dir="bottom">
                  <AiOutlineCheck />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
        <Test_records />
        </div>
        <div className="col-md-4">
        <Fins />
        </div>

      </div>
      <Result />
      
    </div>


    
    <Attendance show={IsAttendance} onHide={() => setIsAttendance(false)} />
    <Salary show={IsSalary} onHide={() => setIsSalary(false)} />
  
  </>
  );
}

export default Student_profile;

