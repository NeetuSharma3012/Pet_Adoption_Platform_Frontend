'use client';
import axiosInstance from '@/utils/axiosInstance';
import { IconCheck, IconInfoCircle, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-zA-Z\s]+$/,'Name must contain only alphabets and spaces')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('passward is required')
      .matches(/[a-z]/, 'lowercase lettter is required')
      .matches(/[A-Z]/, 'uppercase lettter is required')
      .matches(/[0-9]/, 'number is required')
      .matches(/\W/, 'symbol required')
      .min(8, 'minimum 8 characters are required '),
    confirmPassword: Yup.string().required('Please Confirm Passward')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });


const Signup = () => {

  const [showConditions, setShowConditions] = useState(false); // State to toggle dropdown

  const router =useRouter();


    //initialising formik
    const form = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
      
      axiosInstance.post('/user/add', values)
        .then((result) => {
          toast.success('User Registered successfully');
          resetForm();
          router.push('/login');
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'something went wrong');
          setSubmitting(false);
        });

        },
        validationSchema: SignupSchema
    });

  return (
    <div className='min-h-screen'>
      <div className="max-w-lg mx-auto mt-7 bg-slate-100 rounded-lg border-2 border-lime-200 shadow-md dark:bg-neutral-900 dark:border-neutral-700">
  <div className="p-4 sm:p-7">
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
        Sign up
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Already have an account?
        <a
          className="text-lime-400 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-lime-600"
          href="../examples/html/signin.html"
        >
          Sign in here
        </a>
      </p>
    </div>
    <div className="mt-5">
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      >
        <svg
          className="w-4 h-auto"
          width={46}
          height={47}
          viewBox="0 0 46 47"
          fill="none"
        >
          <path
            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
            fill="#4285F4"
          />
          <path
            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
            fill="#34A853"
          />
          <path
            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
            fill="#FBBC05"
          />
          <path
            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
            fill="#EB4335"
          />
        </svg>
        Sign up with Google
      </button>
      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
        Or
      </div>
      {/* Form */}
      <form onSubmit={form.handleSubmit}>
        <div className="grid gap-y-4">
          {/* Form Group */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                //name="email"
                onChange={form.handleChange}
                value={form.values.name}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            {
                (form.errors.name && form.touched.name) && (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {form.errors.name}
                    </p>
                  )
            }
            
          </div>
          {/* End Form Group */}

          <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        onChange={form.handleChange}
                        value={form.values.email}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required=""
                        aria-describedby="email-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>{
                      (form.errors.email && form.touched.email) && (
                        <p className="text-xs text-red-600 mt-2" id="email-error">
                          {form.errors.email}
                        </p>
                      )
                    }
                  </div>
                  {/* End Form Group */}
          {/* Form Group */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2 dark:text-white"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                //name="password"
                onChange={form.handleChange}
                value={form.values.password}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="password-error"
              />
              





              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>

            <div className="mt-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowConditions(!showConditions)}
                                            className="flex items-center gap-2 text-xs text-gray-500 dark:text-neutral-400"
                                        >
                                            <IconInfoCircle size={16} /> 
                                            <span>Password Requirements</span>
                                        </button>
                                        {showConditions && (
                                            <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-600 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-300">
                                                <ul className="list-disc pl-5">
                                                    <li>Minimum 8 characters</li>
                                                    <li>Contains atleast an uppercase letter</li>
                                                    <li>Contains atleast a lowercase letter</li>
                                                    <li>Contains atleast a number</li>
                                                    <li>Contains atleast a symbol</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>

            
            {
                (form.errors.password && form.touched.password) && (<p className=" text-xs text-red-600 mt-2" id="password-error">
                    {form.errors.password}
                   </p>)
            }
          </div>
          {/* End Form Group */}
          {/* Form Group */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm mb-2 dark:text-white"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                onChange={form.handleChange}
                value={form.values.confirmPassword}
                //name="confirm-password"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="confirm-password-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            {
                (form.errors.confirmPassword && form.touched.confirmPassword) && (<p
                    className=" text-xs text-red-600 mt-2"
                    id="confirm-password-error"
                  >
                    {form.errors.confirmPassword}
                  </p>)
            }
          </div>
          {/* End Form Group */}
          {/* Checkbox */}
          <div className="flex items-center">
            <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
            </div>
            <div className="ms-3">
              <label htmlFor="remember-me" className="text-sm dark:text-white">
                I accept the{" "}
                <a
                  className="text-lime-400 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-lime-600"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          {/* End Checkbox */}
          <button
            type="submit"
            disabled={form.isSubmitting}
            className="flex items center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {form.isSubmitting ?<IconLoader3 />:<IconCheck/>}
            {form.isSubmitting ? 'Submitting...' : 'Sign up'}
          </button>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Signup;
