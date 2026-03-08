"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronDown, Users, Landmark, Sprout } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t, language } = useLanguage()

  const scrollToAbout = () => {
    document.getElementById("context")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background */}
      {/* Eliminando backgrounds con gradientes que causan animación de barrido */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div> */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div>
          <div className="relative mb-6 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black leading-snug px-2 mb-6 animate-text-reveal">
              <span className="inline-block animate-text-shimmer tracking-tight block leading-snug">DÂN CHỦ</span>
              <span className="inline-block text-gradient-gold mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-8xl italic block leading-normal">Xã Hội Chủ Nghĩa</span>
              <span className="inline-block animate-text-shimmer mt-3 text-lg sm:text-2xl md:text-3xl lg:text-5xl font-light tracking-wide block leading-snug">Và Nhà Nước Xã Hội Chủ Nghĩa</span>
            </h1>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2">
            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="rounded-full bg-white/10 p-2 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg viewBox="0 0 200 200" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="12"/>
                    <polygon points="100,40 130,80 175,80 145,115 160,155 100,120 40,155 55,115 25,80 70,80" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base leading-tight">
                    Nhà nước<br />Phục vụ ai?
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="rounded-full bg-white/10 p-2 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base leading-tight">
                    NN Tư sản<br />vs NN XHCN
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="rounded-full bg-white/10 p-2 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base leading-tight">
                    Dân chủ<br />Hình thức
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="rounded-full bg-white/10 p-2 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base leading-tight">
                    Dân chủ<br />Thực chất
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Scroll Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
            >
              <div className="glass glass-hover rounded-full p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                <ChevronDown className="w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
