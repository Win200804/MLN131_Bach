"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe, Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isStreamingPage = pathname === "/streaming"
  const isCeloPage = pathname === "/celo"

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 outline-none ${isScrolled ? "px-4 py-2" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-3 border border-white/15"
            : "px-4 sm:px-6 py-4 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" 
          className="text-lg sm:text-xl font-bold text-white md:flex-1"
          onClick={() => scrollToSection("context")}
          >
            Dân Chủ XHCN & Nhà Nước XHCN
          </Link>

          {isStreamingPage && (
            <div className="hidden md:flex items-center mr-6">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 nav-item text-white/75 hover:text-white transition-colors relative"
              >
                <ArrowLeft size={20} />
                <span>{t("streaming.backHome")}</span>
              </Link>
            </div>
          )}

          {isCeloPage && (
            <div className="hidden md:flex items-center mr-6">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 nav-item text-white/75 hover:text-white transition-colors relative"
              >
                <ArrowLeft size={20} />
                <span>{t("celo.backHome")}</span>
              </Link>
            </div>
          )}

          {!isStreamingPage && !isCeloPage && (
            <div className="hidden lg:flex items-center flex-wrap gap-x-4 gap-y-1 mr-4">
              <button onClick={() => scrollToSection("home")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">Trang chủ</button>
              <button onClick={() => scrollToSection("context")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">I. Lý luận</button>
              <button onClick={() => scrollToSection("similarities")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">II. Giống nhau</button>
              <button onClick={() => scrollToSection("differences")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">III. Khác nhau</button>
              <button onClick={() => scrollToSection("about")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">IV. Bảng</button>
              <button onClick={() => scrollToSection("values")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">V. Mô hình</button>
              <button onClick={() => scrollToSection("viewpoint")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">VI. Quan điểm</button>
              <button onClick={() => scrollToSection("references")} className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">Tài liệu</button>
              <Link href="/references" className="nav-item text-white/75 hover:text-white transition-colors relative text-sm whitespace-nowrap">Trích dẫn</Link>
            </div>
          )}


          <div className="md:hidden flex items-center space-x-3">

            {(isStreamingPage || isCeloPage) && (
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
                aria-label="Back to home"
              >
                <ArrowLeft size={20} />
              </Link>
            )}

            {!isStreamingPage && !isCeloPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && !isStreamingPage && !isCeloPage && (
            <div className="md:hidden mt-4 glass rounded-lg p-4 max-h-[70vh] overflow-y-auto" role="menu">
            <div className="flex flex-col space-y-2 text-center">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">Trang chủ</button>
              <button onClick={() => scrollToSection("context")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">I. Lý luận</button>
              <button onClick={() => scrollToSection("similarities")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">II. Giống nhau</button>
              <button onClick={() => scrollToSection("differences")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">III. Khác nhau</button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">IV. Bảng so sánh</button>
              <button onClick={() => scrollToSection("values")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">V. Mô hình</button>
              <button onClick={() => scrollToSection("viewpoint")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">VI. Quan điểm</button>
              <button onClick={() => scrollToSection("references")} className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">Tài liệu</button>
              <Link href="/references" className="text-white hover:text-white/80 transition-colors py-2" role="menuitem">Trích dẫn</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
