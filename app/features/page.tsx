export default function Features() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Performance */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">High Performance Infrastructure</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">NVMe SSD Storage</h3>
                  <p className="text-gray-600">Lightning-fast storage with superior I/O performance</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Latest Gen CPUs</h3>
                  <p className="text-gray-600">High-performance processors for maximum speed</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">10Gbps Network</h3>
                  <p className="text-gray-600">Ultra-fast network connectivity</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Enterprise-Grade Security</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">DDoS Protection</h3>
                  <p className="text-gray-600">Advanced protection against DDoS attacks</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Automated Backups</h3>
                  <p className="text-gray-600">Daily backups with easy restore options</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Firewall Management</h3>
                  <p className="text-gray-600">Custom firewall rules and security groups</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Easy Management</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Intuitive Control Panel</h3>
                  <p className="text-gray-600">User-friendly dashboard for VPS management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">One-Click Applications</h3>
                  <p className="text-gray-600">Install popular applications with a single click</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">API Access</h3>
                  <p className="text-gray-600">Full API access for automation</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">24/7 Support</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Expert Technical Support</h3>
                  <p className="text-gray-600">Round-the-clock assistance from our technical team</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Knowledge Base</h3>
                  <p className="text-gray-600">Comprehensive documentation and tutorials</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <h3 className="font-semibold">Community Forum</h3>
                  <p className="text-gray-600">Active community for knowledge sharing</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}