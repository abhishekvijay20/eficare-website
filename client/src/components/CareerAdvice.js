import React, { useEffect, useState } from 'react';

const adviceList = [
  {
    quote: "The only way to do great work is to love what you do and keep learning.",
    writer: "Steve Jobs"
  },
  {
    quote: "Use analytics to measure and refine your strategies; what gets measured gets managed.",
    writer: ""
  },
  {
    quote: "People buy from people they like and trust. Focus on building genuine relationships rather than just pushing a sale.",
    writer: "Zig Ziglar"
  },
  {
    quote: "Sell the problem you solve, not the product you make.",
    writer: ""
  },
  {
    quote: "The fortune is in the follow-up.",
    writer: "Jim Rohn"
  },
  {
    quote: "Growth and comfort do not coexist.",
    writer: "Ginni Rometty"
  },
  {
    quote: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
    writer: "Seth Godin"
  },
  {
    quote: "The biggest room in the world is the room for improvement.",
    writer: "Helmut Schmidt"
  },
  {
    quote: "The strength of the team is each individual member. The strength of each member is the team.",
    writer: "Phil Jackson"
  },
  {
    quote: "Your network is your net worth.",
    writer: "Porter Gale"
  },
  {
    quote: "Efficiency is doing things right; effectiveness is doing the right things.",
    writer: "Peter Drucker"
  },
  {
    quote: "The best marketing doesn't feel like marketing.",
    writer: "Tom Fishburne"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    writer: "Franklin D. Roosevelt"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    writer: "Albert Schweitzer"
  },
  {
    quote: "You don't have to be great to start, but you have to start to be great.",
    writer: "Zig Ziglar"
  },
  {
    quote: "Adapt or perish, now as ever, is nature's inexorable imperative.",
    writer: "H.G. Wells"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    writer: "Walt Disney"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    writer: "Sam Levenson"
  },
  {
    quote: "Quality means doing it right when no one is looking.",
    writer: "Henry Ford"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    writer: "Steve Jobs"
  }
];

const CareerAdvice = () => {
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdviceIndex((prevIndex) => (prevIndex + 1) % adviceList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="careerAdvice" className="w-full h-[600px] flex items-center justify-center bg-white">
      <div className="w-full max-w-3xl p-8 mx-8 bg-white rounded-mini  transition-opacity duration-700 ease-in-out my-24">
        <p className="text-6xl md:text-2xl sm:text-lg text-darkslategray font-averia-libre italic mb-4">
          "{adviceList[currentAdviceIndex].quote}"
        </p>
        <p className="text-lg sm:text-mini text-dimgray font-outfit text-right">
          - {adviceList[currentAdviceIndex].writer || "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default CareerAdvice;
