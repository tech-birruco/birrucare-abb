const benefits = [
  {
    icon: "🔍",
    description: "Diajak menganalisis dan memahami level kemampuan anak, bukan hanya menerima resep.",
  },
  {
    icon: "🚀",
    description: "Mempercepat progres anak karena program diterapkan di ruang belajar dan di rumah.",
  },
  {
    icon: "🏫",
    description: "Mendapatkan surat rekomendasi ke sekolah berkualitas setelah anak lulus.",
  },
];

export default function Benefit() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Manfaat</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dengan mengikuti Assessment & Treatment <br />di Birru Care, Ayah Bunda akan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}