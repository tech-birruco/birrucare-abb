import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah kelas Birru Academy cocok untuk anak saya?',
    answer: 'Kelas kami dirancang khusus untuk Ayah Bunda agar dapat: 1. Mengoptimalkan perkembangan anak usia 1-6 tahun yang sedang dalam tahap perkembangan. 2. Memahami, membantu dan mendampingi anak mengatasi masalah perkembangan bahasa bicara seperti speech delay dan masalah komunikasi lainnnya.',
    icon: '👶'
  },
  {
    question: 'Bagaimana cara mendapatkan materinya?',
    answer: 'Ayah Bunda bisa mengisi link pendaftaran yang akan dikirim setelah pesanan selesai. Selanjutnya, materi akan dikirim otomatis oleh sistem kami. Materi tersebut bisa Ayah Bunda akses selamanya dan diulang-ulang sesuka hati.',
    icon: '📱'
  },
  {
    question: 'Apakah ada sesi tanya jawab?',
    answer: 'Ya, Ayah Bunda dapat bertanya langsung dengan terapis di grup chat. Terapis kami akan mengumpulkan semua pertanyaan dari Ayah Bunda, kemudian menyusun jawaban dalam satu file. Dengan begitu, Ayah Bunda tidak hanya mendapatkan jawaban, tetapi juga dapat belajar dari pengalaman dan kasus lainnya.',
    icon: '💬'
  },
  {
    question: 'Apakah ada garansi untuk kelas Birru Academy?',
    answer: 'Ya, kami memberikan garansi 100% uang kembali dalam 7 hari jika Ayah Bunda merasa kelas kami tidak sesuai.',
    icon: '✨'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Pertanyaan Yang Sering Diajukan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{faq.icon}</span>
                  <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 pb-4 transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}