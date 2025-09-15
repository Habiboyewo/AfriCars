"use client";
import { Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Prices } from "../../utilis/prices";

export const step3Schema = Yup.object({
  name: Yup.string().required("Your name is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9\- ]+$/, "Enter a valid phone number")
    .required("Phone is required"),
  notes: Yup.string(),
});


function computePrice(service, unit, qty) {
  const match = Prices.find((p) => p.title === service);
  const base = match?.value;
  
  if (!base || !qty) return null;

  let multiplier = qty;
  if (unit === "weeks") multiplier = 7 * qty;
  if (unit === "months") multiplier = 30 * qty;

  let gross = base * multiplier;
  let discount = 0;

  if (unit === "weeks") discount = 0.25;
  if (unit === "months") discount = 0.4;

  const finalPrice = Math.round(gross * (1 - discount));
  return { finalPrice, discounted: discount > 0 }; // 
}

export default function ThirdForm() {
  const { values } = useFormikContext();

  const priceData = computePrice(
    values.service,
    values.durationUnit,
    values.durationQty
  );

  return (
    <div>
      <h2 className="text-medium font-bold mb-4">Your Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="text-sm">
          <label >Name</label>
          <Field
            name="name"
            placeholder="Your name"
            className="text-sm w-full p-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-[#2bd889]"
          />
          <ErrorMessage
            name="name"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="text-sm">
          <label>Phone</label>
          <Field
            name="phone"
            placeholder="+234-701-350-2404"
            className="text-sm w-full p-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-[#2bd889]"
          />
          <ErrorMessage
            name="phone"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
      </div>

      <div className="mb-4 text-sm">
        <label>Notes (flights no., special requests)</label>
        <Field
          as="textarea"
          name="notes"
          rows={3}
          className="text-sm w-full p-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#2bd889]"
        />
      </div>

      <div className="p-4 border border-dotted border-gray-200 rounded-lg bg-gray-100 text-sm">
        <p>
          <strong>Service:</strong> {values.service}
        </p>
        <p>
          <strong>Route:</strong> {values.pickup} → {values.destination}
        </p>
        <p>
          <strong>When:</strong>{" "}
          {values.when === "ASAP" ? "ASAP" : `${values.date} at ${values.time}`}
        </p>
        <p>
          <strong>Duration:</strong> {values.durationQty} {values.durationUnit}
        </p>
        <p>
          <strong>Contact:</strong> {values.name} • {values.phone}
        </p>

        {/* price info */}
        {priceData && (
          <p className="font-semibold">
            Price: ₦{priceData.finalPrice.toLocaleString()}
            {priceData.discounted && " (discounted)"}
          </p>
        )}
      </div>
    </div>
  );
}
