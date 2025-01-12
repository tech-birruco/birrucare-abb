import { Quote, Star, Heart } from 'lucide-react';

const testimonials = [
  {
    quote: "Awalnya ragu karena harganya yang terjangkau, tapi setelah ikut program ini, saya jadi paham banget cara mendampingi anak dalam belajar komunikasi.",
    author: "Bunda Rahma",
    location: "Jakarta",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
  },
  {
    quote: "Program ini bener-bener eye opening! Saya jadi tau kalau selama ini ada yang kurang tepat dalam cara saya mengajari anak berkomunikasi.",
    author: "Bunda Sarah",
    location: "Bandung",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200"
  },
  {
    quote: "Materinya lengkap dan mudah dipahami. Yang paling saya suka adalah bisa langsung praktik dengan anak di rumah. Hasilnya luar biasa!",
    author: "Bunda Fatima",
    location: "Surabaya",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Testimoni</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Apa Kata Ayah Bunda Yang Sudah Mencoba Kelas Birru Academy?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="w-8 h-8 text-primary-300 mb-4 group-hover:text-primary-500 transition-colors duration-300" />
              <p className="text-gray-700 leading-relaxed mb-4">{testimonial.quote}</p>
              <Heart className="w-5 h-5 text-accent-400 ml-auto transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}