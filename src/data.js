// Sample data. Later, replace these with responses from your Express/MongoDB API
// (for example GET /api/menu and GET /api/plans).

export const BRAND = 'HOMEDUTY';

export const steps = [
  { n: 1, title: 'Choose your meal', text: 'Browse the weekly menu and pick a box that fits your taste and appetite.' },
  { n: 2, title: 'Set your plan', text: 'Select days, delivery time and address. Pause or skip whenever plans change.' },
  { n: 3, title: 'Enjoy it fresh', text: 'Your tiffin arrives hot at your door, packed the way home does it.' },
];

export const dishes = [
  { id: 1, tag: 'Veg', name: 'Classic Thali', desc: 'Dal, seasonal sabzi, rice, rotis and a small sweet.', price: '[PRICE]' },
  { id: 2, tag: 'Light', name: 'Everyday Box', desc: 'Two rotis, sabzi and dal for a lighter lunch.', price: '[PRICE]' },
  { id: 3, tag: 'Comfort', name: 'Rajma Chawal Box', desc: 'Slow-cooked rajma, steamed rice, salad and pickle.', price: '[PRICE]' },
];

export const plans = [
  { id: 1, name: 'Trial', text: 'One tiffin, to try us before you commit.', unit: 'per tiffin', popular: false },
  { id: 2, name: 'Weekly', text: 'Six days of lunch, with free skips and pauses.', unit: 'per week', popular: false },
  { id: 3, name: 'Monthly', text: 'The best value for regular lunches, with priority delivery.', unit: 'per month', popular: true },
];

export const reasons = [
  { title: 'Cooked at home', text: 'Meals prepared by home cooks, not a factory line.' },
  { title: 'On time', text: 'Pick a delivery slot and track your order.' },
  { title: 'Flexible', text: 'Pause, skip or change your meal before the cutoff.' },
  { title: 'Easy to pay', text: 'Pay online, by UPI, or on delivery.' },
];
