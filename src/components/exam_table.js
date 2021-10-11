import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { IoMdPersonAdd } from 'react-icons/io'
import {BsClipboardData} from 'react-icons/bs'
import {AiOutlineSchedule} from 'react-icons/ai'
import avater from '../cover.jpg';
function Exams() {
    const theme = useSelector((state) => state.theme.value)
    const [data, setdata] = useState([
        {
            "Term": "1st Term",
            "Date": "02-03-2021",
        },
        {
            "Term": "2nd Term",
            "Date": "02-03-2021",
        },
        {
            "Term": "final",
            "Date": "02-03-2021",
        },
    ])
    
    return (<>
        <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
            <div className="card-header">
                <div className="row">
                    <div className="col-md-4 pt-2">
                        <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Exams <button class="btn-icon ms-2 bg-info shadow"  data-toggle="popover"  aria-label="Add New Staff" data-cooltipz-dir="bottom"><IoMdPersonAdd/></button></p>
                    </div>
                    <div className="col-md-8">
                    <form className="pt-2">
              <div className="input-group shadow">
                <select className={`form-control shadow-none ${theme && "bg-dark text-light"}`} aria-label="Default select example">
                  <option selected>2021</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className={`form-control shadow-none ${theme && "bg-dark text-light"}`} aria-label="Default select example">
                  <option selected>Pending</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
                    
                    </div>
                </div>
            </div>
            <div className="card-content p-2">
                <div className="table-responsive">
                    <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
                        <caption>All Pending Exams of session: 2021</caption>
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Exam</th>
                                <th scope="col">Grades</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) =>
                                <tr key={index}><td scope="row">{index + 1}</td>
                                    <td>{data.Term}<br />
                                    <small className="ref-value">{data.Date}</small>

                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    <button className={`btn-icon m-1 ${theme && "bg-dark text-light"}  shadow`}  data-toggle="popover"  aria-label="Results" data-cooltipz-dir="bottom"> <BsClipboardData/></button>
                                    <button className={`btn-icon m-1 ${theme && "bg-dark text-light"}  shadow`}  data-toggle="popover"  aria-label="Schedule" data-cooltipz-dir="bottom"> <AiOutlineSchedule /></button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    </>
    );
}

export default Exams