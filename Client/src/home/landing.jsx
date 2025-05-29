import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans relative">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-between"
style={{ backgroundImage: `url('/pexels-anna-nekrashevich-8058547.jpg')` }}

      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center p-6 text-white">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-pink-400 text-2xl"></span> SAHAYAK💗
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="#about" className="hover:underline">
              About us
            </a>
            {/* <a href="#therapy" className="hover:underline">
              Considering Therapy
            </a> */}
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <button className="border px-3 py-1 rounded hover:bg-white hover:text-black">
              SignUp
            </button>
            <button className="border px-3 py-1 rounded hover:bg-white hover:text-black">
              Login
            </button>
            <button className="border px-3 py-1 rounded hover:bg-white hover:text-black">
              Volunteer as a Listener
            </button>
            <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
              Support Sahayak
            </button>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your feelings are valid, and your healing is important.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl">
         Talk to caring, trained volunteers for free, or access professional emotional support anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700">
              <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full">
                100% FREE
              </span>
              Chat with a Volunteer Listener →
            </button>
            {/* <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100">
              <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">
                AFFORDABLE
              </span>
              Get Matched with a Counselor →
            </button> */}
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
<section className="bg-gray-50 text-gray-800 py-20 px-6 text-center">
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
      <img src="https://www.svgrepo.com/show/423160/chat-bubbles.svg" alt="Step 1" className="w-24 h-24 mb-4" />
      <p className="text-sm font-medium">1. Start a chat</p>
    </div>
    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <img src="https://www.svgrepo.com/show/428043/video-conference-meeting.svg" alt="Step 2" className="w-24 h-24 mb-4" />
      <p className="text-sm font-medium">2. Get matched with a listener</p>
    </div>
    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <img src="https://www.svgrepo.com/show/423161/conversation.svg" alt="Step 3" className="w-24 h-24 mb-4" />
      <p className="text-sm font-medium">3. Talk to your listener</p>
    </div>
  </div>

  <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
    <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full">
      100% FREE
    </span>
    Chat with a Volunteer Listener →
  </button>
</section>

    </div>
    
  );
};

export default LandingPage;
