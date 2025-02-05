'use client'
import { useState, useEffect, useCallback } from 'react'
import { greetings } from './greetings'

const SCRAMBLE_CHARS_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SCRAMBLE_CHARS_LOWER = 'abcdefghijklmnopqrstuvwxyz'
const SCRAMBLE_DURATION = 1000
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

const getRandomChar = (char) => {
  let charPool = []
  if (SCRAMBLE_CHARS_UPPER.includes(char)) {
    charPool = SCRAMBLE_CHARS_UPPER
  } else {
    charPool = SCRAMBLE_CHARS_LOWER
  }

  return charPool[Math.floor(Math.random() * charPool.length)]
}

export default function RandomGreeter() {
  // Store initial greeting in state so it persists across re-renders
  const [initialGreeting] = useState(getRandomGreeting)
  const [displayText, setDisplayText] = useState(' ')
  const [isAnimating, setIsAnimating] = useState(true)
  const [targetText, setTargetText] = useState('')

  const scrambleText = useCallback((greetingText) => {
    setIsAnimating(true)
    setTargetText(greetingText)

    const originalLength = greetingText.length
    const totalFrames = Math.floor(
      SCRAMBLE_DURATION / (1000 / FRAMES_PER_SECOND)
    )
    let frame = 0

    const animationInterval = setInterval(() => {
      frame++
      const frameProgress = frame / totalFrames

      let scrambled = ''
      for (let i = 0; i < originalLength; i++) {
        const charProgress = i / originalLength
        const nextCharProgress = (i + 1) / originalLength

        if (charProgress < frameProgress) {
          scrambled += greetingText[i]
        } else if (nextCharProgress > frameProgress) {
          scrambled += getRandomChar(greetingText[i])
        } else {
          // charProgress is exactly at the frameProgress
          scrambled +=
            Math.random() > 0.5
              ? greetingText[i]
              : getRandomChar(greetingText[i])
        }
      }

      setDisplayText(scrambled)

      if (frame >= totalFrames) {
        clearInterval(animationInterval)
        setDisplayText(greetingText)
        setIsAnimating(false)
      }
    }, 1000 / FRAMES_PER_SECOND)

    return () => clearInterval(animationInterval)
  }, [])

  useEffect(() => {
    scrambleText(initialGreeting)
  }, [initialGreeting, scrambleText])

  useEffect(() => {
    const handlePageClick = () => {
      if (isAnimating) {
        return
      }

      let newGreeting = getRandomGreeting()
      while (newGreeting === targetText) {
        newGreeting = getRandomGreeting()
      }
      scrambleText(newGreeting)
    }

    document.addEventListener('click', handlePageClick)
    return () => document.removeEventListener('click', handlePageClick)
  }, [isAnimating, targetText, scrambleText])

  return (
    <div
      style={{
        whiteSpace: 'pre-wrap',
      }}
    >
      {displayText}
    </div>
  )
}
