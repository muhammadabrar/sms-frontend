import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { IoMdPersonAdd } from 'react-icons/io'
import avater from '../cover.jpg';
function Staff() {
    const theme = useSelector((state) => state.theme.value)
    const [data, setdata] = useState([
        {
            "name": "Muhammad Abrar",
            "post": "principle",
            "contact1": '03405216890',
            "contact2": '03405216890',
            "gender": "Male",
        },
        {
            "name": "Awais Rahman",
            "post": "PTI",
            "contact1": '03122565987',
            "contact2": '03324565855',
            "gender": "Male"
        },
        {
            "name": "Noman Khan",
            "post": "Teacher",
            "contact1": '03126564987',
            "contact2": '032136547898',
            "gender": "Male"
        },
        {
            "name": "Wajid khan",
            "post": "Teacher",
            "contact1": '03124249987',
            "contact2": '03124249987',
            "gender": "Male"
        }
    ])
    
    return (<>
        <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
            <div className="card-header">
                <div className="row">
                    <div className="col-md-4 pt-3">
                        <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Staff <small>(current Staff)</small></p>
                    </div>
                    <div className="col-md-8">
                    <button class="btn-icon bg-info mt-2 float-end shadow"  data-toggle="popover"  aria-label="Add New Staff" data-cooltipz-dir="bottom"><IoMdPersonAdd/></button>
                    </div>
                </div>
            </div>
            <div className="card-content p-2">
                <div className="table-responsive">
                    <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
                        <caption>All Available Staff</caption>
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contacts</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) =>
                                <tr key={index}><td scope="row">{index + 1}</td>
                                    <td>
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={avater} className="avater" alt="..." />
                                            </div>
                                            <div className="col">
                                                {data.name} <br></br>
                                                <small className="ref-value">{data.post}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data.contact1}<br />
                                        {data.contact2}
                                    </td>
                                    <td>{data.gender}</td>
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

export default Staff