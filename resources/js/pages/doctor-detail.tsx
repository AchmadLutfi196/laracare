import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../layouts/Layout';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  profile_image: string;
  bio: string;
  education: string;
  rating: number;
  price: number;
  is_available: boolean;
  review_count: number;
  certifications?: string[];
  languages?: string[];
  consultation_types?: string[];
  schedule?: any;
}

interface Props {
  doctor: Doctor;
}

export default function DoctorDetail({ doctor }: Props) {
  return (
    <Layout>
      <Head title={`Dr. ${doctor.name} - Specialist in ${doctor.specialty}`} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/doctors"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Doctors
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={doctor.profile_image || '/api/placeholder/200/200'}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
                <div className="text-center md:text-left text-white">
                  <h1 className="text-3xl font-bold mb-2">Dr. {doctor.name}</h1>
                  <p className="text-xl text-blue-100 mb-3">{doctor.specialty}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{doctor.rating}/5</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{doctor.experience} years experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About Section */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. {doctor.name}</h2>
                    <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                  </div>

                  {/* Education Section */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Education & Qualifications</h2>
                    <p className="text-gray-600 leading-relaxed">{doctor.education}</p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialization</h2>
                    <div className="inline-block">
                      <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {doctor.specialty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Consultation Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Consultation Fee</span>
                        <span className="font-semibold text-green-600">${doctor.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Status</span>
                        <span className={`font-semibold ${doctor.is_available ? 'text-green-600' : 'text-red-600'}`}>
                          {doctor.is_available ? 'Available' : 'Not Available'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  {doctor.certifications && doctor.certifications.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                      <div className="space-y-2">
                        {doctor.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Languages */}
                  {doctor.languages && doctor.languages.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((language, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Book Appointment Button */}
                  <Link
                    href={`/booking?doctor_id=${doctor.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
