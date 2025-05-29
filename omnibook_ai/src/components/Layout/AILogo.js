import React from "react";

// PUBLIC_INTERFACE
/**
 * AILogo - SVG Icon Component for AI Workflow Manager Template.
 * Features a hexagonal workflow, circuit traces and a dot to convey "AI workflow".
 * Color is theme-adaptive using CSS variable.
 */
function AILogo({ size = 32, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="AI Workflow Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon workflow ring */}
      <polygon
        points="16,3 29,10.5 29,25.5 16,33 3,25.5 3,10.5"
        fill="none"
        stroke="var(--kavia-orange)"
        strokeWidth="2.1"
      />
      {/* Circuit lines */}
      <path
        d="M16 7.5 v6.2"
        stroke="var(--kavia-orange)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M25.2 12.3 l-5.3 3.1"
        stroke="var(--kavia-orange)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M6.8 12.3 l5.3 3.1"
        stroke="var(--kavia-orange)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Central node (AI core) */}
      <circle
        cx="16"
        cy="18"
        r="4"
        fill="var(--kavia-orange)"
        opacity="0.96"
      />
      {/* Inner node */}
      <circle
        cx="16"
        cy="18"
        r="1.45"
        fill="#fff7"
      />
      {/* A subtle workflow arrow */}
      <polyline
        points="14,22 16,26 18,22"
        fill="none"
        stroke="var(--kavia-orange)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default AILogo;
