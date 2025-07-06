import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../layouts/Layout';

interface Appointment {
  id: number;
  appointment_date: string;
  appointment_time: string;
  status: string;
  notes?: string;
  doctor: {
    id: number;
    name: string;
    specialty: string;
    profile_image?: string;
  };
  patient_name: string;
  patient_email: string;
  patient_phone: string;
}

interface Props {
  appointment: Appointment;
}

export default function AppointmentSuccess({ appointment }: Props) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <Head title="Appointment Confirmed - Medicare Prima" />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12 text-center">
              <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Appointment Confirmed!</h1>
              <p className="text-green-100 text-lg">
                Your appointment has been successfully booked
              </p>
            </div>

            {/* Appointment Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Appointment Info */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Appointment ID</span>
                      <span className="font-semibold text-gray-900">#{appointment.id}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Date</span>
                      <span className="font-semibold text-gray-900">{formatDate(appointment.appointment_date)}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Time</span>
                      <span className="font-semibold text-gray-900">{appointment.appointment_time}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Status</span>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Doctor Information</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={appointment.doctor.profile_image || '/api/placeholder/80/80'}
                        alt={appointment.doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Dr. {appointment.doctor.name}
                        </h3>
                        <p className="text-gray-600">{appointment.doctor.specialty}</p>
                      </div>
                    </div>
                    <Link
                      href={`/doctors/${appointment.doctor.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View Doctor Profile
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Patient Info */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Patient Information</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                      <p className="text-gray-900 font-semibold">{appointment.patient_name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                      <p className="text-gray-900">{appointment.patient_email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                      <p className="text-gray-900">{appointment.patient_phone}</p>
                    </div>
                  </div>
                  {appointment.notes && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Notes</label>
                      <p className="text-gray-900">{appointment.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Important Information */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Information</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Please arrive 15 minutes before your appointment time
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bring your ID card and insurance documents (if applicable)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    A confirmation email has been sent to your email address
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Contact us at (021) 123-4567 if you need to reschedule
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/appointments/${appointment.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Appointment Details
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Book Another Appointment
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
