"use client";
import { Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

export const step2Schema = Yup.object({
  when: Yup.string().required(),
  date: Yup.string().when("when", {
    is: "Schedule",
    then: (s) => s.required("Please pick a date"),
  }),
  time: Yup.string().when("when", {
    is: "Schedule",
    then: (s) => s.required("Please pick a time"),
  }),
  durationUnit: Yup.string().required("Choose a duration unit"),
  durationQty: Yup.number()
    .min(1, "Minimum is 1")
    .required("Enter duration quantity"),
});

export default function SecoundForm() {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <h2 className="text-medium font-bold mb-2">When & Duration</h2>

      
      <div className="mb-4">
        <label className="block mb-1 text-sm">When</label>
        <div className="flex gap-2">
          {["ASAP", "Schedule"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setFieldValue("when", opt)}
              className={`px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-800 
                ${values.when === opt ? "ring-2 ring-[#2bd889]" : ""}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
        <div>
          <label>Date</label>
          <Field
            type="date"
            name="date"
            disabled={values.when === "ASAP"}
            className="input text-sm w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bd889] disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <ErrorMessage
            name="date"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
        <div>
          <label  >Time</label>
          <Field
            type="time"
            name="time"
            disabled={values.when === "ASAP"}
            className="input text-sm w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bd889] disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <ErrorMessage
            name="time"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div>
          <label>Duration Unit</label>
          <Field
            as="select"
            name="durationUnit"
            className="input text-sm w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bd889]"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks (25% off)</option>
            <option value="months">Months (40% off)</option>
          </Field>
          <ErrorMessage
            name="durationUnit"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
        <div>
          <label>Quantity</label>
          <Field
            type="number"
            name="durationQty"
            min="1"
            className="input text-sm w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bd889]"
          />
          <ErrorMessage
            name="durationQty"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
      </div>

     
    </div>
  );
}
