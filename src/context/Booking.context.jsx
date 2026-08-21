import { createContext, useState } from "react";

export const bookingContext = createContext(null);

export default function BookingProvider({children}) {
  const [booking, setBooking] = useState(null);
  return (
    <>
      <bookingContext.Provider value={{ booking, setBooking }}>
        {children}
      </bookingContext.Provider>
    </>
  );
}
