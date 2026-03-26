import { useEffect } from 'react'
import { animate } from 'animejs'
import maryamImg from '../assets/maryam.png'
import ianImg from '../assets/ian.png'
import petteriImg from '../assets/petteri.jpg'
import omidImg from '../assets/omid.jpg'
import michaelImg from '../assets/michael.jpg'
import linkedinIcon from '../assets/linkedin.png'

export default function Slide11_Team() {
  useEffect(() => {
    const titleEl = document.querySelector('.team-title')
    const subtitleEl = document.querySelector('.team-subtitle')

    if (titleEl) {
      animate(titleEl, {
        translateY: { from: 50, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 1000,
        ease: 'outExpo',
      })
    }

    if (subtitleEl) {
      animate(subtitleEl, {
        translateY: { from: 30, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 800,
        delay: 300,
        ease: 'outExpo',
      })
    }
  }, [])

  return (
    <div className="h-full w-full bg-white relative overflow-y-auto">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.08) 50px, rgba(0,0,0,0.08) 51px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-6 md:p-8 lg:p-10">
        <h2 className="team-title text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 opacity-0">THE TEAM</h2>
        <p className="team-subtitle text-lg sm:text-xl lg:text-2xl font-body mb-4 sm:mb-5 opacity-0">
          We inspire each other with our passion for innovation.
        </p>

        {/* Two aligned columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* LEFT — CORE TEAM */}
          <div className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md px-5 lg:px-6 pt-5 lg:pt-6 pb-[17px] lg:pb-[21px] justify-between">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-black rounded-full" />
              FOUNDERS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Maryam */}
              <div className="flex flex-col">
                <img
                  src={maryamImg}
                  alt="Maryam Azh, PhD"
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover mb-3 rounded-xl shadow-sm"
                  style={{ objectPosition: '50% 5%' }}
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2">Maryam Azh, PhD</h3>
                <p className="font-mono text-xs sm:text-sm mb-1">AI Product Strategy</p>
                <p className="font-body text-xs sm:text-sm">
                  15+ years in AI product development & digital transformation
                </p>
              </div>

              {/* Ian */}
              <div className="flex flex-col">
                <img
                  src={ianImg}
                  alt="Ian Maxwell, MBA"
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover mb-3 rounded-xl shadow-sm"
                  style={{ objectPosition: '30% 5%' }}
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2">Ian Maxwell, MBA</h3>
                <p className="font-mono text-xs sm:text-sm mb-1">Automotive & Operations</p>
                <p className="font-body text-xs sm:text-sm">
                  20+ years in automotive quality control & operations across APAC
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — CORE TEAM */}
          <div className="flex flex-col bg-black text-white rounded-2xl px-5 lg:px-6 pt-5 lg:pt-6 pb-[17px] lg:pb-[21px] shadow-lg justify-between">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-white rounded-full" />
              CORE TEAM
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              {/* Petteri */}
              <a
                href="https://www.linkedin.com/in/petteriteikari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group hover:opacity-90 transition-all"
              >
                <img
                  src={petteriImg}
                  alt="Petteri Teikari, PhD"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover mb-2"
                />
                <strong className="text-sm sm:text-base group-hover:underline">
                  Petteri Teikari, PhD
                </strong>
                <p className="text-xs text-white mt-2 leading-tight">
                  Vision AI & <br />Computational Imaging
                </p>
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-4 h-4 sm:w-5 sm:h-5 mt-2 opacity-70 group-hover:opacity-100"
                />
              </a>

              {/* Omid */}
              <a
                href="https://www.linkedin.com/in/omid-geramifard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group hover:opacity-90 transition-all"
              >
                <img
                  src={omidImg}
                  alt="Omid Geramifard, PhD"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover mb-2"
                />
                <strong className="text-sm sm:text-base group-hover:underline">
                  Omid Geramifard, PhD
                </strong>
                <p className="text-xs text-white mt-2 leading-tight">
                  Data Science & <br />Machine Learning
                </p>
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-4 h-4 sm:w-5 sm:h-5 mt-2 opacity-70 group-hover:opacity-100"
                />
              </a>

              {/* Michael */}
              <a
                href="https://www.linkedin.com/in/msayre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group hover:opacity-90 transition-all"
              >
                <img
                  src={michaelImg}
                  alt="Michael Sayre"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover mb-2"
                />
                <strong className="text-sm sm:text-base group-hover:underline">
                  Michael Sayre
                </strong>
                <p className="text-xs text-white mt-2 leading-tight">
                  Strategy & <br />Go-to-Market
                </p>
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-4 h-4 sm:w-5 sm:h-5 mt-2 opacity-100 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-2">
          <p className="text-base font-mono sm:text-lg font-black">
            sales@atlasinsights.ai • www.atlasinsights.ai
          </p>
        </div>
      </div>
    </div>
  )
}
