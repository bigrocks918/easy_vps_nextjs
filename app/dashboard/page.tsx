import Card from '@/components/ui/Card';

export default function Dashboard() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Active VPS</h3>
            <p className="text-3xl font-bold text-blue-600">3</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Total Usage</h3>
            <p className="text-3xl font-bold text-blue-600">75%</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Billing Status</h3>
            <p className="text-green-500 font-semibold">Up to date</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Your VPS Instances</h2>
            <div className="space-y-4">
              {/* Sample VPS instances */}
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Web Server 1</h4>
                    <p className="text-sm text-gray-600">2 vCPU • 2GB RAM • 50GB Storage</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Running</span>
                </div>
              </div>
              {/* Add more instances as needed */}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <p className="text-gray-600">Server restart - Web Server 1</p>
                <span className="ml-auto text-gray-400">2h ago</span>
              </div>
              {/* Add more activity items */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}