'use client';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import toast from 'react-hot-toast';
import axiosInstance from '@/utils/axiosInstance';

const ContactPage = () => {

  const router = useRouter();

  const form =useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      details: ''
    },
    onSubmit: (values, { resetForm, setSubmitting}) =>{
      axiosInstance.post('/contact/submit', values)
      .then((result) => {
        toast.success('Form Successfully Submitted.');
        resetForm();
        router.push('/');
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || 'Something went wrong!');
        setSubmitting(false);
        
      });
    }
  });

  
  const { userInfo } = useUser();

 useEffect(() => {
  if (userInfo) {
    if (!form.values.firstName && !form.values.lastName && !form.values.email) {
      const [firstName, lastName = ''] = userInfo.name?.split(' ') || ['',''];
      form.setFieldValue('firstName', firstName);
      form.setFieldValue('lastName', lastName);
      form.setFieldValue('email', userInfo.email);
    }
  }
}, [userInfo]);


  return (
    <div>
      <>
  {/* Contact Us */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          Contact us
        </h1>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>
    </div>

    

    {/* main card */}
    <div className="bg-slate-100 rounded-lg border-2 border-lime-200 shadow-md mt-12 max-w-lg mx-auto">
      {/* Card */}
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Fill in the form
        </h2>
        <form onSubmit={form.handleSubmit}>
          <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-firstname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  readOnly={!!userInfo}
                  id="hs-firstname-contacts-1"
                  value={form.values.firstName}
                  onChange={form.handleChange}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-lastname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  readOnly={!!userInfo}
                  id="hs-lastname-contacts-1"
                  value={form.values.lastName}
                  onChange={form.handleChange}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
            {/* End Grid */}
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-email-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly={!!userInfo}
                  id="hs-email-contacts-1"
                  autoComplete="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-phone-number-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="hs-phone-number-1"
                  value={form.values.phoneNumber}
                  onChange={form.handleChange}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
            {/* End Grid */}
            <div>
              <label
                htmlFor="hs-about-contacts-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Details
              </label>
              <textarea
                id="hs-about-contacts-1"
                name="details"
                rows={4}
                value={form.values.details}
                onChange={form.handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                
              />
            </div>
          </div>
          {/* End Grid */}
          <div className="mt-6 grid">
            <button
              type="submit"
              disabled={form.isSubmitting}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              {form.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              We&apos;ll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
        
      </div>
      {/* End Card */}
    </div>








    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
      {/* Icon Block */}
      <a
        className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
        href="#"
      >
        <svg
          className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Knowledgebase
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-500">
            We&apos;re here to help with any questions.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-lime-600 dark:text-blue-500">
            Contact support
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
        href="#"
      >
        <svg
          className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            FAQ
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-500">
            Search our FAQ for answers to anything you might ask.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-lime-600 dark:text-blue-500">
            Visit FAQ
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
        href="#"
      >
        <svg
          className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 11 2-2-2-2" />
          <path d="M11 13h4" />
          <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Developer APIs
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-500">
            Check out our development quickstart guide.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-lime-600 dark:text-blue-500">
            Contact sales
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
    </div>
  </div>
  {/* End Contact Us */}
</>

    </div>
  )
}

export default ContactPage;
