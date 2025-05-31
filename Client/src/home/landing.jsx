import React from 'react';
import { Link } from 'react-router-dom';
//import download from '../images/download.png';



const LandingPage = () => {
  return (
    <div className="font-sans relative bg-white">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-between"
        style={{ backgroundImage: "url('/bglanding.png')",height: '100vh' }}

      >
      {<div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> }

        {/* <img src="/bglanding.jpg" alt="test" className="w-64 h-64" /> */}



        {/* Header */}
        <header className="relative z-10 flex justify-between items-center p-6 text-white">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-pink-400 text-2xl"></span> 
             <span className="text-brown-700 font-extrabold font-serif text-3xl text-[#5C3317]">SAHAYAK💗</span>
          </div>
          <nav className="flex flex-wrap gap-4 text-large font-medium">
          <a href="#about">
  <button className="border px-3 py-1 rounded hover:bg-white hover:text-[#5C3317] text-[#5C3317]">
   About
  </button>
</a>      
            <a href="#contact">
              <button className="border px-3 py-1 rounded hover:bg-white hover:text-[#5C3317] text-[#5C3317]">
    Contact
  </button>
</a>    
            <Link to="/register">
            <button className="border px-3 py-1 rounded hover:bg-white hover:text-[#5C3317] text-[#5C3317]">
                SignUp
              </button>
            </Link>

            <Link to="/login">
              <button className="border px-3 py-1 rounded hover:bg-white hover:text-[#5C3317] text-[#5C3317]">
                Login
              </button>
            </Link>



            <Link to="/chat">
             <button className="border px-3 py-1 rounded hover:bg-white hover:text-[#5C3317] text-[#5C3317]">
                Chat with Counselor
              </button>
            </Link>
            <Link to="/volunteer">
             <button className="border px-3 py-1 rounded hover:bg-white hover:text-[#5C3317] text-[#5C3317]">
                Support Sahayak
              </button>
            </Link>

          </nav>
        </header>

        {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center text-black px-4 py-20 font-bold text-lg md:text-xl lg:text-2xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your feelings are valid, and your healing is important.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl font-serif text-black-700">
  Talk to caring, trained volunteers for free, or access professional emotional support anytime.
</p>

          <div className="flex flex-col sm:flex-row gap-4">
           <Link to="/chat" style={{ textDecoration: 'none' }}>
           <button className="flex items-center gap-2 bg-[#5C3317] text-white px-5 py-2 rounded-lg hover:bg-[#4b2813] no-underline">
  <span className="text-xs bg-white text-[#5C3317] px-2 py-0.5 rounded-full">
                  100% FREE
                </span>
                Chat with a Volunteer Listener →
              </button>
            </Link>

            
          </div>


        </main>

        {/* Social Icons */}
        {/* Social Icons */}
        {/* <div className="fixed top-1/3 right-2 z-50 space-y-3">
  {socialPlatforms.map(({ Icon, link }, index) => (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
    >
      <Icon className="w-5 h-5" />
    </a>
  ))}
</div> */}

      </div>

      {/* Info Section */}
      <section className="bg-white text-gray-800 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-3xl mx-auto mb-6">
          Free emotional support for those moments when you just need somebody to talk to.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-16 leading-relaxed">
          We’ve all experienced moments when we didn’t feel like ourselves. Sometimes, all we truly need is someone to talk to—someone who listens without judgment, with empathy and care. But finding that kind of support within our own circles isn’t always easy.
          That’s where Sahayak comes in. We connect you with trained, compassionate volunteers who are here to listen, support, and simply be there for you. Our approach is backed by evidence and peer-reviewed practices, ensuring you receive care that’s not only kind but trusted. </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-gray-900">
              89<span className="text-purple-600">%</span>
              <span className="text-base font-normal ml-1 text-gray-600">of users</span>
            </p>
            <hr className="w-12 border-purple-600 mt-2 mb-4 mx-auto" />
            <p className="text-gray-600 text-sm">
              feel meaningfully better after talking to a listener.
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">
              76<span className="text-purple-600">%</span>
              <span className="text-base font-normal ml-1 text-gray-600">of people</span>
            </p>
            <hr className="w-12 border-purple-600 mt-2 mb-4 mx-auto" />
            <p className="text-gray-600 text-sm">
              believe listeners are able to help people with mental health struggles.
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">
              80<span className="text-purple-600">%</span>
              <span className="text-base font-normal ml-1 text-gray-600">of users</span>
            </p>
            <hr className="w-12 border-purple-600 mt-2 mb-4 mx-auto" />
            <p className="text-gray-600 text-sm">
              indicated that they would happily recommend it to others.
            </p>
          </div>
        </div>
      </section>
      {/* 3 Simple Steps Section */}
      <section className="bg-white text-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">3 Simple Steps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          The most straight-forward and intuitive experience you can imagine.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          You don’t need to download another app or create yet another account. With Sahayak, getting emotional support is as simple as pressing “Chat.”

          We work seamlessly with the tools you already use—WhatsApp, Facebook Messenger, or Telegram. Your messages are received anonymously by our trained active listeners, ensuring a smooth, secure, and completely frictionless experience.

          But if you’re looking for something more—something deeper—Sahayak offers that too.
          By signing up, you’ll unlock personalized insights based on your emotional patterns and conversations. It’s a safe, supportive space to explore your feelings, build mental resilience, and track your growth over time.

          Understand yourself better, one day at a time—with Sahayak.

        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-5xl mx-auto mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <img src="https://th.bing.com/th/id/OIP.DNkzbFxoo1Ev5LkFyCrwbAHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="Step 1" className="w-24 h-24 mb-4" />
            <p className="text-sm font-medium">1. Start a chat</p>
          </div>
           <div className="flex flex-col items-center">
            <img src="data:image/jpeg;base64,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" alt="Step 3" className="w-24 h-24 mb-4" />
            <p className="text-sm font-medium">2.Connect with Volunteers </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <img src="data:image/jpeg;base64,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" alt="Step 2" className="w-24 h-24 mb-4" />
            <p className="text-sm font-medium">3. Talk to your listener</p>
          </div>
          {/* Step 3 */}
         
        </div>


<div className="flex flex-col sm:flex-row gap-4">
  <Link to="/chat">
    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700">
      <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full">
        100% FREE
      </span>
      Chat with a Volunteer Listener →
    </button>
  </Link>

  {/* Uncomment this section if needed
  <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100">
    <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">
      AFFORDABLE
    </span>
    Get Matched with a Counselor →
  </button>
  */}
</div>

      </section>

    </div>

  );
};

export default LandingPage;
