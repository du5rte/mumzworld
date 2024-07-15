import { render, screen } from '@/utils/test-utils';
import ProductRating from './product-rating';

describe('ProductRating', () => {
  it('should render the rating correctly', () => {
    render(<ProductRating rating="4.5" />);
    const ratingElement = screen.getByText('4.5');
    expect(ratingElement).toBeDefined();
  });

  it('should render the reviews count correctly', () => {
    render(<ProductRating rating="4.5" reviews="10" />);
    const reviewsElement = screen.getByText('(10)');
    expect(reviewsElement).toBeDefined();
  });
});
