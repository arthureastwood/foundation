import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16 xl:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-telegram mb-6">Empowering Children, Transforming Communities</h2>
        <p className="text-lg text-gray-600 mb-10">
          Together, we nurture hope and create opportunities for every child to thrive.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8">
        <div className="bg-binance rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-telegram mb-2">Vision</h3>
          <p className="text-gray-600">An empowered child for a socio economically stable community.</p>
        </div>
        <div className="bg-binance rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-telegram mb-2">Mission</h3>
          <p className="text-gray-600">To enhance community development and safe guarding children through economic empowerment,
children's rights and advocacy within Bugiri district so that they enjoy their rights in full potential.</p>
        </div>
        <div className="bg-binance rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-telegram mb-2">Goal</h3>
          <p className="text-gray-600">To create a safe, supportive and nurturing environment that enables children thrive and reach their
full potential hence addressing their basic needs.</p>
        </div>
        <div className="bg-binance rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-telegram mb-2">Programs</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Agriculture</li>
            <li>Sports and art</li>
            <li>Climate change</li>
            <li>Children welfare</li>
            <li>Children education</li>
            <li>Community skilling</li>
            <li>Community sensitization</li>
            <li>Community outreach programs</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero