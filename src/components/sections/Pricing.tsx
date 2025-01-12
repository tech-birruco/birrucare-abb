import { Check, Heart, Star } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 border-2 border-primary-100 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Penawaran Terbaik!
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Investasi masa depan anak sedini mungkin</h2>
            <p className="text-gray-600">Jadilah bagian dari komunitas orang tua yang berhasil di Birru Care</p>
          </div>
          <div className="space-y-6 mb-8">
            <ul className="space-y-4">
              <li className="flex items-center bg-primary-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">1 Jam Offline Assessment</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 200.000)</span>
                </div>
              </li>
              <li className="flex items-center bg-secondary-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">E-Book Panduan Perkembangan Anak</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 399.000)</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-gray-500 line-through mb-2">Total Nilai Rp 599.000</p>
            <p className="text-3xl font-bold text-primary-600 mb-6">Investasi: Rp 200.000</p>
            <button 
              className="bg-primary-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => {
                // @ts-ignore
                if (window.fbq) {
                  // @ts-ignore
                  window.fbq('track', 'AddToCard', {
                    content_name: 'Birru Care - Assessment Kemampuan Komunikasi & Belajar',
                    content_category: 'Assessment',
                    currency: 'IDR',
                    value: 599000
                  });
                }
                window.open('https://s.id/birrucare', '_blank');
              }}
            >
              Saya Mau Dibantu Sekarang!
            </button>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-accent-500 mr-1" />
                <span>Pembayaran Aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}