import React from 'react'

function WaveBottomSVG() {
  return (
    <>
      {/* ── WAVE DIVIDER ── */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
  <svg
    viewBox="0 0 1440 80"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="w-full h-16 lg:h-20"
  >
    <path
      d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
      fill="white"
    />
  </svg>
</div>
    </>
  )
}

export default WaveBottomSVG
