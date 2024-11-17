import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogs = {
  1: {
    title: "Alimentación consciente",
    content: `
      La alimentación consciente es una práctica que nos ayuda a reconectar con nuestra forma de comer...
      
      [Contenido completo del artículo]
    `,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    date: "2024-02-28",
    readTime: "5 min"
  },
  // Añadir más posts aquí
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogs[id as keyof typeof blogs];

  if (!post) {
    return (
      <div className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <p>Artículo no encontrado</p>
          <Link to="/blog" className="text-rose-600">Volver al blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-rose-600 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <h1>{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-8">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} de lectura</span>
          </div>
          
          <div className="mt-8">
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;