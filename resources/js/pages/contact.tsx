import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../layouts/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact Us - Medicare Prima" />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help. Contact our friendly team or visit us at our location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        Jl. Kesehatan No. 123<br />
                        Jakarta Pusat, 10110<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Emergency:</strong> (021) 123-4567</p>
                        <p><strong>General:</strong> (021) 765-4321</p>
                        <p><strong>Appointments:</strong> (021) 111-2222</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h3>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>General:</strong> info@medicareprima.com</p>
                        <p><strong>Support:</strong> support@medicareprima.com</p>
                        <p><strong>Appointments:</strong> appointments@medicareprima.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Emergency:</strong> 24/7</p>
                        <p><strong>General Practice:</strong> Mon-Fri 8:00AM - 8:00PM</p>
                        <p><strong>Weekend:</strong> Sat-Sun 9:00AM - 5:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Info */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
                <p className="text-blue-100 mb-6">
                  For medical emergencies, please call our emergency hotline immediately or visit our emergency department.
                </p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-semibold">Emergency Hotline</p>
                      <p className="text-2xl font-bold">(021) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Booking</option>
                    <option value="medical">Medical Inquiry</option>
                    <option value="billing">Billing & Insurance</option>
                    <option value="feedback">Feedback & Complaints</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Please describe your inquiry or concern..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h2>
                <p className="text-gray-600">
                  Located in the heart of Jakarta with easy access to public transportation.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Placeholder for map - in a real app, you'd integrate Google Maps or similar */}
                <div className="flex items-center justify-center h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Interactive Map</p>
                    <p className="text-gray-500">Medicare Prima Hospital Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
