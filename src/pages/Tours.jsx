import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card';

function Tours() {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const allTours = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      title: 'Taj Mahal Wonder',
      description: 'Discover the beauty of Taj Mahal and the cultural heritage of Agra',
      price: 8999,
      rating: 4.9,
      location: 'Agra',
      category: 'cultural'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1529373255842-f06c1b1a7f5f?w=500&h=300&fit=crop',
      title: 'Royal City Explorer',
      description: 'Experience the vibrant culture and stunning palaces of Jaipur',
      price: 7499,
      rating: 4.7,
      location: 'Jaipur',
      category: 'cultural'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1583009812694-c3b5b4ef67c5?w=500&h=300&fit=crop',
      title: 'Lake Palace Adventure',
      description: 'Relax by pristine lakes and explore elegant palaces in Udaipur',
      price: 9499,
      rating: 4.8,
      location: 'Udaipur',
      category: 'adventure'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1599579810694-b5ac4dd8fdf5?w=500&h=300&fit=crop',
      title: 'Spiritual Journey',
      description: 'Sacred temples and ghats along the holy Ganges River in Varanasi',
      price: 6999,
      rating: 4.9,
      location: 'Varanasi',
      category: 'cultural'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
      title: 'Beach Bliss',
      description: 'Golden beaches, water sports, and vibrant nightlife in Goa',
      price: 7999,
      rating: 4.8,
      location: 'Goa',
      category: 'beach'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      title: 'Backwater Paradise',
      description: 'Scenic houseboat rides through lush green backwaters of Kerala',
      price: 8499,
      rating: 4.7,
      location: 'Kerala',
      category: 'nature'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      title: 'Mountain Escape',
      description: 'Cool mountain air and scenic valleys in Himachal Pradesh',
      price: 7299,
      rating: 4.6,
      location: 'Himachal Pradesh',
      category: 'nature'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      title: 'Alpine Adventure',
      description: 'Trekking and adventure sports in the majestic mountains of Manali',
      price: 8299,
      rating: 4.8,
      location: 'Manali',
      category: 'adventure'
    }
  ];

  const filteredTours = allTours.filter((tour) => {
    return selectedLocation === 'all' || tour.location === selectedLocation;
  });

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'Agra', name: 'Agra' },
    { id: 'Jaipur', name: 'Jaipur' },
    { id: 'Udaipur', name: 'Udaipur' },
    { id: 'Varanasi', name: 'Varanasi' },
    { id: 'Goa', name: 'Goa' },
    { id: 'Kerala', name: 'Kerala' },
    { id: 'Himachal Pradesh', name: 'Himachal Pradesh' },
    { id: 'Manali', name: 'Manali' }
  ];

  return (
    <>
      <Helmet>
        <title>Tours & Travel Packages | TravelVerse - Explore the World</title>
        <meta name="description" content="Browse our extensive collection of travel tours and vacation packages. Find your perfect destination with TravelVerse." />
        <meta name="keywords" content="travel tours, vacation packages, destinations, tour booking" />
      </Helmet>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C77D0F]">Tours</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Explore Our Tours</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover amazing destinations crafted just for you, from beach escapes to mountain adventures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-300/70 bg-white p-8 shadow-2xl shadow-slate-100/30">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Filter by Location</h2>
              <p className="mt-2 text-sm text-slate-600">Choose your desired destination.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedLocation === location.id
                      ? 'bg-[#C77D0F] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredTours.map((tour) => (
            <Card key={tour.id} {...tour} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Tours;
