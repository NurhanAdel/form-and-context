import { Flip, ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import BookingProvider from "./context/Booking.context";

export default function App() {
  return (
    <>
    <BookingProvider>
        <Home />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </BookingProvider>
    </>
  );
}
