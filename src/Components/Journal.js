import React, { useState } from 'react'
import { Formik } from "formik"
import { Col, Form, FormControl, Row } from "react-bootstrap"

import * as Yup from "yup";

const Journal = () => {
    const [data, setData] = useState();
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string().email("Email is invalid").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 charaters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Confirm password is required")
    });


    return (
        <div>
            <div className='cms-page'>
                <Row>
                    <Formik
                        initialValues={{
                            name: "",
                            age: "",
                            dob: "",
                            mobile_no: "",
                            mail_id: "",
                            aadhar_card_number: "",
                            pan_number: ""
                        }}
                        validationSchema={validate}
                        onSubmit={(e) => (console.log(e))}>
                        {({ values, error, handleSubmit, handleChange }) => (

                            <Row><Form onSubmit={handleSubmit}>
                                <Col xs="12"><Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Email address</Form.Label>
                                    <Form.Control name="name" value={values.name} type="email" placeholder="Enter email" />

                                </Form.Group></Col>
                            </Form></Row>
                        )}
                    </Formik>
                </Row>
            </div >
        </div >
    )
}

export default Journal