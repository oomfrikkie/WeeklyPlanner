type ProgressPieProps = {
  percentage: number;
  size?: number;
};

export default function ProgressPie({
  percentage,
  size = 140,
}: ProgressPieProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke="#e5e5e5"
        strokeWidth="10"
      />

      {/* Progress circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke="var(--accent)"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
        style={{
          transition: "stroke-dashoffset 0.4s ease",
        }}
      />

      {/* Percentage text */}
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="18"
        fill="var(--text)"
        fontWeight="600"
      >
        {percentage}%
      </text>
    </svg>
  );
}
