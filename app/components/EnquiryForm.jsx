"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function EnquiryForm() {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .trim()
                .required("Name is required")
                .min(2, "Name must be at least 2 characters"),
            phone: Yup.string()
                .required("Phone number is required")
                .matches(/^[0-9]+$/, "Phone number must only contain digits")
                .min(10, "Phone number must be at least 10 digits"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log("Form submitted:", values);

            setSubmitted(true);
            resetForm();


            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        },
    });

    return (
        <section id="contact"  className=" p-6 border border-gray-200 rounded-2xl bg-white shadow-xl mx-8 sm:mx-20 md:mx-0 dark:bg-[#ffffff14] dark:border-gray-600">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick enquiry</h2>

            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center space-y-6 "
            >

                <div className="w-full sm:max-w-md">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 w-full border rounded-xl px-3 py-2 text-sm dark:border-gray-600"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
                    )}
                </div>


                <div className="w-full sm:max-w-md">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Your phone number"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 w-full border rounded-xl px-3 py-2 text-sm dark:border-gray-600"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.phone}</p>
                    )}
                </div>


                <button
                    type="submit"
                    className="w-full sm:max-w-md bg-[#2bd889] text-white py-2 px-4 rounded-xl hover:bg-[#23b46e] transition"
                >
                    Submit
                </button>


                {submitted && (
                    <p className="text-green-600 text-sm mt-2">
                        ✅ Enquiry submitted successfully!
                    </p>
                )}
                <p className="text-sm ">We respond fast during operating hours.</p>

            </form>
        </section>
    );
}
