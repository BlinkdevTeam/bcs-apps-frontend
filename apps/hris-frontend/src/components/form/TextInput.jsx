/**
 * TextInput
 */

import React from "react";
import clsx from "clsx";

export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  type = "text",
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-xs uppercase tracking-widest text-gray-500 mb-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          "w-full rounded-md px-3 py-2.5 text-sm bg-white text-gray-900 border placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400",
          error ? "border-red-400" : "border-gray-200",
          disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
          className
        )}
        style={{ fontFamily: "system-ui,sans-serif" }}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}