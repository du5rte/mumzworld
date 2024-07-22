import { render, screen } from '@/utils/tests/react-native';

import ProductStats from './product-stats';

describe('ProductStats Component', () => {
  it('should render just rating', () => {
    render(<ProductStats rating="4.5" />);
    expect(screen.getByText(/4.5 rating/i)).toBeDefined();
  });

  it('should render rating and reviews', () => {
    render(<ProductStats rating="4.5" reviews="100" />);
    expect(screen.getByText(/4.5 rating/i)).toBeDefined();
    expect(screen.getByText(/100 reviews/i)).toBeDefined();
  });

  it('should render just reviews and sold', () => {
    render(<ProductStats reviews="100" sold="200" />);
    expect(screen.getByText(/100 reviews/i)).toBeDefined();
    expect(screen.getByText(/200 sold/i)).toBeDefined();
  });

  it('should render just rating and sold', () => {
    render(<ProductStats rating="4.5" sold="200" />);
    expect(screen.getByText(/4.5 rating/i)).toBeDefined();
    expect(screen.getByText(/200 sold/i)).toBeDefined();
  });

  it('should render rating, review, and sold', () => {
    render(<ProductStats rating="4.5" reviews="100" sold="200" />);
    expect(screen.getByText(/4.5 rating/i)).toBeDefined();
    expect(screen.getByText(/100 reviews/i)).toBeDefined();
    expect(screen.getByText(/200 sold/i)).toBeDefined();
  });
});
