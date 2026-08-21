import { useFormik } from "formik";
import * as yup from "yup";
import {
  FaPlaneDeparture,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdFlightClass } from "react-icons/md";
import { toast } from "react-toastify";
import { useContext } from "react";
import { bookingContext } from "../../context/Booking.context";

export default function BookingForm() {
  // Validation Schema with Yup
  // const validationSchema = Yup.object({
  //   destination: Yup.string()
  //     .min(2, "Destination must be at least 2 characters")
  //     .required("Destination is required"),
  //   departureDate: Yup.string().required("Departure date is required"),
  //   returnDate: Yup.string(),
  //   travelers: Yup.number()
  //     .min(1, "Must have at least 1 traveler")
  //     .max(20, "Maximum 20 travelers allowed")
  //     .required("Number of travelers is required"),
  //   hotel: Yup.string().required("Hotel class is required"),
  // });

  const { setBooking } = useContext(bookingContext);

  const validationSchema = yup.object({
    destination: yup
      .string()
      .required("destination is required")
      .min(3, "destination should not be less than 3 characters")
      .max(20, "destination should not be greater than 20 characters"),

    travellingDay: yup.string().required("travelling day is required"),
    returnDay: yup.string(),
    travelersNumber: yup
      .number()
      .required("traveler number is required")
      .min(1, " must have at least 1")
      .max(20, "max 20 travelers is required"),
    classLevel: yup.string().required("class level is required"),
  });

  function handleForm(values, { resetForm }) {
    // console.log(values);
    setBooking(values);
    toast.success("Booking is Done")
    resetForm();
  }

  const formik = useFormik({
    initialValues: {
      destination: "",
      travellingDay: "",
      returnDay: "",
      travelersNumber: 1,
      classLevel: "",
    },

    validationSchema,
    onSubmit: handleForm,
  });

  // console.log(formik);

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Plan Your Journey
      </h2>

      {/* Destination  */}
      <div className="relative group">
        <input
          placeholder=" "
          name="destination"
          className="peer input"
          value={formik.values.destination}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label
          className="absolute left-4 top-0 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
        peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm pointer-events-none"
        >
          Destination
        </label>

        <div className="absolute right-3 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <FaExclamationCircle className="w-5 h-5 text-gray-400" />
        </div>

        {formik.errors.destination && formik.touched.destination ? (
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
            <FaExclamationCircle className="w-4 h-4" />
            {formik.errors.destination}
          </p>
        ) : (
          ""
        )}
      </div>

      {/* Dates*/}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
          <input
            type="date"
            className="peer input group-hover:border-green-300"
            name="travellingDay"
            value={formik.values.travellingDay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
          peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm pointer-events-none"
          >
            Departure Date
          </label>

          {formik.errors.travellingDay && formik.touched.travellingDay ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.travellingDay}
            </p>
          ) : (
            ``
          )}
        </div>

        <div className="relative group">
          <input
            type="date"
            className="peer input group-hover:border-green-300"
            name="returnDay"
            value={formik.values.returnDay}
            onChange={formik.handleChange}
          />
          <label
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
          peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm pointer-events-none"
          >
            Return Date (Optional)
          </label>
        </div>
      </div>

      {/* Travelers Number */}
      <div className="relative group">
        <input
          type="number"
          placeholder=" "
          min={1}
          className="peer input invalid:border-red-300"
          name="travelersNumber"
          value={formik.values.travelersNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label
          className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
        peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm 
        peer-invalid:text-red-500 pointer-events-none"
        >
          Number of Travelers
        </label>

        {formik.errors.travelersNumber && formik.touched.travelersNumber ? (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.travelersNumber}
          </p>
        ) : (
          ""
        )}
      </div>

      {/* Class Level*/}
      <div className="relative group">
        <select
          className="peer input appearance-none cursor-pointer group-hover:border-green-300"
          name="classLevel"
          value={formik.values.classLevel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" hidden>
            Choose your Class
          </option>
          <option value="economy">Economy</option>
          <option value="comfort">Comfort</option>
          <option value="luxury">Luxury</option>
          <option value="premium">Premium</option>
        </select>

        <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-green-600 pointer-events-none">
          Class
        </label>

        <div className="absolute right-3 top-4 pointer-events-none">
          <MdFlightClass className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
        </div>

        {formik.errors.classLevel && formik.touched.classLevel ? (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.classLevel}
          </p>
        ) : (
          ""
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="group relative w-full bg-gray-800 text-white py-4 rounded-xl font-bold hover:bg-gray-700 transition-all shadow-md hover:shadow-xl overflow-hidden cursor-pointer"
      >
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>

        <span className="relative flex items-center justify-center gap-2">
          Book Your Trip
          <FaPlaneDeparture className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
    </form>
  );
}
