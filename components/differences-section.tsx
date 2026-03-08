"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const differences = [
  {
    id: "1",
    title: "Khác nhau về bản chất giai cấp",
    a: "Nhà nước tư sản là công cụ thống trị chính trị của giai cấp tư sản, được xây dựng trên nền tảng chế độ tư hữu tư bản chủ nghĩa về tư liệu sản xuất. Dù có hiến pháp, bầu cử, nghị viện hay tam quyền phân lập, về bản chất nó vẫn bảo vệ lợi ích nền tảng của giai cấp tư sản.",
    b: "Nhà nước XHCN là nhà nước kiểu mới, mang bản chất giai cấp công nhân, đồng thời có tính nhân dân rộng rãi và tính dân tộc sâu sắc, hướng tới lợi ích của đa số người lao động. Nó gắn với việc xây dựng nền dân chủ XHCN và thực hiện quyền làm chủ của nhân dân lao động.",
    summary: "Nhà nước tư sản phục vụ lợi ích của thiểu số nắm tư liệu sản xuất. Nhà nước XHCN được định hướng phục vụ đại đa số nhân dân lao động.",
  },
  {
    id: "2",
    title: "Khác nhau về cơ sở kinh tế",
    a: "Cơ sở kinh tế là chế độ tư hữu tư bản chủ nghĩa, kinh tế thị trường tư bản, mục tiêu lợi nhuận và sự phân hóa giàu nghèo gắn với sở hữu tư bản.",
    b: "Cơ sở kinh tế theo lý luận là quan hệ sản xuất tiến bộ, từng bước xác lập công hữu đối với tư liệu sản xuất chủ yếu, phát triển lực lượng sản xuất hiện đại và hướng tới công bằng xã hội.",
  },
  {
    id: "3",
    title: "Khác nhau về mục tiêu hoạt động",
    a: "Mục tiêu chủ yếu là duy trì trật tự xã hội tư sản, bảo vệ quyền sở hữu tư nhân tư bản, bảo đảm môi trường cho tích lũy tư bản và giữ ổn định hệ thống.",
    b: "Mục tiêu là xóa bỏ áp bức, bóc lột, bất công; thực hiện quyền làm chủ của nhân dân; tổ chức xây dựng xã hội mới và hướng tới xã hội không còn đối kháng giai cấp.",
  },
  {
    id: "4",
    title: "Khác nhau về tính chất của dân chủ",
    a: "Dân chủ tư sản đề cao quyền con người, quyền công dân, quyền cá nhân; có bầu cử, đảng phái cạnh tranh, báo chí tư nhân và giá trị tiến bộ lịch sử nhất định. Tuy nhiên, theo phê phán Mác-xít, đây dễ trở thành dân chủ hình thức nếu quyền lực kinh tế vẫn nằm trong tay thiểu số. Bình đẳng pháp lý không đồng nghĩa với bình đẳng thực tế về kinh tế, giáo dục, truyền thông và khả năng tác động chính trị.",
    b: "Dân chủ XHCN là nền dân chủ của đa số, không chỉ giới hạn ở quyền chính trị mà còn bao gồm quyền kinh tế, xã hội, văn hóa. Nhân dân không chỉ bầu ra nhà nước mà còn tham gia quản lý nhà nước và xã hội. Mục tiêu là biến người lao động thành chủ thể làm chủ thực sự.",
    summary: "Dân chủ tư sản nhấn mạnh quyền chính trị – pháp lý. Dân chủ XHCN nhấn mạnh cả quyền chính trị lẫn điều kiện kinh tế – xã hội để quyền đó được thực hiện thực chất.",
  },
  {
    id: "5",
    title: "Khác nhau về quan niệm tự do",
    a: "Tự do tư sản gắn với tự do sở hữu, tự do kinh doanh, tự do hợp đồng và tự do cá nhân trước nhà nước. Theo phê phán của chủ nghĩa Mác, người lao động tuy \"tự do\" về pháp lý nhưng do không có tư liệu sản xuất nên vẫn phải bán sức lao động để sống. Vì vậy, tự do tư sản nhiều khi chỉ là tự do hình thức đối với số đông, còn thực chất hơn với thiểu số có tài sản và quyền lực.",
    b: "Tự do XHCN nhấn mạnh giải phóng con người khỏi áp bức, bóc lột, đói nghèo; gắn tự do với việc làm, giáo dục, y tế, an sinh và bình đẳng cơ hội. Tự do cá nhân phải đi cùng trách nhiệm xã hội và lợi ích cộng đồng.",
  },
  {
    id: "6",
    title: "Khác nhau về vai trò của pháp luật",
    a: "Pháp luật chủ yếu bảo vệ quyền sở hữu tư nhân, trật tự thị trường, cạnh tranh và ổn định chính trị cho phát triển tư bản.",
    b: "Pháp luật được định hướng để bảo vệ lợi ích của nhân dân, tổ chức xây dựng xã hội mới, bảo đảm công bằng, tiến bộ xã hội và giữ ổn định chính trị vì mục tiêu phát triển con người.",
  },
  {
    id: "7",
    title: "Khác nhau về quan hệ giữa nhà nước và giai cấp cầm quyền",
    a: "Giai cấp tư sản không nhất thiết trực tiếp cầm quyền cá nhân, nhưng kiểm soát nhà nước thông qua sở hữu tư bản, tài chính, truyền thông, vận động hành lang và ảnh hưởng chính sách.",
    b: "Theo lý luận, giai cấp công nhân giữ vai trò lãnh đạo thông qua Đảng Cộng sản – đội tiên phong chính trị – để xây dựng xã hội mới.",
  },
  {
    id: "8",
    title: "Khác nhau về triển vọng lịch sử",
    a: "Theo Mác – Lênin, đây không phải hình thái cuối cùng của lịch sử mà chỉ là một giai đoạn sẽ bị thay thế.",
    b: "Đây là nhà nước quá độ, nhằm xóa bỏ cơ sở giai cấp của chính nhà nước; về lâu dài, khi không còn giai cấp đối kháng, nhà nước sẽ dần tiêu vong theo nghĩa lý luận.",
  },
]

