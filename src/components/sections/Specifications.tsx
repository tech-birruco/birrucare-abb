const spesifications = [
  {
    icon: '📝',
    description: '1. Mendeteksi dini melalui pertanyaan.',
  },
  {
    icon: '👩‍👧',
    description: '2. Wawancara dengan orang tua.',
  },
  {
    icon: '👶',
    description: '3. Mengobservasi anak.',
  },
  {
    icon: '🔍',
    description: '4. Test langsung dengan anak.',
  },
  {
    icon: '🎯',
    description: '5. Edukasi target belajar dengan orang tua.',
  },
  {
    icon: '🗓️',
    description: '6. Menentukan jadwal belajar.',
  },
];

export function Specifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 px-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Alur</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Assessment yang akan Ayah Bunda dan anak lalui di Birru Care
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spesifications.map((spesification, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{spesification.icon}</div>
              <p className="text-gray-700 leading-relaxed">{spesification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}