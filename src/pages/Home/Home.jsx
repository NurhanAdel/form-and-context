import BookingForm from "../../components/BookingForm/BookingForm";
import TicketPreview from "../../components/TicketPreview/TicketPreview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1632573463086-187651a11514?q=80&w=687&auto=format&fit=crop"
          alt="Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Booking Form */}
        <div className="relative z-10 flex items-center justify-center h-full p-8">
          <div className="w-full max-w-md bg-white bg-opacity-95 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Ticket display */}
      <div className="lg:w-1/2 flex items-center justify-center min-h-screen p-8">
        <TicketPreview />
      </div>
    </div>
  );
}
