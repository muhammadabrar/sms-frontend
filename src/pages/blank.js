import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Blank() {
    const theme = useSelector((state) => state.theme.value)

  return (<>
    <div className={!theme ? "content" : "content-dark"}>
            <h1>Blank</h1>
            </div>
        </>
  );
}

export default Blank