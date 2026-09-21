// PasswordStrength.jsx
export default function PasswordStrength({ password }) {
  if (!password) return null;
  const checks = [
    { label:"8+ characters",       pass: password.length >= 8        },
    { label:"Uppercase letter",     pass: /[A-Z]/.test(password)      },
    { label:"Lowercase letter",     pass: /[a-z]/.test(password)      },
    { label:"Number",               pass: /[0-9]/.test(password)      },
    { label:"Special character",    pass: /[^A-Za-z0-9]/.test(password) },
  ];
  const score = checks.filter(c => c.pass).length;
  const levels = ["", "Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
  const colors = ["", "#dc2626", "#dc2626", "#d97706", "#2563eb", "#16a34a"];

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="flex-1 h-1 rounded-full transition-all"
            style={{ backgroundColor: i <= score ? colors[score] : "#e5e7eb" }}/>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {checks.map(c => (
            <span key={c.label} className="text-xs" style={{ fontFamily:"system-ui,sans-serif", color: c.pass ? "#16a34a" : "#9ca3af" }}>
              {c.pass ? "✓" : "○"} {c.label}
            </span>
          ))}
        </div>
        {score > 0 && (
          <span className="text-xs font-medium ml-2 whitespace-nowrap" style={{ fontFamily:"system-ui,sans-serif", color: colors[score] }}>
            {levels[score]}
          </span>
        )}
      </div>
    </div>
  );
}