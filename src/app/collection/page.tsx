'use client'

import styles from './page.module.css'
import { ProjectRecord } from '@/components/projectRecord/projectRecord'
import { projects } from '@/content/projects'
import { useState } from 'react'
import { cn } from '@/lib/util'

export default function Page() {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  return (
    <main
      className={cn(
        'flex flex-col items-start justify-start gap-[10px]',
        'mb-[40px]',
        'pt-[calc(11px+1rem)] md:pt-0'
      )}
    >
      {projects.map((project, index) => (
        <ProjectRecord
          project={project}
          key={`${project.title}-${index}`}
          isExpanded={index === expandedIndex}
          onClick={() => setExpandedIndex(index === expandedIndex ? -1 : index)}
        />
      ))}
    </main>
  )
}
