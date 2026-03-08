"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ImagePlus } from "lucide-react"

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden zigzag-border">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 animate-text-reveal leading-tight">
            <span className="text-gradient block leading-tight">Thư Viện</span>
            <span className="text-gradient-gold block italic mt-3 leading-tight">
              Hình Ảnh
            </span>
          </h2>
          <div className="section-divider my-8"></div>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-body">
            Hình ảnh minh họa về Dân chủ XHCN và Nhà nước XHCN sẽ được thêm vào sau
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-enhanced border border-white/10 p-16 md:p-24 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="rounded-full bg-white/5 p-8">
                  <ImagePlus className="w-16 h-16 text-white/30" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Đang cập nhật
                  </h3>
                  <p className="text-white/60 font-body">
                    Ảnh minh họa sẽ được thêm vào trong thời gian tới
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
