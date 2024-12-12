import Card from '@/components/ui/Card';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About EasyVPS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At EasyVPS, we&apos;re committed to providing reliable, high-performance virtual private servers that empower businesses and developers to build and scale their applications with confidence.
            </p>
            <p className="text-gray-600">
              Founded in 2023, we&apos;ve grown to serve thousands of customers worldwide, maintaining our core values of reliability, performance, and exceptional customer support.
            </p>
          </div>

          <Card>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Industry Experience</h3>
                  <p className="text-gray-600">Years of expertise in cloud infrastructure</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Customer First</h3>
                  <p className="text-gray-600">Dedicated to providing exceptional service</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-gray-600">Constantly improving our infrastructure</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Our Global Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Global Locations</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Expert Support</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}