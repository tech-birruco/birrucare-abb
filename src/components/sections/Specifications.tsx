const spesifications = [
  {
    icon: '🛤️',
    title: 'Communication is a Journey, Not a Race',
    description: 'Memahami kemampuan komunikasi anak dan mendampingi mereka melewati setiap tahapan penting dalam proses belajar komunikasi.',
  },
  {
    icon: '🏡',
    title: 'Communication Begins with a Strong Foundation',
    description: 'Memahami piramida bahasa dan bagaimana setiap tahap perkembangan komunikasi saling mendukung untuk membantu anak belajar dengan optimal.',
  },
  {
    icon: '🗣️',
    title: 'From Building Connection to Unlocking Communication',
    description: 'Memahami kemampuan pragmatik dan artikulasi untuk membantu anak berbicara lebih jelas dan terhubung dalam komunikasi dua arah.',
  }
];

export function Specifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 px-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Materi Yang Akan Ayah Bunda Pelajari
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spesifications.map((spesification, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{spesification.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{spesification.title}</h3>
              <p className="text-gray-700 leading-relaxed">{spesification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}