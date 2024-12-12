import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">High-Performance VPS Hosting</h1>
            <p className="text-xl mb-8">Deploy your applications in seconds with our reliable VPS solutions</p>
            <Link href="/pricing" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EasyVPS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">High Performance</h3>
              <p className="text-gray-600">NVMe SSDs and latest generation processors for maximum speed</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-4">99.9% Uptime</h3>
              <p className="text-gray-600">Enterprise-grade infrastructure with guaranteed uptime</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Expert technical support available around the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">$10<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2 vCPU Cores</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2GB RAM</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50GB NVMe Storage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1TB Bandwidth</li>
              </ul>
              <Link href="/order/starter" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Select Plan
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-500 transform scale-105">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">Popular</div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-4xl font-bold mb-6">$20<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4 vCPU Cores</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4GB RAM</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100GB NVMe Storage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2TB Bandwidth</li>
              </ul>
              <Link href="/order/professional" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Select Plan
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">$40<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 8 vCPU Cores</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 8GB RAM</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 200GB NVMe Storage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4TB Bandwidth</li>
              </ul>
              <Link href="/order/enterprise" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Select Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}