'use client'
import { useState, useEffect } from "react";
import { greetings } from "./greetings";

// Function to add a time-specific greeting
const addTimeSpecificGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
};

// Add the time-specific greeting to the greetings array
greetings.push(addTimeSpecificGreeting());

// Function to get a random greeting
const getRandomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
};

export default function RandomGreeter({greeting}) {
  const [randomGreeting, setRandomGreeting] = useState(greeting || "!");

  useEffect(() => {
    // Set initial greeting
    setRandomGreeting(prev => {
      if (!prev || prev === "!") {
        return getRandomGreeting();
      } else {
        return prev;
      }
    });

    // Define click handler
    const handlePageClick = () => {
      setRandomGreeting(prev => {
        let newGreeting = getRandomGreeting();
        // Make sure the new greeting is different from the old one
        while (newGreeting === prev) {
          newGreeting = getRandomGreeting();
        }
        return newGreeting;
      });
    };
    // Add click event listener to the whole document
    document.addEventListener('click', handlePageClick);

    // Clean up event listener
    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, []);

  return (
    <div>
      {randomGreeting}
    </div>
  );
}
