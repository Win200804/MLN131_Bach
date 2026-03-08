"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"

interface Reference {
  url: string
  title: string
}

const referencesData: Reference[] = [
  {
    url: "https://www.luat.tuvantinhoc.com/index.php/12/2011/so-do-to-chuc-chinh-quyen-dang-nha-nuoc/",
    title: "Sơ đồ tổ chức chính quyền Đảng Nhà nước",
  },
  {
    url: "https://khoahoc.vietjack.com/question/830650/em-hay-ve-so-do-bo-may-co-quan-nha-nuoc-theo-quy-dinh-tai-hien-phap-nam-2013",
    title: "Em hãy vẽ sơ đồ bộ máy cơ quan nhà nước theo quy định tại Hiến pháp năm 2013",
  },
  {
    url: "https://bacnam.com.vn/luat-xay-dung-so-1352025qh15-ap-dung-tu-ngay-0172026",
    title: "Luật xây dựng số 135/2025/QH15 áp dụng từ ngày 01/7/2026",
  },
  {
    url: "https://hocluat.vn/ban-chat-chuc-nang-bo-may-va-hinh-thuc-nha-nuoc-xa-hoi-chu-nghia/",
    title: "Bản chất chức năng bộ máy và hình thức nhà nước xã hội chủ nghĩa",
  },
  {
    url: "https://gemini.google.com/share/5ee8f4bba231",
    title: "So sánh Nhà nước Tư sản và Xã hội chủ nghĩa",
  },
]

const imageSources = [
  "Chân dung Karl Marx, Friedrich Engels và V.I. Lenin.",
  "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.",
  "Toàn cảnh các kỳ họp Quốc hội Việt Nam tại Hội trường Diên Hồng.",
  "Hình ảnh cử tri (công nhân, nông dân, trí thức) đi bỏ phiếu bầu cử.",
  "Sơ đồ tổ chức bộ máy Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.",
  "Các hoạt động tiếp xúc cử tri và lấy ý kiến nhân dân.",
]

export default function CompaniesSection() {
  const [references] = useState<Reference[]>(referencesData)

  return (
    <section id="references" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-blue-500/10 p-4">
              <BookOpen className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-gradient block leading-snug">Tài Liệu</span>
            <span className="text-gradient-gold block italic mt-3 leading-snug">
              Tham Chiếu
            </span>
          </h2>
          <div className="section-divider my-8"></div>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto font-body">
            Các nguồn tài liệu tham khảo được sử dụng trong dự án này
          </p>
        </div>

        <div className="space-y-4">
          {references.map((ref, index) => (
            <motion.a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="block"
            >
              <Card className="glass-enhanced hover-lift p-6 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white/50 font-mono text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-white group-hover:text-white/90 transition-colors line-clamp-2 text-sm md:text-base font-medium">
                        {ref.title || ref.url}
                      </h3>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm truncate group-hover:text-white/50 transition-colors">
                      {ref.url}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-white/30 group-hover:text-blue-400 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="glass-enhanced rounded-lg border border-white/10 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Nguồn ảnh</h3>
            <ul className="space-y-2 text-white/80 text-sm md:text-base">
              {imageSources.map((source, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/references"
              className="inline-flex items-center gap-2 px-6 py-3 glass-enhanced rounded-lg border border-white/20 hover:border-blue-400/50 transition-all text-white font-semibold"
            >
              Xem đầy đủ Trích dẫn & Công nghệ
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
