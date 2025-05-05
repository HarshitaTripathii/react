import React from 'react'

function Card({musicName, year}) {
  return (
    <div class="flex flex-row justify-center items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="/images.jpeg" />
        </div>
        <div class="flex flex-col items-center md:items-start">
          <span class="text-2xl font-medium">{musicName}</span>
          <span class="font-medium text-sky-900">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>{year}</span>
          </span>
        </div>
      </div>
  )
}

export default Card
