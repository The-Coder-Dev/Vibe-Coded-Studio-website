'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import type { Project } from '@/types/project'
import ProjectCard from '@/components/projects/ProjectCard'

interface ProjectsClientProps {
  projects: Project[]
  categories: string[]
}

const ProjectsClient = ({ projects, categories }: ProjectsClientProps) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory
      const matchesQuery =
        query === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [projects, activeCategory, query])

  return (
    <>
      {/* Filter + Search row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 flex-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-foreground text-background'
                  : 'border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-shrink-0">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-full border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20 w-full sm:w-52 transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + query}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-lg font-medium text-foreground mb-2">No projects found</p>
              <p className="text-sm text-muted-foreground">Try a different filter or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  priority={i < 2}
                  index={i}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default ProjectsClient
