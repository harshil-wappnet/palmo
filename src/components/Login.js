import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { loggedStatus } from "../Redux/Actions";
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedDatas = localStorage.getItem('loggedData');
    if (loggedDatas != null) {
        dispatch(loggedStatus(true));
        navigate('/')
    }
    const onSubmit = (values) => {
        // Retrieve stored data from local storage
        const storedData = localStorage.getItem('userData');

        if (storedData == null) {
            alert("There is no registered user.");
            navigate('/signup')
        }
        else if (storedData) {
            // Parse stored data back to an object
            const parsedStoredData = JSON.parse(storedData);

            // Check if the form values match the stored data
            if (values.username === parsedStoredData.username && values.password === parsedStoredData.password) {
                // If they match, navigate to '/home'
                localStorage.setItem('loggedData', JSON.stringify(values));
                dispatch(loggedStatus(true, parsedStoredData));
                // navigate('/profile', { state: formik.values });
                // console.log(formik.values)
            }
            else {
                // If they don't match, show an alert
                alert("Enter correct credentials");
            }
        }
    }
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
    const formik = useFormik(
        {
            initialValues: {
                username: "",
                password: "",
            },
            validationSchema: yup.object({
                username: yup.string("Must be string").required("Mandatory field"),
                password: yup.string().min(8, "Password must be at least 8 characters").matches(
                    password_pattern,
                    'Password must contain at least one letter, one number, and one special character'
                ).required("Password is required")
            }),
            onSubmit
        }

    )

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit} className='container align-items-center d-flex flex-column p-5 mt-3 rounded login'>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="username" className='align-content-left'>User Name : </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.username && formik.errors.username ? (<div className='errors'>{formik.errors.username}</div>) : null}<br />
                </div>
                <div className="col-md-4 mb-3 d-flex flex-column">
                    <label htmlFor="password">Password : </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='errors'>{formik.errors.password}</div>
                    ) : null}<br />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Login