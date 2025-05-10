import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "OpenBorgo gave us an authentic Italian experience that we couldn't have found on our own. Staying in a trullo in Puglia and joining local cooking classes made our trip unforgettable.",
    author: "Sarah and James",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "The sustainability aspect of OpenBorgo really impressed us. Seeing how our stay directly contributed to preserving the local heritage made the experience even more meaningful.",
    author: "Michael T.",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "The truffle hunting experience in Tuscany was the highlight of our trip. Our guide was knowledgeable, the dogs were adorable, and the lunch afterward was simply divine!",
    author: "Emily and Paul",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-openborgo-beige/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
            Stories from Our Travelers
          </h2>
          <p className="text-lg text-gray-700">
            Hear what people are saying about their authentic Italian village experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-openborgo-gold fill-openborgo-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="font-playfair font-bold text-2xl md:text-3xl mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-700 mb-6">
              Sign up for our newsletter to receive travel inspiration, exclusive offers, and updates on new villages and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-openborgo-terracotta"
              />
              <button className="bg-openborgo-terracotta text-white py-3 px-6 rounded-lg hover:bg-openborgo-terracotta/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our privacy policy. We'll never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}