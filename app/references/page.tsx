"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"

interface Reference {
  url: string
  title: string
}

const referenceTitles: Record<string, string> = {
  "https://www.luat.tuvantinhoc.com/index.php/12/2011/so-do-to-chuc-chinh-quyen-dang-nha-nuoc/":
    "Sơ đồ tổ chức chính quyền Đảng Nhà nước",
  "https://khoahoc.vietjack.com/question/830650/em-hay-ve-so-do-bo-may-co-quan-nha-nuoc-theo-quy-dinh-tai-hien-phap-nam-2013":
    "Em hãy vẽ sơ đồ bộ máy cơ quan nhà nước theo quy định tại Hiến pháp năm 2013",
  "https://bacnam.com.vn/luat-xay-dung-so-1352025qh15-ap-dung-tu-ngay-0172026":
    "Luật xây dựng số 135/2025/QH15 áp dụng từ ngày 01/7/2026",
  "https://hocluat.vn/ban-chat-chuc-nang-bo-may-va-hinh-thuc-nha-nuoc-xa-hoi-chu-nghia/":
    "Bản chất chức năng bộ máy và hình thức nhà nước xã hội chủ nghĩa",
  "https://gemini.google.com/share/5ee8f4bba231":
    "So sánh Nhà nước Tư sản và Xã hội chủ nghĩa",
}

const imageSources = [
  "Chân dung Karl Marx, Friedrich Engels và V.I. Lenin.",
  "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.",
  "Toàn cảnh các kỳ họp Quốc hội Việt Nam tại Hội trường Diên Hồng.",
  "Hình ảnh cử tri (công nhân, nông dân, trí thức) đi bỏ phiếu bầu cử.",
  "Sơ đồ tổ chức bộ máy Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.",
  "Các hoạt động tiếp xúc cử tri và lấy ý kiến nhân dân.",
]

const citations = [
  "Nội dung ôn tập môn Chủ nghĩa xã hội khoa học học kỳ 231, tr. 3.",
  "Nội dung ôn tập môn Chủ nghĩa xã hội khoa học học kỳ 231, tr. 4.",
  "Nội dung ôn tập môn Chủ nghĩa xã hội khoa học học kỳ 231, tr. 5.",
  "Nội dung ôn tập môn Chủ nghĩa xã hội khoa học học kỳ 231, tr. 20.",
  "Tài liệu giảng dạy về phòng, chống tham nhũng dùng cho các trường đại học, cao đẳng không chuyên về luật, tr. 9.",
  "Tài liệu giảng dạy về phòng, chống tham nhũng dùng cho các trường đại học, cao đẳng không chuyên về luật, tr. 11.",
  "Karl Marx, Friedrich Engels, Manifesto of the Communist Party, p. 31.",
  "Karl Marx, Friedrich Engels, Manifesto of the Communist Party, pp. 44–45.",
  "Francis Fukuyama, The End of History and the Last Man, p. 26.",
  "Francis Fukuyama, The End of History and the Last Man, p. 71.",
  "Francis Fukuyama, The End of History and the Last Man, p. 72.",
]

export default function ReferencesPage() {
  const [references, setReferences] = useState<Reference[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const response = await fetch("/api/references")
        if (!response.ok) throw new Error("Failed to fetch references")

        const data = await response.json()

        const parsedRefs = data.references.map((url: string) => ({
          url,
          title: referenceTitles[url] ?? extractTitleFromUrl(url),
        }))

        setReferences(parsedRefs)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchReferences()
  }, [])

  const extractTitleFromUrl = (url: string): string => {
    try {
      const urlObj = new URL(url)
      const pathname = urlObj.pathname
      const parts = pathname.split("/").filter((p) => p)
      const lastPart = parts[parts.length - 1]

      if (lastPart) {
        return decodeURIComponent(lastPart)
          .replace(/-/g, " ")
          .replace(/%20/g, " ")
          .substring(0, 80)
      }

      return urlObj.hostname
    } catch {
      return url.substring(0, 80)
    }
  }

  return (
    <>
      <CustomCursor />
      <section className="min-h-screen relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-white/75 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </Link>

            <h1 className="text-5xl md:text-6xl font-display font-black mb-4 leading-tight">
              <span className="text-gradient block">Tài Liệu Tham Chiếu</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl">
              Các nguồn tài liệu và liên kết liên quan đến Dân chủ XHCN và Nhà nước XHCN
            </p>
          </div>

          {/* Content */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">
                <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full"></div>
              </div>
              <p className="text-white/75 mt-4">Đang tải tài liệu...</p>
            </div>
          )}

          {error && (
            <div className="glass p-6 rounded-lg border border-red-500/30 text-red-400">
              <p>Lỗi: {error}</p>
            </div>
          )}

          {!loading && !error && references.length > 0 && (
            <div className="space-y-4">
              {references.map((ref, index) => (
                <motion.a
                  key={index}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group glass-enhanced hover-lift p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 block cursor-pointer"
                >
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
                    <div className="flex-shrink-0 text-white/30 group-hover:text-white/70 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {!loading && !error && references.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/75">Không có tài liệu nào được tìm thấy</p>
            </div>
          )}

          <div className="mt-16 pt-12 border-t border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-enhanced p-8 rounded-lg border border-blue-500/20 mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Nguồn ảnh</h3>
              <ul className="space-y-2 text-white/75 text-sm">
                {imageSources.map((source, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-enhanced p-8 rounded-lg border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500/20 text-blue-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Trích dẫn nội dung
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-3">
                    Trích dẫn các nguồn tài liệu tham khảo được sử dụng trong dự án này:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    {citations.map((citation, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{citation}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/60 text-xs mt-4 italic">
                    Mục đích của việc sử dụng các trích dẫn này là để đảm bảo tính chính xác và độ tin cậy của nội dung được trình bày trong dự án.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI Disclosure Section */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-enhanced p-8 rounded-lg border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500/20 text-blue-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Về Công Nghệ Sử Dụng
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-3">
                    Dự án này được phát triển với hỗ trợ của các công nghệ hiện đại, bao gồm:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Trí Tuệ Nhân Tạo (AI)</strong>: Claude Haiku 4.5 được sử dụng để hỗ trợ trong quá trình phát triển, thiết kế, và tối ưu hóa nội dung của dự án.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Next.js & React</strong>: Framework web hiện đại để xây dựng giao diện người dùng tương tác.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Tailwind CSS</strong>: Công cụ styling để tạo ra thiết kế responsive và hiện đại.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Motion & Animation</strong>: Tạo các hiệu ứng hình ảnh mượt mà để cải thiện trải nghiệm người dùng.
                      </span>
                    </li>
                  </ul>
                  <p className="text-white/60 text-xs mt-4 italic">
                    Mục đích của việc sử dụng AI là để nâng cao chất lượng và hiệu quả của dự án, đảm bảo nội dung được trình bày một cách rõ ràng, chính xác và hấp dẫn.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
