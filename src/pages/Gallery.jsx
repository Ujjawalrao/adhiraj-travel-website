import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { DataContext } from "../context/DataContext";


function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { domesticLocations,  internationalLocations } = useContext(DataContext);

  return (
    <>
      <Helmet>
        <title>Gallery - Adhiraj grand holidays</title>
        <meta name="description" content="Browse our stunning gallery of travel destinations and adventures captured from around the world." />
        <meta name="keywords" content="travel gallery, destination photos, travel inspiration, travel photography" />
      </Helmet>

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-12 text-center">
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Our Gallery</h1>
      </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domesticLocations.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/30 transition hover:-translate-y-1"
            >
              <img
                src={image.image}
                alt={image.alt}
                loading="lazy"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}

          {internationalLocations.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/30 transition hover:-translate-y-1"
            >
              <img
                src={image.image}
                alt={image.alt}
                loading="lazy"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 p-6">
            <div className="relative w-full max-w-4xl rounded-[2rem] bg-white shadow-2xl shadow-slate-300/60">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 rounded-full border border-slate-300/80 bg-white px-4 py-2 text-xl text-slate-900 transition hover:bg-slate-100"
              >
                ✕
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="h-[480px] w-full rounded-[2rem] object-cover"
              />

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery;
