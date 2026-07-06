/**
 * ServiceCard — used on Home and Services pages
 * Props: icon (lucide component), title, description, featured (bool)
 */
export default function ServiceCard({ icon: Icon, title, description, featured = false }) {
  return (
    <div className={`card p-8 flex gap-5 items-start ${featured ? 'border-ochre/40 border-2' : ''}`}>
      <div className="bg-plum p-3.5 rounded-xl shrink-0 shadow-md">
        <Icon size={22} className="text-ochre" strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="text-plum font-bold text-lg mb-2">{title}</h3>
        <p className="text-ink-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
