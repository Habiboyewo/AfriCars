"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import FirstForm, { step1Schema } from "./FirstForm";
import SecoundForm, { step2Schema } from "./SecoundForm";
import ThirdForm, { step3Schema } from "./ThirdForm";

export default function BookingForm() {
    const [step, setStep] = useState(0);
    const [success, setSuccess] = useState(false);

    const steps = [
        { component: <FirstForm />, schema: step1Schema },
        { component: <SecoundForm />, schema: step2Schema },
        { component: <ThirdForm />, schema: step3Schema },
    ];

    const initialValues = {
        service: "",
        pickup: "",
        destination: "",
        when: "ASAP",
        date: "",
        time: "",
        durationUnit: "days",
        durationQty: 1,
        name: "",
        phone: "",
        notes: "",
    };

    const handleSubmit = (values, actions) => {
        if (step < steps.length - 1) {
            setStep(step + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        } else {
            console.log("Form submitted ✅", values);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            actions.resetForm();
            setStep(0);
        }
    };

    return (
        <div className="max-w-xl p-4 pb-6 border border-gray-200 rounded-2xl bg-white shadow-xl">
          
            <h1 className="text-xl font-bold ">Book your ride</h1>
            <p className="text-gray-500  mb-3 text-sm">
                <span>Secure</span> • <span>Comfortable</span> • <span>On-time</span>
            </p>

            {/* Progress bar */}
            <div className="w-full bg-gray-600 h-2 rounded-full mb-2">
                <div
                    className="h-2 bg-[#0b8a5a] rounded-full transition-all"
                    style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                ></div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={steps[step].schema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, validateForm, setTouched, submitForm }) => (
                    <>
                        {/* Step buttons */}
                        <div className="flex justify-center gap-4 mb-6">
                            {steps.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={async () => {
                                        const errors = await validateForm();
                                        if (Object.keys(errors).length === 0) {
                                            setStep(index);
                                        } else {
                                            const stepFields = Object.keys(
                                                steps[step].schema.fields
                                            );
                                            const touchedFields = {};
                                            stepFields.forEach((f) => (touchedFields[f] = true));
                                            setTouched(touchedFields);
                                        }
                                    }}
                                    className={`border-gray-300 w-40 h-7 rounded-2xl border flex items-center justify-center 
                    ${step === index
                                            ? "ring-2 ring-[#2bd889]"
                                            : " hover:bg-gray-100"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <Form className="space-y-6">
                            {/* Render step */}
                            {steps[step].component}

                           
                            <div className="flex mt-6 gap-2">
                                {/* Back */}
                                <button
                                    type="button"
                                    disabled={step === 0}
                                    onClick={() => {
                                        if (step > 0) {
                                            setStep(step - 1);
                                        }
                                    }}
                                    className={`px-3 py-2 border-gray-300 rounded-xl border font-semibold ${step === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""
                                        }`}
                                >
                                    Back
                                </button>

                                {/* Next */}
                                <button
                                    type="button"
                                    disabled={step === steps.length - 1}
                                    onClick={async () => {
                                        if (step < steps.length - 1) {
                                            const errors = await validateForm();
                                            if (Object.keys(errors).length === 0) {
                                                setStep(step + 1);
                                            } else {
                                                const stepFields = Object.keys(
                                                    steps[step].schema.fields
                                                );
                                                const touchedFields = {};
                                                stepFields.forEach((f) => (touchedFields[f] = true));
                                                setTouched(touchedFields);
                                            }
                                        }
                                    }}
                                    className={`px-3 py-2 border-gray-300 rounded-xl border font-semibold bg-[#2bd889] ${step === steps.length - 1
                                        ? "bg-gray-100 cursor-not-allowed"
                                        : " "
                                        }`}
                                >
                                    Next
                                </button>

                                {/* Submit */}
                                <button
                                    type="button"
                                    disabled={step !== steps.length - 1 || isSubmitting}
                                    onClick={async () => {
                                        const errors = await validateForm();
                                        if (Object.keys(errors).length === 0) {
                                            await submitForm();
                                        } else {
                                            const stepFields = Object.keys(
                                                steps[step].schema.fields
                                            );
                                            const touchedFields = {};
                                            stepFields.forEach((f) => (touchedFields[f] = true));
                                            setTouched(touchedFields);
                                        }
                                    }}
                                    className={`px-4 py-2 rounded-xl border border-gray-300 font-semibold bg-[#2bd889] ${step !== steps.length - 1
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : " "
                                        }`}
                                >
                                    Request Ride
                                </button>
                            </div>

                            {/* Success message */}
                            {success && (
                                <p className="text-green-600 font-semibold mt-4 text-center">
                                    Ride successfully Booked!
                                </p>
                            )}
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
}
