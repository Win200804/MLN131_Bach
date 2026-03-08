"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Building2, Vote, Scale } from "lucide-react"

const mlnImages = [
  "/images/MLN/7dan-chu.jpg",
  "/images/MLN/dan-chu-xa-hoi-chu-nghia-la-nen-dan-chu-gi_2804133627.png",
  "/images/MLN/bau-cu.png",
]

const theoryItems = [
  {
    id: 1,
    title: "Quan niệm của chủ nghĩa Mác – Lênin về nhà nước",
    icon: Building2,
    content:
      "Theo quan điểm Mác – Lênin, nhà nước không phải là thiết chế trung lập đứng ngoài xã hội, mà là hiện tượng lịch sử gắn với sự phân chia giai cấp và mâu thuẫn giai cấp không thể điều hòa. Nhà nước mang bản chất giai cấp, là công cụ thực hiện quyền lực chính trị của giai cấp giữ địa vị thống trị về kinh tế. Trong thời kỳ quá độ lên CNXH, việc thiết lập chuyên chính vô sản là giai cấp công nhân nắm và sử dụng quyền lực nhà nước để xây dựng xã hội mới, thực hiện dân chủ với nhân dân và đấu tranh với các lực lượng chống lại nhân dân.",
  },
  {
    id: 2,
    title: "Quan niệm về dân chủ",
    icon: Vote,
    content:
      "Theo nghĩa chung, dân chủ là quyền lực thuộc về nhân dân. Nhưng trong cách tiếp cận Mác – Lênin, dân chủ luôn mang dấu ấn giai cấp, tức phải trả lời câu hỏi: nhân dân nào và giai cấp nào thực sự quyết định quyền lực nhà nước. Sau khi lật đổ quyền thống trị của giai cấp tư sản, nhà nước kiểu mới xây dựng nền dân chủ XHCN, thực hiện quyền lực của nhân dân và quyền làm chủ của tuyệt đại đa số nhân dân lao động.",
  },
  {
    id: 3,
    title: "Quan niệm về tự do",
    icon: Scale,
    content:
      "Trong tư tưởng tư sản, tự do thường gắn với quyền cá nhân, quyền sở hữu, tự do hợp đồng, tự do ngôn luận và tự do kinh doanh. Theo cách nhìn Mác-xít, các quyền này có ý nghĩa tiến bộ lịch sử, nhưng chưa đủ để tạo nên tự do thực chất nếu đa số vẫn bị ràng buộc bởi nghèo đói, bất bình đẳng và lệ thuộc kinh tế. Tự do thật sự phải gắn với điều kiện để con người làm chủ cuộc sống và cùng quyết định số phận của mình.",
  },
]

export default function ContextSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("context")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="context" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-gradient block">I. Cơ Sở Lý Luận</span>
            </h2>
            <div className="section-divider my-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {theoryItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="glass-enhanced hover-lift p-8 h-full flex flex-col overflow-hidden">
                    <div className="relative min-h-[220px] md:min-h-[280px] w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={mlnImages[i]}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-blue-500/10 p-3">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.id}. {item.title}</h3>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed flex-grow">{item.content}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
