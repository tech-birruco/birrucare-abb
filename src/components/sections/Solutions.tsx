const solutions = [
  {
    icon: '👩‍⚕️',
    description: 'Terapis lulus dari jurusan Terapi Wicara dari beberapa kampus di Indonesia, bukan abal-abal atau hasil dari pelatihan.',
  },
  {
    icon: '📺',
    description: 'Proses belajar bisa dilihat langsung melalui CCTV atau ikut masuk ke dalam ruangan.',
  },
  {
    icon: '😊',
    description: 'Terapis komunikatif dan ramah, seperti memiliki Terapis pribadi.',
  },
  {
    icon: '📝',
    description: 'Ada Learning Report setiap 12 kali pertemuan.',
  },
  {
    icon: '📘',
    description: 'Dilengkapi dengan boardbook interaktif yang dikembangkan oleh tim ahli Birru Care untuk mendukung pembelajaran di rumah.',
  }
];

export default function Solutions() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue to-secondary-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Apa Yang Membuat Assessment & Treatment Di Birru Care Berbeda?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
              <p className="text-gray-700 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}