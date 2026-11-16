import "./EarlyBirdOffer.css";

export default function EarlyBirdOffer() {
  return (
    <aside className="early-bird-offer" aria-label="Early bird offer: save £100 per night, heated pool included free">
      <span className="early-bird-offer__badge">Early Bird Offer</span>
      <p className="early-bird-offer__saving">
        <span>Save</span>{" "}<strong>£100</strong>{" "}<span>per night</span>
      </p>
      <div className="early-bird-offer__pool">
        <svg
          width="20"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 21c-5-5 5-7 0-12S5 3 5 2M12 21c-5-5 5-7 0-12s0-6 0-7M19 21c-5-5 5-7 0-12s0-6 0-7" />
        </svg>
        <p>Heated pool<br />included free</p>
      </div>
    </aside>
  );
}
