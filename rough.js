function getMeme() {
  fetch('https://api.memegen.link/images')
    .then((res) => res.json())
    .then((data) => {
      let HTMLContent = `<table>
                         <tr>
                           <th>Meme Template</th>
                           <th>Meme Image</th>
                         </tr>
     `;
    })
    .catch((err) => console.log(err));
}

// function getMeme(){
//   fetch("https://api.memegen.link/images")
//   .then(res => res.json())
//   .then(data => {

//      let HTMLContent = `<table>
//                          <tr>
//                            <th>Meme Template</th>
//                            <th>Meme Image</th>
//                          </tr>
//      `;
//      for(let i = 0; i < 5; i++){
//        let memeImgURL = data[i].url;
//        let memeName = data[i].template;

//        HTMLContent += `
//        <tr>
//          <td>${memeName}</td>
//          <td><img width="100" height="100" src="${memeImgURL}"></td>
//          </tr>
//        `;
//      }
//      HTMLContent += `</table>`;

//      document.getElementById("memes").innerHTML = HTMLContent;

//   })
//   .catch(err => console.log(err));
// }
