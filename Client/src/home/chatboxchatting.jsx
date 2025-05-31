import React from 'react'
import Chatbot from '../components/Chatbot'
const Chatboxchatting = () => {
  return (
    <div className='bg-white'>
          <div className="flex justify-center  bg-white">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Need Someone to Talk To?</h3>
          <p className="text-gray-600 mb-4">Start a conversation with the Sahayak Bot. It's always there to listen you.</p>
          <button
            onClick={() => window.location.href = '/chatbot'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Chat with Sahayak Bot 🤖
          </button>
        </div>
      </div>
    </div>
  )
}
export default Chatboxchatting;