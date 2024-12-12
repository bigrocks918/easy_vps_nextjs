import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">VPS Hosting Plans</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Starter</h2>
            <p className="text-4xl font-bold mb-6">$10<span className="text-lg text-gray-600">/mo</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2 vCPU Cores</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2GB RAM</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50GB NVMe Storage</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1TB Bandwidth</li>
            </ul>
            <Link href="/order/starter" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Order Now
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 transform scale-105">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">Popular</div>
            <h2 className="text-2xl font-bold mb-4">Professional</h2>
            <p className="text-4xl font-bold mb-6">$20<span className="text-lg text-gray-600">/mo</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4 vCPU Cores</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4GB RAM</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100GB NVMe Storage</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2TB Bandwidth</li>
            </ul>
            <Link href="/order/professional" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Order Now
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-6">$40<span className="text-lg text-gray-600">/mo</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 8 vCPU Cores</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 8GB RAM</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 200GB NVMe Storage</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4TB Bandwidth</li>
            </ul>
            <Link href="/order/enterprise" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}