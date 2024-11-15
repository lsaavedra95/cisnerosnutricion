import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "Alimentación consciente",
      excerpt: "Descubre cómo la alimentación consciente puede mejorar tu relación con la comida.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Mitos nutricionales",
      excerpt: "Desmontando los mitos más comunes sobre la nutrición y la pérdida de peso.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Recetas saludables",
      excerpt: "Ideas deliciosas y nutritivas para mantener una alimentación equilibrada.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog Nutricional
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Últimos artículos y consejos sobre nutrición y salud
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Leer más →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;