import { Star } from 'lucide-react'

/**
 * TestimonialCard
 * Props: quote, name, role, stars (default 5)
 */
export default function TestimonialCard({ quote, name, role, stars = 5 }) {
  return (
    <div className="card bg-surface p-7 flex flex-col gap-5">
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} fill="#B8860B" className="text-ochre" />
        ))}
      </div>
      <p className="text-ink-light text-sm leading-relaxed italic flex-grow">"{quote}"</p>
      <div className="border-t border-[#d3c4af]/30 pt-4 mt-auto">
        <div className="font-bold text-plum">{name}</div>
        <div className="text-xs text-muted mt-0.5">{role}</div>
      </div>
    </div>
  )
}
