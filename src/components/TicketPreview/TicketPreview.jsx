import { useContext } from "react";
import { FaPlaneDeparture, FaUsers } from "react-icons/fa";
import { bookingContext } from "../../context/Booking.context";
import { MdFlightClass } from "react-icons/md";

export default function TicketPreview() {
  const { booking } = useContext(bookingContext);

  console.log(booking);
  if (!booking) {
    return (
      <>
        <div className="flex items-center justify-center h-full text-stone-600 font-semibold">
          <div className="text-center">
            <FaPlaneDeparture className="w-16 h-16 mx-auto mb-4 opacity-30 text-stone-800" />
            <p className="text-lg">No booking yet</p>
            <p className="text-sm">Fill the form to see your ticket</p>
          </div>
        </div>
      </>
    );
  }
  // <div className="flex items-center justify-center h-full text-stone-600 font-semibold">
  //   <div className="text-center">
  //     <FaPlaneDeparture className="w-16 h-16 mx-auto mb-4 opacity-30 text-stone-800" />
  //     <p className="text-lg">No booking yet</p>
  //     <p className="text-sm">Fill the form to see your ticket</p>
  //   </div>
  // </div>

  return (
    <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl hover:shadow-2xl transition-shadow">
      {/* Ticket Header */}
      <div className="bg-gray-800 px-8 py-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-green-300 uppercase tracking-wide">
                Boarding Pass
              </p>
              <h4 className="text-2xl font-bold mt-1">{booking.destination}</h4>
            </div>
            <FaPlaneDeparture className="w-8 h-8 text-green-300" />
          </div>
          <p className="text-green-300 text-sm mt-2">TravelEase Airlines</p>
        </div>
      </div>

      {/* Ticket Body */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div className="group/date">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 group-hover/date:text-green-600 transition-colors">
              Departure
            </p>
            <p className="text-lg font-bold text-gray-800">
              {booking.travellingDay}
            </p>
          </div>

          <div className="group/date">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 group-hover/date:text-green-600 transition-colors">
              Return
            </p>
            <p className="text-lg font-bold text-gray-800">
              {booking.returnDay}
            </p>
          </div>
        </div>

        {/* Details  */}
        <div className="border-t-2 border-dashed border-gray-200 pt-4 space-y-3">
          <div className="group/item flex justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-600 flex items-center gap-2">
              <FaUsers className="w-4 h-4 group-hover/item:text-green-500 transition-colors" />
              Passengers
            </span>
            <span className="font-semibold text-gray-800">
              {booking.travelersNumber}
            </span>
          </div>

          <div className="group/item flex justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-600 flex items-center gap-2">
              <MdFlightClass className="w-4 h-4 group-hover/item:text-green-500 transition-colors" />
              Class
            </span>
            <span className="font-semibold text-gray-800">
              {booking.classLevel}
            </span>
          </div>

          <div className="group/item flex justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-600">Booking ID</span>
            <span className="font-mono text-xs text-green-600 font-bold group-hover/item:text-green-700">
              #123597
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
