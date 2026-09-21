import { useState } from "react";

import Field from "./Field";
import NavButtons from "./NavButtons";

import { TOTAL_STEPS, INDUSTRIES, COMPANY_SIZES } from "../../../data/compData";

export default function StepCompany({ data, onChange, onNext, onBack }) {
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!data.companyName.trim())  e.companyName = "Company name is required.";
    if (!data.industry)            e.industry    = "Please select an industry.";
    if (!data.size)                e.size        = "Please select a company size.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

    function handleNext() { if (validate()) onNext(); }
    
  const lightInputCls = "w-full px-4 py-3 rounded-lg text-sm text-black placeholder-gray-400 outline-none transition-all";

function lightInputStyle(error) {
  return {
    fontFamily: "system-ui,sans-serif",
    backgroundColor: "#ffffff",
    border: `1px solid ${error ? "#dc262666" : "#d1d5db"}`,
  };
}

return (
  <div>
    <div className="mb-8">
      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>Step 1 of {TOTAL_STEPS}</p>
      <h2 className="text-2xl font-normal text-black" style={{ letterSpacing: "-0.02em" }}>Your company</h2>
      <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: "system-ui,sans-serif" }}>This information helps personalise your HRIS.</p>
    </div>

    <div className="space-y-5">
      <Field label="Company Name" error={errors.companyName}>
        <input className={lightInputCls} style={lightInputStyle(errors.companyName)}
          placeholder="e.g. Acme Corporation" autoFocus
          value={data.companyName} onChange={e => onChange("companyName", e.target.value)}/>
      </Field>

      <Field label="Industry" error={errors.industry}>
        <input
          type="text"
          className={`${lightInputCls} cursor-text`}
          style={lightInputStyle(errors.industry)}
          value={data.industry}
          onChange={e => onChange("industry", e.target.value)}
          placeholder="Enter your industry"
        />
      </Field>

      <Field label="Company Size" error={errors.size}>
        <div className="grid grid-cols-2 gap-2">
          {COMPANY_SIZES.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange("size", s)}
              className="px-3 py-2.5 rounded-lg text-sm text-left transition-all hover:opacity-80 cursor-pointer"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: data.size === s ? "#000" : "#f8f9fa",
                color: data.size === s ? "#fff" : "#555",
                border: `1px solid ${
                  data.size === s ? "transparent" : "#e5e7eb"
                }`,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>
    </div>

    <NavButtons onBack={onBack} onNext={handleNext}/>
  </div>
);
}