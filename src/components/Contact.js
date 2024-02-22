import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";
function Contact() {
    const [inputs, setInputs] = useState([]);
    const phone_pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            reservationdate: "",
            member: 1,
        },
        validationSchema: yup.object({
            name: yup.string().required("Name is required").min(3, "At least 3 characters").max(20, "At max 20 character allowed"),
            email: yup.string().email("Invalid email address").required('Email is Required'),
            phone: yup.string().required("Contact Number is required").matches(phone_pattern, "Phone number format is invalid."),
            reservationdate: yup.date().required("Date is required").min(new Date(), 'Date must be before or equal to today'),
            member: yup.number().required("No. of members is requied").min(1, "Member must be greater than 0"),
        }),
        onSubmit: (values) => {
            setInputs((prevvalues) => ([...prevvalues, values]));
            console.log(inputs)
        }
    });
    return (
        <div className="forms-bg">
            <h3 className='text-white'> Reserve Fine Dine at our Restaurant</h3>
            <form onSubmit={formik.handleSubmit} className='container align-items-center d-flex flex-column p-5 mt-3 rounded Contact'>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="name" className='align-content-left'>Name : </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? (<div className='errors'>{formik.errors.name}</div>) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="email">Email : </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='errors'>{formik.errors.email}</div>
                    ) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="phone">Phone Number : </label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter your Contact Number"
                        value={formik.values.contactnumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.phone && formik.errors.phone ? (<div className='errors'>{formik.errors.phone}</div>) : null}<br /><br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="reservationdate">Reservation Date : </label>
                    <input
                        type="date"
                        id="reservationdate"
                        value={formik.values.reservationdate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.reservationdate && formik.errors.reservationdate ? (
                        <div className='errors'>Not valid Date</div>
                    ) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="member">Members : </label>
                    <input
                        type="number"
                        name="member"
                        value={formik.values.member}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.member && formik.errors.member ? (<div className='errors'>{formik.errors.member}</div>) : null}<br /><br />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
