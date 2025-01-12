import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Bagaimana cara belajar di Birru Care?',
    answer: 'Pertama, Ayah Bunda mengisi form daftar dulu. Setelah itu, konfirmasi ke admin bahwa form sudah diisi. Kemudian, jadwal assessment atau pemeriksaan awal akan ditentukan pada hari dan jam yang telah disepakati oleh admin dan Ayah Bunda. Selanjutnya, jadwal belajar ditentukan berdasarkan waktu yang telah disepakati bersama.',
    icon: '📝'
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk melihat progres?',
    answer: 'Berbeda-beda tergantung pada diagnosis anak. Untuk anak dengan kondisi terlambat tanpa gangguan tertentu, proses belajar biasanya berlangsung lebih cepat, kurang lebih 3 bulan. Untuk anak dengan kondisi berat, proses belajar bisa berlangsung cukup lama. Semua tergantung pada berbagai faktor dan kondisi.',
    icon: '📈'
  },
  {
    question: 'Belajarnya berapa kali seminggu?',
    answer: 'Belajarnya disesuaikan dengan kondisi anak. Untuk anak dengan kondisi ringan, minimal 2 kali seminggu, sedangkan untuk anak dengan kondisi berat, sekitar 4-5 kali seminggu.',
    icon: '🗓️'
  },
  {
    question: 'Metode apa yang diterapkan di Birru Care?',
    answer: 'Banyak metode yang diterapkan di Birru Care, beberapa diantaranya adalah Verbal Behavior, Play Therapy, Modelling, Drill, Sensori Integrasi, Stimulasi Multi-Modal, dan banyak lagi. Semua metode disesuaikan dengan kondisi dan kepribadian anak.',
    icon: '🧑‍🏫'
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