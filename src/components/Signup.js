import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
function Signup() {
    const navigatesignup = useNavigate();
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const onSubmit = (values, { resetForm }) => {

        // Save the data to localStorage
        localStorage.setItem('userData', JSON.stringify(values));
        // Add your further logic for handling form submission
        resetForm();
        navigatesignup('/login');
    }

    const formik = useFormik(
        {
            initialValues: {
                username: '',
                address: '',
                password: '',
                cnfpassword: '',
            },
            validationSchema: yup.object({
                username: yup.string("Must be string").required("Mandatory field"),
                address: yup.string()
                    .trim()
                    .required('Address is required')
                    .min(5, 'Address must be at least 5 characters')
                    .max(255, 'Address must not exceed 255 characters'),
                password: yup.string().min(8, "Minimum 8 characters required").max(16, "Maximum 16 characters required").required("Password is required").matches(password_pattern, "Valid the password"),
                cnfpassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('password'), null], 'Passwords must match').matches(password_pattern, "Valid the password"),
            }),
            onSubmit


        })
    return (
        <div>
            <h1>Register Here</h1>
            <form onSubmit={formik.handleSubmit} className='container align-items-center d-flex flex-column p-5 mt-3 rounded login'>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="username" className='align-content-left'>User Name : </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formik.values.username || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.username && formik.errors.username ? (<div className='errors'>{formik.errors.username}</div>) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="address" className='align-content-left'>Address : </label>
                    <textarea className='rounded-2 border-black'
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={formik.values.address || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.address && formik.errors.address ? (<div className='errors'>{formik.errors.address}</div>) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="password">Password : </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formik.values.password || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='errors'>{formik.errors.password}</div>
                    ) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="cnfpassword">Confirm Password : </label>
                    <input
                        type="password"
                        placeholder="Enter confirm password"
                        name="cnfpassword"
                        value={formik.values.cnfpassword || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.cnfpassword && formik.errors.cnfpassword ? (
                        <div className='errors'>{formik.errors.cnfpassword}</div>
                    ) : null}<br />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Signup
