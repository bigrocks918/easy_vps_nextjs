import { notFound } from 'next/navigation';
import { VPS_PLANS } from '@/types/vps';
import OrderSummary from '@/components/order/OrderSummary';
import LocationSelector from '@/components/order/LocationSelector';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface OrderPageProps {
  params: {
    plan: string;
  };
}

export default function OrderPage({ params }: OrderPageProps) {
  const plan = VPS_PLANS[params.plan];

  if (!plan) {
    notFound();
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Configure Your VPS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Select Location</h2>
              <LocationSelector
                selectedLocation="us-east"
                onLocationChange={() => {}}
              />

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Operating System</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Ubuntu 22.04', 'CentOS 9', 'Debian 11', 'Windows Server 2022'].map((os) => (
                    <button
                      key={os}
                      className="p-4 rounded-lg border border-gray-200 hover:border-blue-200 text-left bg-white text-gray-900"
                    >
                      <h3 className="font-semibold">{os}</h3>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Additional Options</h2>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                    <span className="ml-2">
                      <span className="font-semibold text-gray-900">Automated Backups</span>
                      <span className="text-gray-600 ml-2">+$5/mo</span>
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                    <span className="ml-2">
                      <span className="font-semibold text-gray-900">DDoS Protection</span>
                      <span className="text-gray-600 ml-2">+$10/mo</span>
                    </span>
                  </label>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <OrderSummary plan={plan} />
              <Button className="w-full mt-6">
                Continue to Payment
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}