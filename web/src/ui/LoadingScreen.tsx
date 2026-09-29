import { useEffect, useRef, useState } from 'react'
import { useProgress } from '@react-three/drei'

export default function LoadingScreen() {
  const { progress } = useProgress()

  const [hiding, setHiding] = useState(false)
  const [removed, setRemoved] = useState(false)

  const displayed = useRef(0)
  const [value, setValue] = useState(0)

  /*
   * Smooth the reported loading progress.
   *
   * Drei's progress can jump:
   *
   * 0 → 33 → 33 → 66 → 100
   *
   * Instead of showing those jumps directly, the UI
   * gradually approaches the real value.
   */
  useEffect(() => {
    const target = Math.min(Math.max(progress, 0), 100)

    let frame = 0

    const animate = () => {
      const current = displayed.current

      /*
       * Move toward the real loading progress.
       * Faster when far away, slower when close.
       */
      const difference = target - current

      if (Math.abs(difference) < 0.15) {
        displayed.current = target
      } else {
        displayed.current += difference * 0.08
      }

      const next = Math.round(displayed.current)

      setValue((previous) =>
        previous === next ? previous : next
      )

      if (Math.abs(target - displayed.current) > 0.15) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame)
  }, [progress])

  /*
   * Only hide when the REAL loading manager reaches 100%.
   */
  useEffect(() => {
    if (progress < 100) return

    /*
     * Make sure the UI has enough time to visually reach 100%.
     */
    const finish = setTimeout(() => {
      displayed.current = 100
      setValue(100)
    }, 150)

    const hide = setTimeout(() => {
      setHiding(true)
    }, 850)

    const remove = setTimeout(() => {
      setRemoved(true)
    }, 1500)

    return () => {
      clearTimeout(finish)
      clearTimeout(hide)
      clearTimeout(remove)
    }
  }, [progress])

  if (removed) return null

  const R = 34
  const C = 2 * Math.PI * R
  const offset = C * (1 - value / 100)

  return (
    <>
      <style>{`

        /* =========================
           SCREEN
        ========================= */

        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 999999;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #080808;

          opacity: 1;

          transition:
            opacity 0.65s cubic-bezier(.4,0,.2,1);

          overflow: hidden;

          will-change: opacity;
        }

        .loading-screen.hidden {
          opacity: 0;
          pointer-events: none;
        }


        /* =========================
           MAIN OBJECT
        ========================= */

        .loading-box {
          position: relative;

          width: 170px;
          height: 190px;

          display: flex;
          align-items: center;
          justify-content: center;

          animation:
            loaderFloat 4s ease-in-out infinite;

          will-change: transform;
        }

        @keyframes loaderFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }


        /* =========================
           GLOW
        ========================= */

        .loading-glow {
          position: absolute;

          width: 100px;
          height: 100px;

          border-radius: 50%;

          background: rgba(255,255,255,0.04);

          filter: blur(18px);

          animation:
            glowPulse 2.5s ease-in-out infinite;
        }

        @keyframes glowPulse {

          0%,
          100% {
            transform: scale(.85);
            opacity: .4;
          }

          50% {
            transform: scale(1.15);
            opacity: .8;
          }
        }


        /* =========================
           MAIN RING
        ========================= */

        .loading-ring {

          position: relative;

          width: 80px;
          height: 80px;

          z-index: 3;
        }

        .loading-ring svg {

          width: 100%;
          height: 100%;

          transform: rotate(-90deg);
        }

        .loading-track {

          fill: none;

          stroke:
            rgba(255,255,255,0.08);

          stroke-width: 2;
        }

        .loading-progress {

          fill: none;

          stroke: white;

          stroke-width: 2.8;

          stroke-linecap: round;

          transition:
            stroke-dashoffset .15s ease;
        }


        /* =========================
           CENTER
        ========================= */

        .loading-center {

          position: absolute;

          inset: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          z-index: 5;
        }

        .loading-number {

          color: white;

          font-family: monospace;

          font-size: 15px;

          letter-spacing: -1px;

          animation:
            numberPulse 2s ease-in-out infinite;
        }

        @keyframes numberPulse {

          0%,
          100% {
            opacity: .75;
          }

          50% {
            opacity: 1;
          }
        }


        /* =========================
           ORBIT 1
        ========================= */

        .orbit-one {

          position: absolute;

          width: 108px;
          height: 108px;

          border-radius: 50%;

          border:
            1px solid
            rgba(255,255,255,0.09);

          animation:
            orbitClockwise 5s linear infinite;

          will-change: transform;
        }

        .orbit-one::after {

          content: '';

          position: absolute;

          width: 5px;
          height: 5px;

          top: -2px;
          left: 50%;

          border-radius: 50%;

          background: white;

          box-shadow:
            0 0 8px white,
            0 0 18px rgba(255,255,255,.5);
        }

        @keyframes orbitClockwise {

          to {
            transform: rotate(360deg);
          }
        }


        /* =========================
           ORBIT 2
        ========================= */

        .orbit-two {

          position: absolute;

          width: 132px;
          height: 132px;

          border-radius: 50%;

          border:
            1px dashed
            rgba(255,255,255,0.07);

          animation:
            orbitCounter 8s linear infinite;

          will-change: transform;
        }

        .orbit-two::after {

          content: '';

          position: absolute;

          width: 3px;
          height: 3px;

          right: 12px;
          bottom: 20px;

          border-radius: 50%;

          background: rgba(255,255,255,.7);

          box-shadow:
            0 0 8px white;
        }

        @keyframes orbitCounter {

          to {
            transform: rotate(-360deg);
          }
        }


        /* =========================
           SCAN LINE
        ========================= */

        .scan-line {

          position: absolute;

          width: 74px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.7),
              transparent
            );

          opacity: .35;

          z-index: 6;

          animation:
            scan 2.5s ease-in-out infinite;
        }

        @keyframes scan {

          0% {
            transform:
              translateY(-36px);

            opacity: 0;
          }

          20% {
            opacity: .5;
          }

          50% {
            opacity: .7;
          }

          80% {
            opacity: .5;
          }

          100% {
            transform:
              translateY(36px);

            opacity: 0;
          }
        }


        /* =========================
           PARTICLES
        ========================= */

        .particle {

          position: absolute;

          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: white;

          opacity: .2;

          animation:
            particleMove
            3s ease-in-out infinite;

          will-change: transform, opacity;
        }

        .p1 {
          top: 25px;
          left: 35px;
        }

        .p2 {
          top: 50px;
          right: 20px;
          animation-delay: -.7s;
        }

        .p3 {
          bottom: 45px;
          left: 15px;
          animation-delay: -1.4s;
        }

        .p4 {
          bottom: 20px;
          right: 40px;
          animation-delay: -2s;
        }

        .p5 {
          top: 10px;
          right: 65px;
          animation-delay: -2.5s;
        }

        @keyframes particleMove {

          0%,
          100% {
            transform:
              translate(0,0)
              scale(.7);

            opacity: .15;
          }

          50% {
            transform:
              translate(5px,-10px)
              scale(1.3);

            opacity: .65;
          }
        }


        /* =========================
           LABEL
        ========================= */

        .loading-label {

          position: absolute;

          top: 145px;
          left: 50%;

          transform:
            translateX(-50%);

          color:
            rgba(255,255,255,.45);

          font-family: monospace;

          font-size: 8px;

          letter-spacing: 4px;

          white-space: nowrap;

          animation:
            labelPulse 2s ease-in-out infinite;
        }

        @keyframes labelPulse {

          0%,
          100% {
            opacity: .35;
          }

          50% {
            opacity: .75;
          }
        }


        /* =========================
           LOADING DOTS
        ========================= */

        .loading-dots::after {

          content: '';

          animation:
            dots 1.5s steps(4,end) infinite;
        }

        @keyframes dots {

          0% {
            content: '';
          }

          25% {
            content: '.';
          }

          50% {
            content: '..';
          }

          75% {
            content: '...';
          }

          100% {
            content: '';
          }
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .loading-box {
            transform: scale(.9);
          }

        }


        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {

          .loading-box,
          .loading-glow,
          .orbit-one,
          .orbit-two,
          .scan-line,
          .particle,
          .loading-label,
          .loading-number {
            animation: none;
          }

        }

      `}</style>

      <div
        className={`loading-screen${hiding ? ' hidden' : ''}`}
      >
        <div className="loading-box">

          <div className="loading-glow" />

          <div className="particle p1" />
          <div className="particle p2" />
          <div className="particle p3" />
          <div className="particle p4" />
          <div className="particle p5" />

          <div className="orbit-two" />

          <div className="orbit-one" />

          <div className="loading-ring">

            <svg viewBox="0 0 80 80">

              <circle
                className="loading-track"
                cx="40"
                cy="40"
                r={R}
              />

              <circle
                className="loading-progress"
                cx="40"
                cy="40"
                r={R}
                style={{
                  strokeDasharray: C,
                  strokeDashoffset: offset,
                }}
              />

            </svg>

            <div className="loading-center">
              <span className="loading-number">
                {value}%
              </span>
            </div>

          </div>

          <div className="scan-line" />

          <div className="loading-label">
            LOADING<span className="loading-dots" />
          </div>

        </div>
      </div>
    </>
  )
}