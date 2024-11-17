import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "Alimentación consciente",
    excerpt: "Descubre cómo la alimentación consciente puede mejorar tu relación con la comida y transformar tus hábitos alimenticios.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    date: "2024-02-28",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Mitos nutricionales",
    excerpt: "Desmontando los mitos más comunes sobre la nutrición y la pérdida de peso. Aprende a distinguir entre la ciencia y las modas.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    date: "2024-02-25",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Recetas saludables",
    excerpt: "Ideas deliciosas y nutritivas para mantener una alimentación equilibrada sin renunciar al sabor.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    date: "2024-02-22",
    readTime: "10 min"
  }
];

const BlogList = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Blog Nutricional
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Artículos, consejos y recursos sobre nutrición y salud
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime} de lectura</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600">
                  {blog.excerpt}
                </p>
                <div className="mt-4 text-rose-600 font-medium">
                  Leer más →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;