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
            <h2 className="text-3xl font-bold mb-4">Spesial Hari Ini!</h2>
            <p className="text-gray-600">Investasi ini setara dengan</p>
          </div>
          <div className="space-y-6 mb-8">
            <ul className="space-y-4">
              <li className="flex items-center bg-primary-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Biaya 3 Bulan Terapi</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 4.000.000)</span>
                </div>
              </li>
              <li className="flex items-center bg-secondary-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Biaya 1 Jam Konsultasi</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 500.000)</span>
                </div>
              </li>
              <li className="flex items-center bg-accent-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">E-Book Panduan Praktis Stimulasi</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 400.000)</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-gray-500 line-through mb-2">Total Nilai Rp 4.900.000</p>
            <p className="text-3xl font-bold text-primary-600 mb-6">Investasi: Rp 29.000</p>
            <button 
              className="bg-primary-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => {
                // @ts-ignore
                if (window.fbq) {
                  // @ts-ignore
                  window.fbq('track', 'AddToCard', {
                    content_name: 'Birru Academy - Mastering Early Detection',
                    content_category: 'Kuliah WhatsApp',
                    currency: 'IDR',
                    value: 4900000
                  });
                }
                window.open('https://api.whatsapp.com/send?phone=6282281920653&text=Halo%20Kak%2C%20Saya%20Mau%20Ikut%20Program%203%20Days%20Mastering%20Early%20Detection', '_blank');
              }}
            >
              Ya, Saya Mau Daftar Sekarang!
            </button>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-primary-500 mr-1" />
                <span>Garansi 30 Hari</span>
              </div>
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