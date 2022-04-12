import React, { useState } from 'react';
import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';

const ColorPicker = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');
  const [text, setText] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'bgColor') setBgColor(target.value);
    if(target.name === 'fgColor') setFgColor(target.value);
    if(target.name === 'text') setText(target.value);
  };

  return (
    <>
      <Controls 
        bgColor={bgColor}
        fgColor={fgColor}
        text={text}
        handleChange={handleChange}
      />
      <Display 
        bgColor={bgColor}
        fgColor={fgColor}
        text={text}
      />
    </>
  );
};

export default ColorPicker;



// export default class ColorPicker extends Component {
//   state = {
//     bgColor: '#FFFFFF',
//     fgColor: '#000000',
//     text: 'Hello'
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }
//   render() {
//     const { bgColor, fgColor, text } = this.state;
//     return (
//       <>
//         <Controls 
//           bgColor={bgColor}
//           fgColor={fgColor}
//           text={text}
//           handleChange={this.handleChange}
//         />
//         <Display 
//           bgColor={bgColor}
//           fgColor={fgColor}
//           text={text}
//         />
//       </>
//     );
//   }
// }

