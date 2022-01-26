import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { studentContext } from './../App';

function AllStudents(props) {
  let context = useContext(studentContext)
  console.log(context)
  let handleDelet = (index) => {
    let newArry = [...context.students]
    console.log(newArry)
    newArry.splice(index, 1);
    context.setStudent(newArry)

  }

  return <div>
    <Table striped bordered hover responsive="sm" >
      <thead>
        <tr>
          <th>Sr.no.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {
          context.students.map((eliment, index) => {
            return <tr key={index}>
              <td>{index}</td>
              <td>{eliment.name}</td>
              <td>{eliment.email}</td>
              <td>{eliment.mobile}</td>
              <td>{eliment.Batch}</td>
              <td><Button variant="danger" onClick={() => handleDelet(index)}>Delet</Button><span>&nbsp;</span>
                <Link to={`/edit-student/${index}`}><Button variant="warning">Adit</Button></Link>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>;
}

export default AllStudents;
