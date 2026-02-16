export function ConfirmedCheck() {
  return (
    <div className="animate-check-scale flex items-center justify-center">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/30 md:h-28 md:w-28">
        <div className="absolute inset-1 rounded-full border border-gold/10" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-12 w-12 md:h-14 md:w-14"
          aria-hidden="true"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gold"
          />
        </svg>
      </div>
    </div>
  )
}
