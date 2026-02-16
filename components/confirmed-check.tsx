export function ConfirmedCheck() {
  return (
    <div className="animate-check-scale flex items-center justify-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 md:h-24 md:w-24">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,164,100,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-10 w-10 md:h-12 md:w-12"
          aria-hidden="true"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gold"
          />
        </svg>
      </div>
    </div>
  )
}
