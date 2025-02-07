import React, { useState, useEffect } from 'react'

const ProgressiveImage = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  // Our three resolution steps
  const images = ['']

  useEffect(() => {
    // Load all images in sequence
    const loadImages = async () => {
      for (let i = 0; i < images.length; i++) {
        const img = new Image()
        img.src = images[i] || ''

        await new Promise((resolve) => {
          img.onload = () => {
            setLoadedImages((prev) => [...prev, images[i] || ''])
            resolve(void 0)
          }
        })
      }
    }

    loadImages()
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[1000px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        {loadedImages.map((image) => (
          <img
            key={`${image}-${loadedImages.indexOf(image)}`}
            src={image}
            alt={`Resolution ${loadedImages.indexOf(image) + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              image === loadedImages[loadedImages.length - 1]
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressiveImage
