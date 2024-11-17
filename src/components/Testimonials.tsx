import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { Star } from 'lucide-react';
import { auth, db } from '../firebase';

interface Testimonial {
  id: string;
  text: string;
  authorEmail: string;
  createdAt: Date;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [newTestimonial, setNewTestimonial] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isPatient, setIsPatient] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const q = query(collection(db, "patients"), where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q);
        setIsPatient(!querySnapshot.empty);
      } else {
        setIsPatient(false);
      }
    });

    loadTestimonials();
    return () => unsubscribe();
  }, []);

  const loadTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const testimonialsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Testimonial[];
      setTestimonials(testimonialsList);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
  };

  const handleSubmitTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.trim() || !user) return;

    try {
      await addDoc(collection(db, "testimonials"), {
        text: newTestimonial,
        authorEmail: user.email,
        createdAt: new Date()
      });
      setNewTestimonial('');
      await loadTestimonials();
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que dicen mis pacientes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experiencias reales de personas que han mejorado su salud
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-rose-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-rose-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
              <p className="mt-4 text-sm text-gray-500">
                {new Date(testimonial.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {isPatient && (
          <div className="mt-12">
            <form onSubmit={handleSubmitTestimonial} className="max-w-lg mx-auto">
              <textarea
                value={newTestimonial}
                onChange={(e) => setNewTestimonial(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                rows={4}
                placeholder="Comparte tu experiencia..."
              />
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700"
                >
                  Publicar testimonio
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;