export default function DifferencesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 },
    )
    const el = document.getElementById("differences")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="differences" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-gradient block">III. Điểm Khác Nhau</span>
              <span className="text-white/90 block italic mt-2">Giữa Nhà Nước Tư Sản Và Nhà Nước XHCN</span>
            </h2>
            <div className="section-divider my-8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
          >
            <Card className="glass-enhanced overflow-hidden border border-white/10 p-4">
              <div className="relative w-full min-h-[340px] md:min-h-[420px]">
                <Image src="/images/so_do_1.png" alt="Sơ đồ 1" fill className="object-contain" />
              </div>
            </Card>
            <Card className="glass-enhanced overflow-hidden border border-white/10 p-4">
              <div className="relative w-full min-h-[340px] md:min-h-[420px]">
                <Image src="/images/so_do_2.png" alt="Sơ đồ 2" fill className="object-contain" />
              </div>
            </Card>
          </motion.div>

          <Accordion type="multiple" className="space-y-3">
            {differences.map((d, i) => (
              <AccordionItem
                key={d.id}
                value={`item-${d.id}`}
                className="glass-enhanced rounded-lg border border-white/10 overflow-hidden px-4"
              >
                <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline py-6 text-left [&>svg]:text-white">
                  <span className="font-bold">{d.id}. {d.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pb-6">
                  <div className="space-y-4 pl-1">
                    <div>
                      <p className="text-amber-400/90 font-semibold text-sm mb-1">a) Nhà nước tư sản</p>
                      <p className="text-sm leading-relaxed">{d.a}</p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold text-sm mb-1">b) Nhà nước XHCN</p>
                      <p className="text-sm leading-relaxed">{d.b}</p>
                    </div>
                    {d.summary && (
                      <div className="pt-3 mt-3 border-t border-white/10">
                        <p className="text-white/90 font-medium text-sm italic">Tóm lại: {d.summary}</p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
