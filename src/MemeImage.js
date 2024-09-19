// import { useState } from 'react';

export default function MemeImage(props) {
  return (
    <img
      src={`https://api.memegen.link/images/${props.template}/${props.topText}/${props.bottomText}.png?height=450&width=450`}
    />
  );
}

// MemeImage.defaultProps = {
//   template: 'ugandanknuck',
//   topText: 'top',
//   bottomText: 'bottom',
// };

// const MemeImage = ({ template = 'ugandanknuck', topText = 'My Prop' }) => (
//   <img
//     src={`https://api.memegen.link/images/${props.template}/${props.topText}/${props.bottomText}.png?height=450&width=450`}
//   />
// );
