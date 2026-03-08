"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Scale, Target, AlertTriangle, CheckCircle2 } from "lucide-react"

const sections = [
  {
    id: 1,
    title: "Nếu xét trên phương diện hình thức – thủ tục",
    icon: Scale,
    color: "slate",
    content:
      "Nhà nước tư sản thường được đánh giá cao ở các điểm như bầu cử cạnh tranh, đa đảng, tự do báo chí, tam quyền phân lập và cơ chế phản biện, kiểm soát quyền lực rõ hơn ở nhiều mô hình. Vì vậy, về thủ tục dân chủ, nhà nước tư sản có những ưu thế nhất định.",
  },
  {
    id: 2,
    title: "Nếu xét trên phương diện bản chất – lợi ích xã hội",
    icon: Target,
    color: "blue",
    content:
      "Theo quan điểm Mác – Lênin, dân chủ thực chất phải trả lời: ai sở hữu của cải xã hội, ai định hướng chính sách, ai hưởng thành quả phát triển, và đại đa số nhân dân có thật sự có điều kiện làm chủ hay không. Nếu đa số vẫn chịu áp lực của nghèo đói, thất nghiệp, bất bình đẳng và quyền lực chính trị bị tiền bạc chi phối, thì dân chủ tư sản vẫn chủ yếu là dân chủ hình thức. Trong khi đó, dân chủ XHCN hướng tới việc nhân dân lao động là chủ thể quyền lực, nhà nước phục vụ đa số, và quyền dân chủ được bảo đảm bằng điều kiện vật chất – xã hội cụ thể.",
  },
  {
    id: 3,
    title: "Nhưng nhà nước XHCN cũng đối diện phê phán",
    icon: AlertTriangle,
    color: "amber",
    content:
      "Những phê phán thường gặp là quyền lực dễ tập trung, thiếu cơ chế đối lập; nếu bộ máy quan liêu, tham nhũng, xa dân thì mục tiêu vì nhân dân có thể bị méo mó; dân chủ XHCN cũng có nguy cơ trở thành khẩu hiệu nếu thiếu kiểm soát quyền lực, minh bạch và giám sát xã hội.",
  },
  {
    id: 4,
    title: "Kết luận cân bằng cho phần này",
    icon: CheckCircle2,
    color: "emerald",
    content:
      "Theo quan điểm Mác – Lênin, dân chủ XHCN có khả năng bảo đảm dân chủ thực chất hơn vì hướng tới quyền lực của đại đa số nhân dân lao động, không chỉ ở chính trị mà còn ở kinh tế, xã hội và văn hóa. Tuy nhiên, để trở thành hiện thực, mô hình này phải gắn với nhà nước pháp quyền, chống quan liêu và tham nhũng, kiểm soát quyền lực, phát huy giám sát của nhân dân và bảo đảm quyền con người bằng cơ chế cụ thể.",
  },
]

export default function TrustedBySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("values")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getStyles = (color: string) => {
    switch (color) {
      case "slate":
        return { bg: "bg-white/10", text: "text-white" }
      case "blue":
        return { bg: "bg-blue-500/10", text: "text-blue-400" }
      case "amber":
        return { bg: "bg-amber-500/10", text: "text-amber-400" }
      case "emerald":
        return { bg: "bg-emerald-500/10", text: "text-emerald-400" }
      default:
        return { bg: "bg-white/10", text: "text-white" }
    }
  }

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-gradient-gold block">V. Mô Hình Nào</span>
            <span className="text-white/90 block italic mt-2">Bảo Đảm Dân Chủ Thực Chất Hơn?</span>
          </h2>
          <div className="section-divider my-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="glass-enhanced overflow-hidden border border-white/10 p-2">
            <div className="relative w-full min-h-[220px] md:min-h-[280px]">
              <Image src="/images/hoi_nghi_1.png" alt="Hội nghị" fill className="object-cover" />
            </div>
          </Card>
          <Card className="glass-enhanced overflow-hidden border border-white/10 p-2">
            <div className="relative w-full min-h-[220px] md:min-h-[280px]">
              <Image src="/images/hoi_nghi.png" alt="Hội nghị" fill className="object-cover" />
            </div>
          </Card>
        </div>

        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {sections.map((s, i) => {
            const Icon = s.icon
            const st = getStyles(s.color)
            return (
              <Card key={s.id} className="glass-enhanced hover-lift p-8 flex flex-col sm:flex-row gap-6">
                <div className={`rounded-full ${st.bg} p-4 flex-shrink-0 self-start`}>
                  <Icon className={`w-8 h-8 ${st.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-3">{s.id}. {s.title}</h3>
                  <p className="text-white/75 text-base leading-relaxed">{s.content}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
