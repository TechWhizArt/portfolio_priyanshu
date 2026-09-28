import React from 'react'

export default function FlapFlapLogo() {
  return (
    <>
      <style>{`

        @font-face {
        font-family: 'MyRosyFont';
        src: url('/fonts/pixel.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        }
        .flapflap-logo {
          display: inline-flex;
          align-items: baseline;

          font-family: 'MyRosyFont';
          font-size: 28px;
          font-weight: 700;
          line-height: 1;

          color:#989853;
        }
        
        .flapflap-p {
          display: inline-block;
          transform-origin: 50% 100%;
          animation: flapflap-bounce 1s ease-in-out infinite;
        }

        @keyframes flapflap-bounce {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          25% {
            transform: translateY(-8px) rotate(-5deg);
          }

          50% {
            transform: translateY(0) rotate(0deg);
          }

          65% {
            transform: translateY(-3px) rotate(3deg);
          }

          80% {
            transform: translateY(0) rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flapflap-p {
            animation: none;
          }
        }
      `}</style>

      <div className="flapflap-logo" aria-label="FlapFlap">
        <span>FlapFla</span>
        <span className="flapflap-p">p</span>
      </div>
    </>
  )
}