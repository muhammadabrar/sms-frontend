import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { MdOtherHouses } from 'react-icons/md'
import avater from '../cover.jpg';
function Students() {
  const theme = useSelector((state) => state.theme.value)
  const [search, setsearch] = useState()

  const [data, setdata] = useState([
    {
      "name": "Muhammad Abrar",
      "rollNo": "21501",
      "Father": "Israr Muhammad",
      "contact1": '03405216890',
      "contact2": '03405216890',
      "grade": '5th',
      "status": "Good",
      "address": "moh: redawan, po: maini, swabi kpk pakistan"
    },
    {
      "name": "Awais Rahman",
      "rollNo": "21502",
      "Father": "Saqib Khan",
      "contact1": '03122565987',
      "contact2": '03324565855',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    },
    {
      "rollNo": "21503",
      "name": "Noman Khan",
      "Father": "Ismail Khan",
      "contact1": '03126564987',
      "contact2": '032136547898',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    },
    {
      "rollNo": "21504",
      "name": "Wajid khan",
      "Father": "toseef Khan",
      "contact1": '03124249987',
      "contact2": '03124249987',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    }
  ])
  const [row, setrow] = useState(data)

  useEffect(() => {
    searchResult()
  }, [search]);
  const searchResult = async (e) => {
    if (search) {

      const results = data.filter(data =>
        data.name.toLowerCase().includes(search) 
        || data.Father.toLowerCase().includes(search) 
        || data.address.toLowerCase().includes(search) 
        || data.rollNo.toLowerCase().includes(search) 

      );
      console.log("result :", results)
      setrow(results);
    } else {
      setrow(data);
      console.log("row :", row)

    }

  }
  const handlesearch = event => {
    if (event.target.value) {
      setsearch(event.target.value);

    } else {
      setrow(data);
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (<>
    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header">
        <div className="row">
          <div className="col-md-2 pt-3">
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Students</p>
          </div>
          <div className="col-md-10">
            <form className="pt-2">
              <div className="input-group shadow">
                <span className={`input-group-text  ${theme && "bg-dark text-light"}`}>Search Student</span>
                <input type="text" onChange={handlesearch} aria-label="First name" placeholder="example(abrar)" className={`form-control shadow-none ${theme && "bg-dark text-light"}`} />
                <select className={`form-control shadow-none ${theme && "bg-dark text-light"}`} aria-label="Default select example">
                  <option selected>5th</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className={`form-control shadow-none ${theme && "bg-dark text-light"}`} aria-label="Default select example">
                  <option selected>2021</option>
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
            <caption>Students of  className 5th & session 2021</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">contacts</th>
                <th scope="col">Address</th>
                <th scope="col">grade</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                    <div className="row">
                      <div className="col-3">
                        <img src={avater} className="avater" alt="..." />
                      </div>
                      <div className="col">
                        {data.name} <small className="ref-value"> ({data.rollNo})</small><br></br>
                        <small className="ref-value">{data.Father}</small>
                      </div>
                    </div>
                  </td>
                  <td>{data.contact1}<br />
                      {data.contact2}
                  </td>
                  <td>{data.address}</td>
                  <td>{data.grade}</td>
                  <td>{data.status}</td>
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

export default Students