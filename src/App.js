import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import EditStudent from './components/EditStudent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const studentContext = React.createContext("");
function App() {
  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: 20,
    pending: 26,
  };
  let [students, setStudent] = useState([
    {
      name: "Omprakash yadav",
      email: "omprakash@gmail.com",
      mobile: 7845124570,
      Batch: "B30WD"
    },
    {
      name: "JAiprakash yadav",
      email: "jaiprakash@gmail.com",
      mobile: 8845124575,
      Batch: "B30WD"
    },
    {
      name: "Chandan kumar",
      email: "chandan@gmail.com",
      mobile: 8745127567,
      Batch: "B30WD"
    },
    {
      name: "Kundan kumar",
      email: "Kundan@gmail.com",
      mobile: 9545124551,
      Batch: "B30WD"
    }


  ])
  return (
    <>
      <BrowserRouter>
        <studentContext.Provider value={{ students, setStudent }}>
          <div style={{ display: "grid", gridTemplateColumns: "17% 85%" }}>
            <div>
              <Sidebar />
            </div>
            <div>
              <Routes>
                <Route path="/dashboard" element={<Dashboard data={data} />} />
                <Route path="/all-students" element={<AllStudents />} />
                <Route path="/add-student" element={<AddStudents />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/" element={<Dashboard data={data} />} />
              </Routes>
            </div>
          </div>
        </studentContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
