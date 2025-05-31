// import React, { useState } from "react";

// const ScheduleCall = () => {
//   const [option, setOption] = useState(""); // "immediate" or "scheduled"
//   const [datetime, setDatetime] = useState("");

//   const handleSubmit = () => {
//     if (option === "scheduled" && !datetime) {
//       alert("Please select a date and time.");
//       return;
//     }

//     // Handle appointment logic here (Firebase or your backend)
//     alert(
//       option === "immediate"
//         ? "Starting an immediate video call..."
//         : `Session booked for ${new Date(datetime).toLocaleString()}`
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-100 to-pink-100 flex justify-center items-center px-4">
//       <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full space-y-6">
//         <h2 className="text-2xl font-bold text-center text-violet-700">
//           Schedule a Video Call
//         </h2>

//         <div className="space-y-4">
//           {/* Immediate Call Option */}
//           <button
//             onClick={() => setOption("immediate")}
//             className={`w-full py-3 px-4 rounded-xl font-medium ${
//               option === "immediate"
//                 ? "bg-violet-600 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//           >
//             Immediate Call
//           </button>

//           {/* Schedule for Later Option */}
//           <div className="space-y-2">
//             <label className="block text-gray-600 font-medium">
//               Book a Session
//             </label>
//             <input
//               type="datetime-local"
//               className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-400"
//               value={datetime}
//               onChange={(e) => {
//                 setDatetime(e.target.value);
//                 setOption("scheduled");
//               }}
//             />
//           </div>
//         </div>

//         {/* Confirm Button */}
//         <button
//           onClick={handleSubmit}
//           className="w-full mt-4 bg-violet-600 text-white py-3 px-4 rounded-xl hover:bg-violet-700 transition"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ScheduleCall;

// import React, { useState } from "react";

// const ScheduleOptions = () => {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [datetime, setDatetime] = useState("");

//   const handleImmediateCall = () => {
//     alert("Starting immediate video call... (Integrate Twilio here)");
//   };

//   const handleBooking = () => {
//     if (!datetime) {
//       alert("Please select a date and time for your session.");
//       return;
//     }
//     alert(`Session booked for ${new Date(datetime).toLocaleString()}`);
//     // Save to Firebase or backend here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50 to-pink-100 flex justify-center items-center px-4">
//       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full space-y-6">
//         <h2 className="text-2xl font-bold text-center text-violet-700">
//           We will speak with you
//         </h2>

//         {/* Horizontal Buttons */}
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={handleImmediateCall}
//             className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl text-lg font-medium transition"
//           >
//             Speak Now
//           </button>

//           <button
//             onClick={() => setShowCalendar(!showCalendar)}
//             className="border-2 border-violet-600 hover:bg-violet-50 text-violet-700 px-6 py-3 rounded-xl text-lg font-medium transition"
//           >
//             Book Appointment
//           </button>
//         </div>

//         {/* Calendar Booking */}
//         {showCalendar && (
//           <div className="space-y-3 pt-4">
//             <label className="block text-gray-600 font-medium">
//               Select Date and Time
//             </label>
//             <input
//               type="datetime-local"
//               className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-400"
//               value={datetime}
//               onChange={(e) => setDatetime(e.target.value)}
//             />
//             <button
//               onClick={handleBooking}
//               className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-medium transition"
//             >
//               Confirm Appointment
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ScheduleOptions;

import React, { useState } from "react";

const ScheduleSession = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-white px-4 ">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-black text-4xl font-bold mb-6">
          Talk to Us
        </h2>
        <h4 className="text-black text-1xl">Book a video call with us</h4>
        <br />
        

        <div className="flex justify-center gap-4 mb-6">
          <button
            className="bg-violet-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-violet-700"
            onClick={() => alert("Initiating Immediate Call...")}
          >
            Speak Now
          </button>
          <button
            className="border-2 border-violet-600 text-violet-600 px-6 py-2 rounded-md font-semibold hover:bg-violet-100"
            onClick={() => setShowCalendar(true)}
          >
            Book Appointment
          </button>
        </div>

        {showCalendar && (
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium text-left">
              Select Date and Time
            </label>
            <input
              type="datetime-local"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="text-grey-900 w-full border border-violet-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              className="w-full bg-pink-500 text-grey-900 py-2 rounded-md font-semibold hover:bg-pink-600"
              onClick={() =>
                alert(`Appointment confirmed for ${appointmentDate}`)
              }
            >
              Confirm Appointment
            </button>
          </div>
        )}
      </div>
     </div>
  );
};

export default ScheduleSession;
