const stops = [
  {
    icon: "😞",
    description: "Menyesal karena terlambat membawa anak ke Terapis Wicara profesional.",
  },
  {
    icon: "🙅‍♀️",
    description: "Anak ditolak banyak sekolah karena belum mampu komunikasi dan kooperatif.",
  },
  {
    icon: "😶",
    description: 'Anak selalu dikucilkan teman-temannya karena belum mampu sosialisasi.',
  },
];

export default function Stop() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Jangan Sampai Ayah Bunda Mengalami Hal Ini
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stops.map((stop, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{stop.icon}</div>
              <p className="text-gray-700 leading-relaxed">{stop.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-medium text-gray-700 mt-12">
          Mulai deteksi dini sekarang, jangan sampai terlambat!
        </p>
      </div>
    </section>
  );
}