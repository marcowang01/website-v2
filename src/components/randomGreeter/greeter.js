'use client'
import { useState, useEffect } from "react";
// List of greetings
const greetings = [
  "Hi there!",
  "Hey!",
  "Greetings!",
  "Howdy!",
  "Hello!",
  "What's up!",
  "Aloha!",
  "Hello there!",
  "Hi!",
  "Nice to meet you!",
  "Welcome!",
];

// Function to add a time-specific greeting
const addTimeSpecificGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

// Add the time-specific greeting to the greetings array
greetings.push(addTimeSpecificGreeting());

// Function to get a random greeting
const getRandomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
};

export default function RandomGreeter() {
  const [randomGreeting, setRandomGreeting] = useState(' ');

  useEffect(() => {
    setRandomGreeting(getRandomGreeting());
  }, []);

  return (
    <>
      {randomGreeting}
    </>
  );
}
