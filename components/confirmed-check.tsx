export function ConfirmedCheck() {
  return (
    <div className="animate-check-scale flex items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 md:h-24 md:w-24">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-10 w-10 md:h-12 md:w-12"
          aria-hidden="true"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          />
        </svg>
      </div>
    </div>
  )
}
