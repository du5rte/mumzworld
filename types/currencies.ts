export const currencies = ['USD', 'AED'] as const;
export type Currency = (typeof currencies)[number];
