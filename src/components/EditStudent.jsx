import React from 'react';
import { useState, useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { studentContext } from './../App';

function EditStudent() {

    let context = useContext(studentContext)

    let params = useParams();
    let navigate = useNavigate() //NavigateFunction Returns an imperative method for changing the location. 
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [Batch, setClass] = useState("")

    //rander the components
    useEffect(() => {
        if (params.id < context.students.length) {
            gateData();
        }
        else {
            alert("selected student is not available")
            navigate("/all-students")

        }

    }, [])

    //get pre populate data
    let gateData = () => {
        setName(context.students[params.id].name)
        setEmail(context.students[params.id].email)
        setMobile(context.students[params.id].mobile)
        setClass(context.students[params.id].Batch)

    }
    //update the data and submit the data
    let handleSubmit = () => {
        navigate("/all-students")
        let newData = { name, email, mobile, Batch }
        let newArray = [...context.students]
        newArray.splice(params.id, 1, newData)
        context.setStudent(newArray)



    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" placeholder="Enter full name" onChange={(e) => setName(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control value={mobile} type="text" placeholder=" Enter mobile number" onChange={(e) => setMobile(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your mobile number with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Class</Form.Label>
                    <Form.Control value={Batch} type="text" placeholder="Enter batch name" onChange={(e) => setClass(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Update
                </Button>
            </Form>

        </div>
    )
}


export default EditStudent
