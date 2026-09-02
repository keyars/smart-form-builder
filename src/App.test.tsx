import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Formcraft', () => {
  it('renders the builder with the starter question', () => {
    render(<App />);
    expect(screen.getByText('FORMCRAFT')).toBeTruthy();
    expect(screen.getByDisplayValue('Full name')).toBeTruthy();
  });
});
