"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const comparisonRows = [
  { criteria: "Bản chất giai cấp", nnts: "Công cụ của giai cấp tư sản", xhcn: "Nhà nước kiểu mới, mang bản chất giai cấp công nhân, tính nhân dân rộng rãi" },
  { criteria: "Cơ sở kinh tế", nnts: "Tư hữu TBCN, thị trường tư bản", xhcn: "Quan hệ sản xuất tiến bộ, hướng tới công hữu các TLSX chủ yếu" },
  { criteria: "Mục tiêu", nnts: "Bảo vệ trật tự tư bản, tích lũy tư bản", xhcn: "Xây dựng xã hội công bằng, dân chủ, văn minh" },
  { criteria: "Dân chủ", nnts: "Dân chủ pháp lý – chính trị, dễ bị chi phối bởi tư bản", xhcn: "Dân chủ của đa số, gắn cả chính trị lẫn kinh tế – xã hội" },
  { criteria: "Tự do", nnts: "Nhấn mạnh tự do cá nhân, sở hữu, kinh doanh", xhcn: "Nhấn mạnh giải phóng con người toàn diện" },
  { criteria: "Pháp luật", nnts: "Bảo vệ trật tự sở hữu tư bản", xhcn: "Bảo vệ lợi ích nhân dân, tổ chức xã hội mới" },
  { criteria: "Chủ thể hưởng lợi chính", nnts: "Thiểu số nắm tư liệu sản xuất", xhcn: "Đại đa số nhân dân lao động" },
  { criteria: "Hạn chế lớn", nnts: "Bất bình đẳng, quyền lực tư bản chi phối", xhcn: "Nguy cơ quan liêu, hình thức hóa dân chủ nếu kiểm soát yếu" },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )
    const el = document.getElementById("about")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-gradient block">IV. Bảng So Sánh Ngắn Gọn</span>
              <span className="text-white/90 block italic mt-2">Dễ Thuyết Trình</span>
            </h2>
            <div className="section-divider my-8" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="glass-enhanced overflow-hidden border border-white/10 p-2">
            <div className="relative w-full min-h-[200px] md:min-h-[280px]">
              <Image
                src="/images/MLN/xay-dung-nha-nuoc-phap-quyen-cua-nhan-dan-do-nhan-dan-va-vi-nhan-dan-2.webp"
                alt="Nhà nước pháp quyền"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-enhanced border border-blue-400/20 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-white font-bold w-[200px] min-w-[160px]">Tiêu chí</TableHead>
                    <TableHead className="text-white/90 font-bold bg-white/5">Nhà nước tư sản</TableHead>
                    <TableHead className="text-blue-400 font-bold bg-blue-500/10">Nhà nước XHCN</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row, i) => (
                    <TableRow key={i} className="border-white/10 hover:bg-white/5">
                      <TableCell className="text-white font-semibold align-top py-5">{row.criteria}</TableCell>
                      <TableCell className="text-white/80 align-top py-5 text-sm">{row.nnts}</TableCell>
                      <TableCell className="text-white/80 align-top py-5 text-sm bg-blue-500/5">{row.xhcn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
