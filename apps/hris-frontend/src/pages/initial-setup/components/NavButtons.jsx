export default function NavButtons({
  onBack,
  onNext,
  nextLabel = "Continue →",
  nextDisabled = false,
  loading = false,
}) {
  const isDisabled = nextDisabled || loading;

  return (
    <div className="flex items-center justify-between mt-8">
      {onBack ? (
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-lg text-sm transition-all hover:bg-gray-50 cursor-pointer"
          style={{
            fontFamily: "system-ui,sans-serif",
            backgroundColor: "#fff",
            color: "#555",
            border: "1px solid #e5e5e5",
          }}
        >
          ← Back
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onNext}
        disabled={isDisabled}
        className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
        style={{
          fontFamily: "system-ui,sans-serif",
          backgroundColor: isDisabled ? "#e5e5e5" : "#111",
          color: isDisabled ? "#999" : "#fff",
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Setting up…" : nextLabel}
      </button>
    </div>
  );
}