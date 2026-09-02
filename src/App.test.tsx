import {describe,it,expect} from 'vitest';
import {render,screen} from '@testing-library/react';
import App from './App';
describe('Formcraft',()=>{it('renders the builder',()=>{render(<App/>);expect(screen.getByText('FORMCRAFT')).toBeTruthy();expect(screen.getByText('Full name')).toBeTruthy();});});
