import React from 'react';
import ReactDOM from 'react-dom/client';

import Farmer from './Farmer';
import Doctor from './Doctor';
import Teacher from './Teacher';
import Lawyer from './Lawyer';
import SE from './SE';
import "./index.css";

function Occupation() {
  return (
    <div>
      <h1>Hello ninjas</h1>
      <Farmer></Farmer>
      <Teacher></Teacher>
      <Doctor></Doctor>
      <Lawyer></Lawyer>
      <SE></SE>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Occupation/>)

