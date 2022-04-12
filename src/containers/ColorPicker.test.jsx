import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorPicker from './ColorPicker';


describe('ColorPicker container', () => {
  it('changes the background color', () => {
    render(<ColorPicker />);

    const bgInput = screen.getByLabelText('Background Color');
    const display = screen.getByTestId('display');

    fireEvent.change(bgInput, { target: { value: '#00FF00' } });

    return waitFor(() => {
      expect(display).toHaveStyle({ backgroundColor: '#00FF00' });
    });
  });

  it('changes the fore ground color', () => {
    render(<ColorPicker />);

    const fgInput = screen.getByLabelText('Foreground Color');
    const display = screen.getByTestId('display');

    fireEvent.change(fgInput, { target: { value: '#FF0000' } });

    return waitFor(() => {
      expect(display).toHaveStyle({ color: '#FF0000' });
    });
  });

  it('changes the text', () => {
    render(<ColorPicker />);

    const textInput = screen.getByLabelText('Text');
    const display = screen.getByTestId('display');

    userEvent.type(textInput, 'Yoo mama');
    // fireEvent.change(textInput, {
    //   target: {
    //     value: 'Yoo mama'
    //   }
    // });

    return waitFor(() => {
      expect(display).toHaveTextContent('Yoo mama');
    });
  });
});
