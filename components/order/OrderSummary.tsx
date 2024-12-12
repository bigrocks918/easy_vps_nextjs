import { VPSPlan } from '@/types/vps';

interface OrderSummaryProps {
  plan: VPSPlan;
}

export default function OrderSummary({ plan }: OrderSummaryProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Order Summary</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-700">Plan</span>
          <span className="font-semibold text-gray-900">{plan.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">vCPU Cores</span>
          <span className="text-gray-900">{plan.cpu} Cores</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">RAM</span>
          <span className="text-gray-900">{plan.ram}GB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Storage</span>
          <span className="text-gray-900">{plan.storage}GB NVMe</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Bandwidth</span>
          <span className="text-gray-900">{plan.bandwidth}TB</span>
        </div>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>${plan.price}/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}