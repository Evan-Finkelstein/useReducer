import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('ColorPicker container', () => {
    it('changes the color and tests undo button', async () => {
        render(<App />);

        const colorInput = screen.getByLabelText('Color');
        const undo = screen.getByText('undo');

        fireEvent.change(colorInput, {
            target: {
                value: '#FF0000'
            }
        });

        fireEvent.change(colorInput, {
            target: {
                value: '#00FF00'
            }
        });
        fireEvent.change(colorInput, {
            target: {
                value: '#0000FF'
            }
        });

        fireEvent.click(undo);

        const display = await screen.findByText('Display');

        expect(display).toHaveStyle({
            backgroundColor: '#00FF00',
        });
    });

    it('changes the color and tests redo button', async () => {
        render(<App />);

        const colorInput = screen.getByLabelText('Color');
        const undo = screen.getByText('undo');
        const redo = screen.getByText('redo');

        fireEvent.change(colorInput, {
            target: {
                value: '#FF0000'
            }
        });

        fireEvent.change(colorInput, {
            target: {
                value: '#00FF00'
            }
        });
        fireEvent.change(colorInput, {
            target: {
                value: '#0000FF'
            }
        });

        fireEvent.click(undo);
        fireEvent.click(undo);
        fireEvent.click(redo);

        const display = await screen.findByText('Display');

        expect(display).toHaveStyle({
            backgroundColor: '#00FF00',
        });
    });
});
