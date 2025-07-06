import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../layouts/Layout';
import { Calendar, Clock, User, Stethoscope } from 'lucide-react';

export default function Schedule() {
  // Sample schedule data - in a real app, this would come from props
  const schedule = [
    {
      time: '08:00 - 09:00',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      room: 'Room 101',
      status: 'available'
    },
    {
      time: '09:00 - 10:00',
      doctor: 'Dr. Michael Brown',
      specialty: 'Neurologist',
      room: 'Room 203',
      status: 'booked'
    },
    {
      time: '10:00 - 11:00',
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      room: 'Room 105',
      status: 'available'
    },
    {
      time: '11:00 - 12:00',
      doctor: 'Dr. James Wilson',
      specialty: 'Orthopedist',
      room: 'Room 201',
      status: 'available'
    },
    {
      time: '13:00 - 14:00',
      doctor: 'Dr. Lisa Garcia',
      specialty: 'Pediatrician',
      room: 'Room 102',
      status: 'booked'
    },
    {
      time: '14:00 - 15:00',
      doctor: 'Dr. David Martinez',
      specialty: 'General Practice',
      room: 'Room 104',
      status: 'available'
    },
    {
      time: '15:00 - 16:00',
      doctor: 'Dr. Amanda Thompson',
      specialty: 'Gynecologist',
      room: 'Room 301',
      status: 'available'
    },
    {
      time: '16:00 - 17:00',
      doctor: 'Dr. Robert Lee',
      specialty: 'ENT Specialist',
      room: 'Room 202',
      status: 'booked'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'available' 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-red-100 text-red-800 border-red-200';
  };

  const getStatusText = (status: string) => {
    return status === 'available' ? 'Available' : 'Booked';
  };

  return (
    <Layout>
      <Head title="Doctor Schedule - Medicare Prima" />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Doctor Schedule</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View our daily doctor schedule and book appointments with available specialists.
            </p>
          </div>

          {/* Date Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                <span className="text-gray-600">
                  {new Date().toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous Day
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Today
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Next Day
                </button>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Legend</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 border border-green-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Available for booking</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-100 border border-red-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Already booked</span>
              </div>
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((slot, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-lg font-semibold text-gray-900">{slot.time}</span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(slot.status)}`}>
                    {getStatusText(slot.status)}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-900 font-medium">{slot.doctor}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Stethoscope className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{slot.specialty}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                    <span className="text-gray-600">{slot.room}</span>
                  </div>
                </div>

                <div className="mt-6">
                  {slot.status === 'available' ? (
                    <Link
                      href="/booking"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                    >
                      Book Appointment
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed font-medium"
                    >
                      Slot Unavailable
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {schedule.filter(slot => slot.status === 'available').length}
              </h3>
              <p className="text-gray-600">Available Slots</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {new Set(schedule.map(slot => slot.doctor)).size}
              </h3>
              <p className="text-gray-600">Doctors Available</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {schedule.filter(slot => slot.status === 'booked').length}
              </h3>
              <p className="text-gray-600">Appointments Booked</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need to Schedule an Appointment?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Our booking system is available 24/7. Schedule your appointment with your preferred doctor today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
