import React from 'react'

const TextBottomBeam = () => {
  return (
    <>
      <div className="max-w-xl h-2 relative z-50 mx-auto mb-3">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-3/4 blur-sm z-20" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-3/4 z-20" />
        <div className="absolute inset-x-35 md:inset-x-50 top-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-[5px] w-1/4 blur-sm z-20" />
        <div className="absolute inset-x-35 md:inset-x-50 top-0 bg-gradient-to-r from-transparent via-green-800 to-transparent h-px w-1/4 z-20" />
      </div>
    </>
  );
}

export default TextBottomBeam