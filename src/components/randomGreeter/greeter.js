'use client'
import { useState, useEffect, useCallback } from 'react'
import { greetings } from './greetings'

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!'"
const SCRAMBLE_DURATION = 1000 // Duration in milliseconds
const FRAMES_PER_SECOND = 30

const addTimeSpecificGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning!'
  if (hour < 18) return 'Good afternoon!'
  return 'Good evening!'
}

greetings.push(addTimeSpecificGreeting())

const getRandomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length)
  return greetings[randomIndex]
}

const getRandomChar = () => {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
}

export default function RandomGreeter() {
  const [displayText, setDisplayText] = useState('!')
  const [isAnimating, setIsAnimating] = useState(false)
  const [targetText, setTargetText] = useState('')

  const scrambleText = useCallback((greetingText) => {
    setIsAnimating(true)
    setTargetText(greetingText)

    const originalLength = greetingText.length
    const framesCount = Math.floor(
      SCRAMBLE_DURATION / (1000 / FRAMES_PER_SECOND)
    )
    let frame = 0

    const animationInterval = setInterval(() => {
      frame++
      const progress = frame / framesCount

      // Generate scrambled text
      let scrambled = ''
      for (let i = 0; i < originalLength; i++) {
        // Keep original character if we've passed its position in the progress
        if (i / originalLength < progress) {
          scrambled += greetingText[i]
        } else if ((i + 1) / originalLength > progress) {
          scrambled += getRandomChar()
        } else {
          // Transition character
          scrambled += Math.random() > 0.5 ? greetingText[i] : getRandomChar()
        }
      }

      setDisplayText(scrambled)

      if (frame >= framesCount) {
        clearInterval(animationInterval)
        setDisplayText(greetingText)
        setIsAnimating(false)
      }
    }, 1000 / FRAMES_PER_SECOND)

    return () => clearInterval(animationInterval)
  }, [])

  useEffect(() => {
    scrambleText(getRandomGreeting())
  }, [])

  useEffect(() => {
    const handlePageClick = () => {
      if (isAnimating) return

      let newGreeting = getRandomGreeting()
      while (newGreeting === targetText) {
        newGreeting = getRandomGreeting()
      }
      scrambleText(newGreeting)
    }

    document.addEventListener('click', handlePageClick)
    return () => document.removeEventListener('click', handlePageClick)
  }, [isAnimating, targetText, displayText, scrambleText])

  return <div>{displayText}</div>
}
