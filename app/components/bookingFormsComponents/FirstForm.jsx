"use client";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import * as Yup from "yup";

export const step1Schema = Yup.object({
    service: Yup.string().required("Please select a service"),
    pickup: Yup.string().required("Pickup location is required"),
    destination: Yup.string()
        .required("Destination is required")
        .notOneOf([Yup.ref("pickup")], "Pickup and destination cannot be the same"),
    stops: Yup.array()
        .of(Yup.string().required("Stop is required"))
        .test(
            "stops-not-equal",
            "A stop cannot be the same as pickup or destination",
            function (stops) {
                if (!stops) return true;
                const { pickup, destination } = this.parent || {};
                return stops.every((s) => s && s !== pickup && s !== destination);
            }
        ),
});

export default function FirstForm() {
    const { values, setFieldValue } = useFormikContext();

    const locations = [
        "Uyo City Centre",
        "Victor Attah International Airport (QUO)",
        "Ibom Icon Hotel & Golf Resort",
        "Shelter Afrique Junction",
        "Ewet Housing Estate",
    ];

    const handleSwap = () => {
        const prevPickup = values.pickup;
        const prevDestination = values.destination;
        setFieldValue("pickup", prevDestination || "");
        setFieldValue("destination", prevPickup || "");
    };


    const inputClasses =
        "input text-sm w-full p-2 border border-black rounded-xl focus:ring-2 focus:ring-[#2bd889] focus:border-black focus:outline-none border-gray-300 dark:border-gray-600 ";

    return (
        <div >
            <h2 className="text-medium font-bold mb-2">Service & Route</h2>


            <div className="relative mb-2 pr-20 ">
                <div className="flex gap-3">

                    <div className="flex-1">
                        <label className="block mb-1">Service</label>
                        <Field as="select" name="service" className={inputClasses}>
                            <option value="">Select…</option>
                            <option>Airport transfer</option>
                            <option>Intrastate</option>
                            <option>Interstate</option>
                            <option>Uyo Half Day</option>
                            <option>Uyo Full Day</option>
                            <option>Wedding Full Day</option>
                            <option>Others</option>
                        </Field>
                        <ErrorMessage
                            name="service"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />


                        <FieldArray name="stops">
                            {({ push }) => (
                                <button
                                    type="button"
                                    onClick={() => push("")}
                                    className="px-2 py-1 mt-1 border rounded-lg bg-white hover:bg-gray-100 text-sm border-gray-300 font-semibold dark:bg-[#ffffff0f] dark:border-gray-600 dark:text-gray-200"
                                >
                                    + Add stop
                                </button>
                            )}
                        </FieldArray>
                    </div>


                    <div className="flex-1">
                        <label className="block mb-1">Pickup</label>
                        <Field
                            list="pickup-options"
                            name="pickup"
                            className={inputClasses}
                            placeholder="Type or select pickup"
                        />
                        <datalist id="pickup-options">
                            {locations.map((loc) => (
                                <option key={loc} value={loc} />
                            ))}
                        </datalist>
                        <ErrorMessage
                            name="pickup"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleSwap}
                    className="absolute top-1/2 right-0 -translate-y-1/2 px-2 py-1 border rounded-lg bg-white hover:bg-gray-100 text-sm border-gray-300 font-semibold dark:bg-[#ffffff0f] dark:border-gray-600 dark:text-gray-200"
                >
                    ⇅ Swap
                </button>

            </div>


            <div className="mb-4">
                <label className="block mb-1">Destination</label>
                <Field
                    list="destination-options"
                    name="destination"
                    className={inputClasses}
                    placeholder="Type or select destination"
                />
                <datalist id="destination-options">
                    {locations.map((loc) => (
                        <option key={loc} value={loc} />
                    ))}
                </datalist>
                <ErrorMessage
                    name="destination"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                />
            </div>


            <FieldArray name="stops">
                {({ remove }) => (
                    <div className="space-y-2">
                        {values.stops &&
                            values.stops.map((_, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Field
                                        list={`stop-options-${index}`}
                                        name={`stops.${index}`}
                                        className={`${inputClasses} flex-1`}
                                        placeholder="Type or select stop"
                                    />
                                    <datalist id={`stop-options-${index}`}>
                                        {locations.map((loc) => (
                                            <option key={loc} value={loc} />
                                        ))}
                                    </datalist>
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="px-3 py-1 text-sm text-red-600 border rounded-md hover:bg-red-50  dark:hover:bg-[#ffffff0f] "
                                    >
                                        Remove
                                    </button>
                                    <ErrorMessage
                                        name={`stops.${index}`}
                                        component="p"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            ))}
                    </div>
                )}
            </FieldArray>
        </div>
    );
}
