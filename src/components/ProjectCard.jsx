/**
 * ProjectCard — portfolio grid card with hover overlay
 * Props: src, alt, title, tag, className (extra Tailwind for grid span)
 */
export default function ProjectCard({ src, alt, title, tag, href, className = '' }) {
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`project-card relative rounded-2xl overflow-hidden shadow-lg ${className}`}
    >
      <div className="project-card-overlay" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="project-card-info">
        <p className="font-bold text-lg text-surface leading-tight">{title}</p>
        <p className="text-ochre text-xs uppercase tracking-widest mt-1">{tag}</p>
      </div>
    </Wrapper>
  )
}
