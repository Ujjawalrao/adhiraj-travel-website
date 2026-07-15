import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

function BookingForm({ isOpen, onClose, tourTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    tourDetails: tourTitle || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API_URL = import.meta.env.VITE_API_URL || '';

  const destinations = [
    "Kashmir", "Himachal Pradesh", "Uttarakhand", "Rajasthan", "Kerala", 
    "Goa", "Northeast India", "Andaman Islands", "Gujarat", "Leh Ladakh", 
    "Golden Triangle", "Amarnath", "Thailand", "Dubai", "Singapore", 
    "Nepal", "Bali", "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

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
        throw new Error(data.error || text || 'Failed to submit enquiry.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', destination: '', tourDetails: tourTitle || '' });
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden">
        
        {/* Header - Compact height */}
        <div className="border-b border-slate-100 px-5 py-3.5 flex items-center justify-between bg-slate-50">
          <h2 className="text-lg font-bold text-slate-900">Plan Your Journey</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 text-xl font-bold">
                ✓
              </div>
              <h3 className="text-base font-bold text-slate-900">Enquiry Submitted!</h3>
              <p className="text-xs text-slate-500">Our travel planner will connect with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full text-sm rounded-xl border border-slate-200 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#002F7F]/20 focus:border-[#002F7F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Contact Number"
                    className="w-full text-sm rounded-xl border border-slate-200 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#002F7F]/20 focus:border-[#002F7F]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Destination */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full text-sm rounded-xl border border-slate-200 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#002F7F]/20 focus:border-[#002F7F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full text-sm rounded-xl border border-slate-200 px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#002F7F]/20 focus:border-[#002F7F]"
                  >
                    <option value="" disabled>Select destination</option>
                    {destinations.map((dest, index) => (
                      <option key={index} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Tour Details Textarea */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tour Details *
                </label>
                <textarea
                  name="tourDetails"
                  value={formData.tourDetails}
                  onChange={handleChange}
                  required
                  placeholder="Mention number of travelers, dates, or specific customization requirements..."
                  rows="2"
                  className="w-full text-sm rounded-xl border border-slate-200 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#002F7F]/20 focus:border-[#002F7F] resize-none"
                />
              </div>

              {error && (
                <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {error}
                </div>
              )}
              {/* Action Buttons Block */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-xl py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition ${
                    loading ? 'cursor-not-allowed bg-slate-400' : 'bg-[#002F7F] hover:bg-[#00235e]'
                  }`}
                >
                  {loading ? 'Sending...' : 'Send enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;