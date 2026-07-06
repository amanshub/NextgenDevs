import { CheckCircle, Minus } from 'lucide-react'

/**
 * PriceCard — used on Home and Pricing pages
 * Props: tier, price, period, subtitle, features, ctaLabel, onCta,
 *        featured (bool), badge (string label)
 */
export default function PriceCard({
  tier,
  price,
  period = '',
  subtitle,
  features = [],
  ctaLabel,
  onCta,
  featured = false,
  badge = null,
}) {
  const base = featured
    ? 'bg-plum border-4 border-ochre text-surface shadow-2xl scale-[1.03] z-10'
    : 'bg-surface border border-[#d3c4af]/40 text-ink shadow-sm'

  return (
    <div className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${base}`}>
      {badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ochre text-plum text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
          {badge}
        </span>
      )}

      <div className="mb-7">
        <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${featured ? 'text-surface/60' : 'text-ink-light'}`}>
          {tier}
        </div>
        <div className={`text-3xl font-extrabold ${featured ? 'text-surface' : 'text-plum'}`}>
          {price}
          {period && <span className={`text-base font-normal ml-1 ${featured ? 'text-surface/70' : 'text-ink-light'}`}>{period}</span>}
        </div>
        {subtitle && (
          <div className={`text-sm mt-1 ${featured ? 'text-surface/70' : 'text-ink-light'}`}>{subtitle}</div>
        )}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className={`flex items-start gap-2.5 text-sm ${f.disabled ? 'opacity-40' : ''}`}>
            {f.disabled
              ? <Minus size={16} className={`${featured ? 'text-surface/40' : 'text-ink-light/40'} shrink-0 mt-0.5`} />
              : <CheckCircle size={16} className={`${featured ? 'text-ochre' : 'text-plum'} shrink-0 mt-0.5`} />
            }
            <span className={featured ? 'text-surface/90' : 'text-ink'}>{f.text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCta}
        className={`w-full font-bold py-3.5 rounded-xl transition-all duration-200 active:scale-95 ${
          featured
            ? 'bg-ochre text-plum hover:brightness-110 shadow-lg'
            : 'border-2 border-plum text-plum hover:bg-plum hover:text-surface'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  )
}
