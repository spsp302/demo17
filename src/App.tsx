import React from 'react';
import {
  Users,
  Lightbulb,
  Network,
  Globe2,
  BookOpen,
  Building2,
  GraduationCap,
  HandshakeIcon,
} from 'lucide-react';
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empowering AYUSH Startups
              <span className="block text-green-600">Transforming Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A unified platform connecting Startups, Investors, Incubators, and Government 
              Agencies in the AYUSH ecosystem to foster innovation and growth.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Get Started
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Image Upload Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Share Your AYUSH Innovations
          </h2>
          <ImageUploader />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Connecting the AYUSH Startup Ecosystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: 'Stakeholder Network',
                description: 'Connect with startups, investors, and mentors in the AYUSH sector',
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-green-600" />,
                title: 'Innovation Hub',
                description: 'Access resources and tools to drive innovation in healthcare',
              },
              {
                icon: <Network className="w-8 h-8 text-green-600" />,
                title: 'Global Reach',
                description: 'Expand your reach to international markets and partnerships',
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: 'Knowledge Base',
                description: 'Comprehensive guides and resources for entrepreneurs',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Who Benefits?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-12 h-12 text-green-600" />,
                title: 'Startups',
                description: 'Access funding, mentorship, and resources to scale your AYUSH venture',
              },
              {
                icon: <HandshakeIcon className="w-12 h-12 text-green-600" />,
                title: 'Investors',
                description: 'Discover promising opportunities in the growing AYUSH sector',
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-green-600" />,
                title: 'Incubators',
                description: 'Connect with innovative startups and support their growth journey',
              },
            ].map((stakeholder, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="mb-6">{stakeholder.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{stakeholder.title}</h3>
                <p className="text-gray-600">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Global Impact Through Traditional Wisdom
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join a thriving community of innovators bringing traditional AYUSH practices 
                to the modern world. Together, we're building a healthier future by combining 
                ancient wisdom with contemporary science.
              </p>
              <div className="flex items-center gap-4">
                <Globe2 className="w-8 h-8 text-green-600" />
                <span className="text-xl font-semibold text-gray-900">
                  Connecting AYUSH innovators worldwide
                </span>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf7?auto=format&fit=crop&w=800&q=80"
                alt="Traditional medicine and modern science"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>Mission</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Documentation</li>
                <li>Guidelines</li>
                <li>Success Stories</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>Events</li>
                <li>Forums</li>
                <li>Newsletter</li>
                <li>Social Media</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2025 Startup AYUSH Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;