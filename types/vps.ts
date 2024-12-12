export interface VPSPlan {
  id: string;
  name: string;
  price: number;
  cpu: number;
  ram: number;
  storage: number;
  bandwidth: number;
}

export const VPS_PLANS: Record<string, VPSPlan> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: 10,
    cpu: 2,
    ram: 2,
    storage: 50,
    bandwidth: 1
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    price: 20,
    cpu: 4,
    ram: 4,
    storage: 100,
    bandwidth: 2
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 40,
    cpu: 8,
    ram: 8,
    storage: 200,
    bandwidth: 4
  }
};