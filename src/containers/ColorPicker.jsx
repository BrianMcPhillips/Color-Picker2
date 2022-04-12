import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';

export default class ColorPicker extends Component {
  state = {
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    text: 'Hello'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { bgColor, fgColor, text } = this.state;
    return (
      <>
        <Controls 
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
          handleChange={this.handleChange}
        />
        <Display 
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
        />
      </>
    );
  }
}

