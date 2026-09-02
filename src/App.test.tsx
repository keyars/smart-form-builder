import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Formcraft', () => {
  it('renders the builder', () => {
    render(<App />);
    expect(screen.getByText('FORMCRAFT')).toBeTruthy();
    expect(screen.getByLabelText('Question label')).toHaveValue('Full name');
  });
});
