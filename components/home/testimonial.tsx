import React from 'react';
import { MessageSquare, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  image?: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sara C.',
      content: "J'avais tellement de questions et vous avez pris le temps d'y répondre. J'apprécie que vous ayez fait tout votre possible pour que ma commande soit conforme à mes attentes. J'ai été vraiment impressionné par la qualité. Je suis très satisfait de mon achat et je ferai certainement appel à vous à l'avenir.",
      image: undefined
    }
  ];
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-medium text-gray-700 mb-8">Témoignage</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="text-gray-600 mb-4">
              Feel free to leave your feedback by attaching a photo. It helps a lot to support our business for you.
            </p>
            <button className="inline-flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors self-start">
              <span className="mr-2">Write a review</span>
              <MessageSquare size={16} />
            </button>
            
            <div className="mt-auto pt-8">
              <div className="flex items-center">
                <span className="text-gray-600 text-sm mr-2">124 reviews</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="T-shirt model" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-violet-200  rounded-lg p-6 relative">
                <div className="absolute top-4 right-4">
                  <Quote size={24} className="text-green-700 opacity-50" />
                </div>
                <div className="mb-4">
                  <span className="font-medium">{testimonial.name}</span>
                </div>
                <p className="text-sm text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

