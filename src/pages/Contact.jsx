import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';

function Contact() {
  const { domesticLocations, internationalLocations } = useContext(DataContext);
  const destinationOptions = [
    ...(domesticLocations || []),
    ...(internationalLocations || [])
  ].map((location) => location.name);

  const uniqueOptions = [...new Set(destinationOptions)];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    tourDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API_URL = import.meta.env.VITE_API_URL || '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const requestUrl = API_URL ? `${API_URL}/api/enquiry` : '/api/enquiry';
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      let data = {};
      if (text) {
        try {
          data = JSON.parse(text);
        } catch (parseError) {
          console.warn('Unable to parse response JSON:', parseError, text);
        }
      }

      if (!response.ok) {
        throw new Error(data.error || text || 'Failed to send your message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', destination: '', tourDetails: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Adhiraj grand holidays</title>
        <meta name="description" content="Contact TravelVerse for any travel inquiries, bookings, or support. Reach out to our team of travel experts." />
        <meta name="keywords" content="contact travel company, travel support, booking inquiry" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 selection:bg-[#002F7F]/10 selection:text-[#002F7F]">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          {/* ── HEADER SECTION ── */}
          <div className="mb-14 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
            >
              Get In Touch
            </motion.h1>
          </div>

          {/* ── MAIN CONTENT GRID ── */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            
            {/* LEFT COLUMN: MESSAGE FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Send us a Message</h2>
              <p className="mt-1 text-sm text-slate-500">Fields marked with an asterisk (*) are required.</p>

              {submitted && (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 text-sm font-medium text-emerald-800 flex items-center gap-2"
                >
                  <span className="text-emerald-600 font-bold">✓</span> Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                {[
                  { label: 'Full Name *', id: 'name', type: 'text', name: 'name', placeholder: 'Enter your name', required: true },
                  { label: 'Email Address *', id: 'email', type: 'email', name: 'email', placeholder: 'Enter your email', required: true },
                  { label: 'Phone Number *', id: 'phone', type: 'tel', name: 'phone', placeholder: 'Enter your phone number', required: true }
                ].map((field) => (
                  <div key={field.id} className="space-y-2 text-sm">
                    <label htmlFor={field.id} className="block font-semibold text-slate-700">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#002F7F] focus:bg-white focus:ring-4 focus:ring-[#002F7F]/5 font-medium"
                    />
                  </div>
                ))}

                <div className="space-y-2 text-sm">
                  <label htmlFor="destination" className="block font-semibold text-slate-700">Destination *</label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 focus:border-[#002F7F] focus:bg-white focus:ring-4 focus:ring-[#002F7F]/5 font-medium"
                  >
                    <option value="" disabled>Select destination</option>
                    {uniqueOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 text-sm">
                  <label htmlFor="message" className="block font-semibold text-slate-700">Message *</label>
                  <textarea
                    id="tourDetails"
                    name="tourDetails"
                    value={formData.tourDetails}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your travel plans, preferred dates, group size, or package notes..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#002F7F] focus:bg-white focus:ring-4 focus:ring-[#002F7F]/5 font-medium resize-none"
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 ${
                    loading ? 'bg-slate-400 cursor-not-allowed shadow-none' : 'bg-[#002F7F] hover:bg-[#0045b8] hover:shadow-lg hover:shadow-[#002F7F]/20 active:scale-[0.99]'
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
            
            {/* RIGHT COLUMN: CONTACT INFO & HOURS */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Core Directory Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Contact Information</h2>
                
                {[
                  {
                    icon: <FiPhone className="h-5 w-5 text-[#002F7F]" />,
                    title: 'Phone Support',
                    details: ['+91 97173 24311', '+91 9310157844']
                  },
                  {
                    icon: <FiMail className="h-5 w-5 text-[#002F7F]" />,
                    title: 'Email Communications',
                    details: ['adhirajgrandholidays@gmail.com']
                  },
                  {
                    icon: <FiMapPin className="h-5 w-5 text-[#002F7F]" />,
                    title: 'Registered Office',
                    details: ['Office No 32', 'Shamli Road, Near Budhana Mod', 'Muzaffarnagar, Uttar Pradesh - 251001']
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#002F7F]/5 border border-[#002F7F]/10 transition-colors duration-300 group-hover:bg-[#002F7F]/10">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</h3>
                      <div className="mt-1 space-y-0.5">
                        {item.details.map((line) => (
                          <p key={line} className="text-sm text-slate-600 font-normal">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours Segment */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200">
                  <FiClock className="h-5 w-5 text-slate-500" />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">Business Operations</h3>
                  <div className="mt-3 divide-y divide-slate-200 text-xs font-semibold text-slate-600">
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-slate-400">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-slate-400">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-slate-400">Sunday</span>
                      <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── MAP GEOLOCATION DISPLAY ── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 bg-slate-50 px-6 py-4 flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Find Our Office Location</h2>
            </div>
            <div className="relative w-full grayscale-[15%] contrast-[105%] transition-all duration-500 hover:grayscale-0">
              <iframe
                src="https://maps.google.com/maps?q=Muzaffarnagar,%20Uttar%20Pradesh%20-%20251001&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TravelVerse Corporate Headquarters"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default Contact;