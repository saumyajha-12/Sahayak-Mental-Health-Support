import React from "react";
import { useState } from "react";

const quotes = [
  {
    text: "No one is perfect that's why pencils have erasers.",
    image: "https://images.saymedia-content.com/.image/t_share/MTc0MjA0NTYyMDYzMTA3OTY0/inspirational-quotes-for-those-affected-by-depression.jpg",
    title: "70+ Inspirational Quotes for People With Depression - Holidappy",
    link: "https://www.bing.com/images/search?view=detailV2&ccid=rNpHfcox&id=B781FEBDAFD0022B7AE7C0E87277B60682CFBACC"
  },
  {
    text: "Sometimes, life will test you but sooner or later you'll realize you're not just a survivor. You're a warrior, and you're stronger than anything life throws your way.",
    image: "https://www.healthyplace.com/sites/default/files/positive-inspirational-quotes-3.jpg",
    title: "Positive Inspirational Quotes for People w...",
    link: "https://www.bing.com/images/search?view=detailV2&ccid=N6sHl9%2fi&id=1F8500C1A5911E9512909C76339BD725DF097DCE"
  },
  {
    text: "Hope is important because it can make the present moment less difficult to bear.",
    image: "https://cutelovequotesforher.org/wp-content/uploads/2015/06/Hopeful-uplifting-quotes.jpg",
    title: "35 Positive Uplifting Quotes f...",
    link: "https://www.bing.com/images/search?view=detailV2&ccid=FAwv4XlU&id=12C4541895BC71D8F0944522729E168A8696694B"
  },
  {
    text: "I found that with depression, one of the most important things you could realize is that you're not alone.",
    image: "https://th.bing.com/th/id/OIP.9Ti5IwRBXxM59bCPrlYnxgHaLH?w=121&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    title: "Quotes To Help With Depression - Hadri...",
    link: "https://th.bing.com/th/id/OIP.9Ti5IwRBXxM59bCPrlYnxgHaLH"
  },
  {
    text: "Depression has nothing to do with having a bad day or being sad.",
    image: "https://hips.hearstapps.com/hmg-prod/images/anxiety-quotes-emma-stone-1674665788.png",
    title: "Encouraging Quotes For Someone Depressed",
    link: "https://www.bing.com/images/search?view=detailV2&ccid=8dH0dUEK&id=C82B07C55904D1C97F2F09D1223383DCD8E78B55"
  },
  {
    text: "Do not tolerate anyone putting you down. It's a sign of their own insecurities, not yours. Walk away.",
    image: "https://cdn4.geckoandfly.com/wp-content/uploads/2016/05/uplifting-inspirational-quotes-20.jpg",
    title: "44 Wonderful Uplifting Quotes For Women - Unlimited Choice",
    link: "https://www.bing.com/images/search?view=detailV2&ccid=NVsGs9hA&id=F2A1C920754069B62AE345109B1ED4236B4D2F7A"
  },
  {
    text: "Anxiety is something that is part of me but it's not who I am.",
    image: "https://th.bing.com/th/id/OIP.yJYdM4lK9Y0c4W0e-Kcg-AHaLH?w=129&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7", // Replace with a correct image URL if available
    title: "Inspirational Quotes For People With An...",
    link: "https://th.bing.com/th/id/OIP.yJYdM4lK9Y0c4W0e-Kcg-AHaLH?w=129&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    text: "Amazing things happen when you distance yourself from negativity.",
    image: "https://th.bing.com/th/id/OIP.Dvyn-hwKrqVHMmNr_EE0CwHaKa?w=115&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    title: "30 Uplifting Inspirational Quotes When You Are About To Give Up",
    link: "https://th.bing.com/th/id/OIP.Dvyn-hwKrqVHMmNr_EE0CwHaKa"
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    image: "https://cdn.powerofpositivity.com/wp-content/uploads/2020/03/15-Uplifting-Quotes-for-Anyone-Who-is-Depressed-to-Think-Positive-1600x900.jpg",
    title: "165 Inspirational Quotes To Keep You Motivate...",
    link: "https://www.bing.com/images/search?view=detailV2&ccid=ba0zVN9w&id=240B02FF69B28BE67A9511C34EB80D40FC153ADE"
  },
  {
    text: "We must accept finite disappointment, but we must never lose infinite hope.",
    image: "https://th.bing.com/th/id/OIP.YxSizspqVn-sFl_M6GHjEQHaEI?w=325&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7", // Replace with a correct image URL if available
    title: "Quotes For People Struggl...",
    link: "https://th.bing.com/th/id/OIP.YxSizspqVn-sFl_M6GHjEQHaEI?w=325&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    text: "Happiness is like jam. You can't spread even a little without getting some on yourself.",
    image: "https://th.bing.com/th/id/OIP.scucd9x2egXiGny88SyiawHaJ_?w=162&h=219&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    title: "Daily Inspirational Quotes For 2024 - Moina Chantal",
    link: "https://th.bing.com/th/id/OIP.scucd9x2egXiGny88SyiawHaJ_"
  },
  {
    text: "It doesn't matter how slow you go, as long as you don't stop.",
    image: "https://th.bing.com/th/id/OIP.C5PQlO17kG6YuwdDNjoWdgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    title: "30 Uplifting Inspirational Quotes When You Are About To Give Up",
    link: "https://th.bing.com/th/id/OIP.C5PQlO17kG6YuwdDNjoWdgHaHa"
  },
  {
    text: "Once you choose hope, anything is possible.",
    image: "https://th.bing.com/th/id/OIP.H12u9BZLwme9AI_NsZRg6AHaEo?w=298&h=193&c=7&r=0&o=5&dpr=1.4&pid=1.7", // Added based on title reference
    title: "15 Uplifting Quotes for Anyone Who is Depressed to Think Positive",
    link: "https://th.bing.com/th/id/OIP.H12u9BZLwme9AI_NsZRg6AHaEo?w=298&h=193&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  }
];

const QuoteGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedQuotes = showAll ? quotes : quotes.slice(0, 3);

  return (
    <div className="p-4 bg-white">
      <h2>Daily Uplifting Quote</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedQuotes.map((quote, index) => (
          <div key={index} className="bg-white rounded shadow hover:shadow-lg transition duration-300">
            <a href={quote.link} target="_blank" rel="noopener noreferrer">
              <img
                src={quote.image}
                alt="Inspirational quote"
                className="w-full h-48 object-cover rounded-t"
              />
            </a>
            <div className="p-2">
              <p className="text-sm italic mb-2">{quote.text}</p>
              <p className="text-xs text-gray-600">{quote.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      <footer style={styles.footer}>
        <p>You're not alone. Reach out. Talk. Breathe. Heal.</p>
      </footer>
    </div>
    
  );
};
const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    background: '#f0f4f8',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    paddingBottom: '20px',
  },
  section: {
    background: '#ffffff',
    padding: '15px',
    margin: '15px 0',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '0.9em',
    color: '#666',
  },
  quote: {
    fontStyle: 'italic',
    color: '#555',
  },
};
export default QuoteGrid;
