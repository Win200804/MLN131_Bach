"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Về dự án */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Về dự án</h3>
            <div className="space-y-2 text-sm">
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("context")}>I. Cơ sở lý luận</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("similarities")}>II. Điểm giống nhau</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("differences")}>III. Điểm khác nhau</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("about")}>IV. Bảng so sánh</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("values")}>V. Mô hình dân chủ</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("viewpoint")}>VI. Quan điểm sinh viên</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("references")}>Tài liệu tham chiếu</div>
              <div className="text-white/75 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("portfolio")}>Thư viện hình ảnh</div>
            </div>
          </div>

          {/* Nội dung */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Nội dung</h3>
            <div className="space-y-3 text-white/75">
              <p>• Dân chủ XHCN & Nhà nước XHCN</p>
              <p>• Dân chủ hình thức vs Thực chất</p>
              <p>• Bản chất giai cấp & Pháp luật</p>
              <p>• Quan điểm Mác - Lênin</p>
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Thông tin</h3>
            <p className="text-white/75 mb-4">
              Dự án nghiên cứu về Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa
            </p>
            <div className="glass p-6 rounded-lg mt-6">
              <p className="text-white italic text-lg">
                &quot;Nhà nước đó phục vụ ai?&quot;
              </p>
              <p className="text-white/60 mt-2 text-sm">Câu hỏi trung tâm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            Dân chủ XHCN & Nhà nước XHCN © 2026 - Dự án giáo dục
          </div>
        </div>
      </div>
    </footer>
  )
}
