import { useEffect, useState } from 'react';

const Fetch = () => {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMemes(data);
      });
  }, []);
  return (
    <div>
      {memes.map((meme) => (
        <img
          key={`${meme.id}`}
          src={`${meme.blank}`}
          alt={`${meme.name}`}
          width={100}
        />
        // <div key={`user-${user.id}`}>
      ))}
    </div>
  );
};
export default Fetch;

// import { useEffect, useState } from 'react';

// const Fetch = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
//   return (
//     <div>
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };
// export default Fetch;
