"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Scale, Layers, Gavel, Shield, Users } from "lucide-react"

const items = [
  {
    id: 1,
    title: "Đều là hình thức tổ chức quyền lực chính trị của xã hội có giai cấp",
    icon: Layers,
    content: "Cả hai đều là bộ máy quyền lực công cộng, có pháp luật, cơ quan quản lý và các thiết chế cưỡng chế để điều hành xã hội.",
  },
  {
    id: 2,
    title: "Đều thực hiện chức năng quản lý xã hội",
    icon: Scale,
    content: "Cả hai đều phải ban hành pháp luật, tổ chức quản lý kinh tế, duy trì trật tự xã hội, bảo vệ lãnh thổ, xử lý vi phạm và cung cấp một số dịch vụ công.",
  },
  {
    id: 3,
    title: "Đều dùng pháp luật như công cụ quản lý",
    icon: Gavel,
    content: "Không có nhà nước nào tồn tại mà không thông qua pháp luật. Khác nhau chủ yếu ở chỗ pháp luật phục vụ lực lượng xã hội nào.",
  },
  {
    id: 4,
    title: "Đều mang tính cưỡng chế",
    icon: Shield,
    content: "Nhà nước nào cũng có bộ máy cưỡng chế như quân đội, công an, tòa án, nhà tù để duy trì trật tự và bảo vệ quyền lực nhà nước.",
  },
  {
    id: 5,
    title: "Đều tuyên bố đại diện cho lợi ích chung",
    icon: Users,
    content: "Nhà nước tư sản thường nhân danh toàn dân, quốc gia, lợi ích công; nhà nước XHCN cũng khẳng định là nhà nước của nhân dân, do nhân dân, vì nhân dân. Điểm khác nằm ở nội dung và cơ chế thực hiện lợi ích đó.",
  },
]

export default function SimilaritiesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("similarities")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="similarities" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-gradient block">II. Điểm Giống Nhau</span>
              <span className="text-white/90 block italic mt-2">Giữa Nhà Nước Tư Sản Và Nhà Nước XHCN</span>
            </h2>
            <div className="section-divider my-8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
          >
            <Card className="glass-enhanced overflow-hidden border border-white/10 p-2">
              <div className="relative w-full min-h-[180px] md:min-h-[240px]">
                <Image src="/images/MLN/cach-mang-vo-san.jpg" alt="Cách mạng" fill className="object-cover" />
              </div>
            </Card>
            <Card className="glass-enhanced overflow-hidden border border-white/10 p-2">
              <div className="relative w-full min-h-[180px] md:min-h-[240px]">
                <Image src="/images/MLN/chu-tich-ho-chi-minh-voi-cuoc-tong-tuyen-cu-dau-tien-bau-quoc-hoi-nuoc-viet-nam-dan-chu-cong-hoa-nam-1946-2.jpg" alt="Bầu cử Quốc hội" fill className="object-cover" />
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="glass-enhanced hover-lift p-6 h-full border-l-4 border-blue-500/40">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-white/10 p-2 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-2">{item.id}. {item.title}</h3>
                        <p className="text-white/75 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </div>
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
