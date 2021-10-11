

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Students from '../components/students_table';
import Staff from '../components/staff_table';
import Students_chart from '../components/students_chart';
import Students_pie from '../components/students_pie';
import Sparkboxes from '../components/sparkbox';
import { Signup } from '../components/form'
import Exams from '../components/exam_table';

function Dashboard() {
  const theme = useSelector((state) => state.theme.value)
  


  return (<>
    <div className={!theme ? "page-content" : "page-content-dark"}>
      <div className="container">
        <Sparkboxes />
        <Students_chart />
        <div className="row">
              <div className="col-md-9"><Students /></div>
              <div className="col-md-3"><Students_pie/></div>
        </div>
        <div className="row">
              <div className="col-md-6"><Staff /></div>
              <div className="col-md-6"><Exams /></div>
              <div className="col-md-6"><Students /></div>
              <div className="col-md-6"><Students /></div>

        </div>
        
      </div>

    </div>
  </>
  );
}

export default Dashboard;