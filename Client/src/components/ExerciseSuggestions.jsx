// import React from "react";

// const exerciseData = [
//   {
//     condition: "Anxiety",
//     color: "from-blue-100 to-blue-200",
//     exercises: [
//       {
//         name: "Deep Breathing",
//         benefit: "Reduces heart rate and calms the nervous system.",
//       },
//       {
//         name: "Yoga (Child's Pose, Cat-Cow)",
//         benefit: "Relaxes the mind and releases physical tension.",
//       },
//       {
//         name: "Walking in Nature",
//         benefit: "Grounds your senses and reduces anxious thoughts.",
//       },
//     ],
//   },
//   {
//     condition: "Depression",
//     color: "from-purple-100 to-purple-200",
//     exercises: [
//       {
//         name: "Morning Stretch Routine",
//         benefit: "Improves circulation and gets you out of bed.",
//       },
//       {
//         name: "Jogging or Cycling",
//         benefit: "Boosts mood with endorphins and promotes energy.",
//       },
//       {
//         name: "Dancing to Music",
//         benefit: "Lifts mood through rhythm and expression.",
//       },
//     ],
//   },
//   {
//     condition: "Stress",
//     color: "from-green-100 to-green-200",
//     exercises: [
//       {
//         name: "Progressive Muscle Relaxation",
//         benefit: "Releases built-up muscle tension.",
//       },
//       {
//         name: "Tai Chi or Slow Movement",
//         benefit: "Promotes mindfulness and physical calm.",
//       },
//       {
//         name: "Light Stretching",
//         benefit: "Eases stiffness and helps relax your body.",
//       },
//     ],
//   },
// ];

// const ExerciseSuggestionsPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
//           🧘‍♀️ Exercises to Uplift Your Mind & Body
//         </h1>
//         <p className="text-center text-gray-600 mb-10 text-lg">
//           If you're feeling overwhelmed, anxious, or low, gentle movement and mindful exercise can help. Here are some exercises tailored to your emotional needs:
//         </p>

//         <div className="grid gap-8 md:grid-cols-2">
//           {exerciseData.map((section, idx) => (
//             <div
//               key={idx}
//               className={`bg-gradient-to-br ${section.color} p-6 rounded-2xl shadow-lg`}
//             >
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 💬 {section.condition}
//               </h2>
//               <ul className="space-y-4">
//                 {section.exercises.map((ex, exIdx) => (
//                   <li
//                     key={exIdx}
//                     className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow"
//                   >
//                     <h3 className="font-semibold text-gray-700">{ex.name}</h3>
//                     <p className="text-sm text-gray-500">{ex.benefit}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600 text-sm italic">
//             Remember, even small steps matter. Be kind to yourself. ❤️
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExerciseSuggestionsPage;

import React from "react";

const ExerciseSuggestionsPage = () => {
  return (
    <div className="bg-white py-20 px-6 text-gray-800">
        <h1 className="text-3xl font-semibold text-center mb-10">
          Exercise Suggestions for Mental Well-being
        </h1>

        {/* Mental Health Specific Exercises */}
        <section>

          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>
              <strong>Anxiety:</strong> Yoga and deep breathing to calm the mind and reduce stress.
            </li>
            <li>
              <strong>Depression:</strong> Moderate aerobic exercises like walking or cycling boost mood-enhancing endorphins.
            </li>
            <li>
              <strong>Stress:</strong> Tai Chi or stretching to improve relaxation and body awareness.
            </li>
            <li>
              <strong>PTSD:</strong> Grounding exercises, walking in nature, and mindful movement help with emotional regulation.
            </li>
            <li>
              <strong>Sleep Disorders:</strong> Gentle evening stretches and light walking improve sleep quality.
            </li>
          </ul>
        </section>

        {/* General Exercises Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            General Exercise Tips to Uplift Your Mental Health
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Take a 5-minute stretch break every hour</li>
            <li>Go for a walk after meals</li>
            <li>Try 10 push-ups in the morning</li>
            <li>Practice mindful breathing exercises daily</li>
            <li>Try light jogging or dancing to your favorite music</li>
          </ul>
        </section>

        {/* More Information Dropdown */}
        <details className="mt-8 bg-white rounded-xl shadow-md p-4 border border-gray-300">
          <summary className="text-lg font-semibold cursor-pointer text-indigo-800">
            💡 More Information: How to Be More Physically Active for Your Mental Health
          </summary>
          <div className="space-y-4 text-sm text-gray-700 mt-4">
            <div>
              <strong>1. Find a form of physical activity you love</strong>
              <p>
                You're more likely to stay active if you enjoy the movement. Whether it's football, hiking, or dancing, do what makes you feel alive.
              </p>
            </div>

            <div>
              <strong>2. Start small and build up over time</strong>
              <p>
                Begin with just 10 minutes a day. Gradually increase by 10 minutes each week until you're moving 30 minutes a day.
              </p>
            </div>

            <div>
              <strong>3. Swap inactivity with activity</strong>
              <p>
                Make small changes — like walking during calls or using a standing desk — to turn daily habits into active ones.
              </p>
            </div>

            <div>
              <strong>4. Set yourself a goal</strong>
              <p>
                Focus on the habit, not the outcome. A goal like "exercise 3 times a week" works better than "lose 5 pounds."
              </p>
            </div>

            <div>
              <strong>5. Move more at home</strong>
              <p>
                Do stretches while working, walk after meals, or simply get up and move every hour to avoid long periods of stillness.
              </p>
            </div>

            <div>
              <strong>6. Get your family or friends involved</strong>
              <p>
                Moving with others can keep you motivated. Choose someone with a similar fitness level to stay encouraged and consistent.
              </p>
            </div>
          </div>
        </details>
      </div>
    
  );
};

export default ExerciseSuggestionsPage;
