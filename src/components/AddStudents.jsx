import React from "react";
import { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { studentContext } from './../App';


function AddStudents(props) {

  let context = useContext(studentContext)
  let navigate = useNavigate() //NavigateFunction Returns an imperative method for changing the location. 
  //Used by s, but may also be used by other elements to change the location.
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [Batch, setClass] = useState("")

  let handleSubmit = () => {
    let newData = { name, email, mobile, Batch }
    let newArry = [...context.students] //maped the new arry
    newArry.push(newData)
    context.setStudent(newArry)
    navigate("all-students")

  }
  return <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" onChange={(e) => setName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder=" Enter mobile number" onChange={(e) => setMobile(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your mobile number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Enter batch name" onChange={(e) => setClass(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

  </div>;
}

export default AddStudents;
