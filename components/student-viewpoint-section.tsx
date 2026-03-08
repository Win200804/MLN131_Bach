"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote, Scale, Users, Lightbulb } from "lucide-react"

const studentImages = ["/images/sv_1.png", "/images/sv_2.png", "/images/sv_3.png", "/images/sv_4.png"]

const viewpoints = [
  {
    id: 1,
    title: "Về \"tự do tư sản\"",
    icon: Scale,
    color: "amber",
    content:
      "Tự do tư sản có giá trị tiến bộ lịch sử vì đề cao quyền cá nhân, quyền công dân, tự do ngôn luận, tự do kinh doanh và bình đẳng trước pháp luật. Tuy nhiên, nó vẫn có giới hạn vì chủ yếu tồn tại trong khuôn khổ sở hữu tư nhân và thị trường; người dân có thể bình đẳng về pháp luật nhưng không bình đẳng về điều kiện sống; tự do của người có vốn và ảnh hưởng luôn khác xa tự do của người lao động nghèo. Vì vậy, tự do tư sản là cần thiết nhưng chưa đủ, chủ yếu mới bảo đảm tự do hình thức.",
  },
  {
    id: 2,
    title: "Về \"dân chủ XHCN\"",
    icon: Users,
    color: "blue",
    content:
      "Dân chủ XHCN có ý nghĩa tiến bộ vì đặt vấn đề dân chủ không chỉ ở lá phiếu hay hình thức tổ chức quyền lực, mà ở quyền làm chủ thực sự của nhân dân trong kinh tế, chính trị, văn hóa và xã hội. Tuy nhiên, để không chỉ là lý tưởng, dân chủ XHCN cần gắn với pháp luật minh bạch, cơ chế giám sát xã hội, phòng chống tham nhũng, chống quan liêu, nâng cao dân trí và tạo điều kiện cho người dân tham gia quản lý nhà nước.",
  },
  {
    id: 3,
    title: "Quan điểm cá nhân tổng hợp",
    icon: Lightbulb,
    color: "emerald",
    content:
      "Có thể nghiêng về nhận định rằng dân chủ XHCN có nền tảng lý luận nhân văn và hướng tới dân chủ thực chất hơn vì quan tâm đến quyền lực của đại đa số và điều kiện sống cụ thể của con người. Tuy vậy, mọi mô hình chỉ có giá trị khi được thực hiện bằng thể chế tốt, kiểm soát quyền lực tốt và thật sự vì con người.",
  },
]

export default function StudentViewpointSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("viewpoint")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getIconStyles = (color: string) => {
    switch (color) {
      case "amber":
        return { bg: "bg-amber-500/10", text: "text-amber-400" }
      case "blue":
        return { bg: "bg-blue-500/10", text: "text-blue-400" }
      case "emerald":
        return { bg: "bg-emerald-500/10", text: "text-emerald-400" }
      default:
        return { bg: "bg-white/10", text: "text-white" }
    }
  }

  return (
    <section id="viewpoint" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-gradient block">VI. Quan Điểm Của Sinh Viên</span>
            <span className="text-white/90 block italic mt-2">Về &quot;Tự Do Tư Sản&quot; Và &quot;Dân Chủ XHCN&quot;</span>
          </h2>
          <div className="section-divider my-8" />
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {viewpoints.map((item, i) => {
            const Icon = item.icon
            const styles = getIconStyles(item.color)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Card className="glass-enhanced hover-lift p-8 h-full flex flex-col overflow-hidden">
                  <div className="relative min-h-[240px] md:min-h-[280px] w-full rounded-lg overflow-hidden mb-6">
                    <Image
                      src={studentImages[item.id - 1]}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`rounded-full ${styles.bg} p-3`}>
                      <Icon className={`w-8 h-8 ${styles.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.id}. {item.title}</h3>
                  </div>
                  <p className="text-white/75 text-base leading-relaxed flex-grow">{item.content}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="glass-enhanced border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row items-start gap-8 overflow-hidden">
            <div className="relative w-full sm:w-80 sm:min-w-[320px] min-h-[220px] sm:min-h-[260px] flex-shrink-0 rounded-lg overflow-hidden">
              <Image src="/images/sv_4.png" alt="Sinh viên" fill className="object-cover" />
            </div>
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 rounded-full bg-white/5 p-3">
                <Quote className="w-8 h-8 text-white/50" />
              </div>
              <p className="text-white/80 italic text-base md:text-lg leading-relaxed">
                Mọi mô hình chỉ có giá trị khi được thực hiện bằng thể chế tốt, kiểm soát quyền lực tốt và thật sự vì con người.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
