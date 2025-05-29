import React from 'react';

const TestimonialPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mt-10">
        We are here for you, whenever you need someone to talk to
      </h1>
      <p className="text-gray-500 text-center mt-2">
        Sahayak has already helped thousands of people just like you
      </p>

      <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full max-w-6xl">
        {/* Testimonial 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 border w-full">
          <p className="text-gray-700">
            "As the concept of Talk Therapy, for free, it provides a good safety net. Especially for those,
            like myself, who A) Can’t afford therapy in real life B) Have at times not been able to leave
            my flat to get help C) Have needed support right now, at a moment’s notice and D) Have been
            too nervous to get support over the phone or face-to-face, online is comfortable. Don’t expect
            it to provide you with solutions, but if you need someone to talk to, even just to clarify your
            own solution, or if you're isolated and just want to connect with someone likeminded, it can help tremendously."
          </p>
          <p className="mt-4 text-sm font-semibold text-gray-600">JEFF ALEN, CALIFORNIA</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 border w-full">
          <p className="text-gray-700">
            "I started using Sahayak to help me with all of my problems that I kept to myself for too long.
            The people on here are kind and very understanding. They don’t rush you to say anything and I feel
            comfortable talking to people about my problems more than I ever did. One of the listeners was going
            through the same thing as me so it is nice to know that you're not the only person going through things.
            I recently became a listener and I love helping people with their problems. It makes me feel happy and it
            also helps in my own wellbeing as it helps me reflect on my own personal problems."
          </p>
          <p className="mt-4 text-sm font-semibold text-gray-600">JULIA MORISON, ENGLAND</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <button className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-medium">
          100% FREE Chat with a Volunteer Listener
        </button>
       
      </div>
    </div>
  );
};

export default TestimonialPage;
