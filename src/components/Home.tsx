import React from 'react';

import { BookOpen, Users, Trophy, ArrowRight, GraduationCap } from 'lucide-react';

function Home() {
 
  return (
    <div className="min-h-screen bg-white">

      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Unlock Your Academic Potential
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Expert tutoring services tailored to your learning needs. Join thousands of successful students who achieved their academic goals with us.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center hover:bg-blue-50 transition-colors">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
                  alt="Students studying"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our Tutoring Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-blue-600" />}
                title="Expert Tutors"
                description="Learn from qualified and experienced tutors who are passionate about teaching."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="Personalized Learning"
                description="Get customized study plans that match your learning style and pace."
              />
              <FeatureCard
                icon={<Trophy className="h-8 w-8 text-blue-600" />}
                title="Proven Results"
                description="Join our community of successful students who consistently achieve better grades."
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your first session today and experience the difference quality tutoring can make in your academic journey.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Schedule a Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                View Our Programs
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;