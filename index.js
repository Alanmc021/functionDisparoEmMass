// const firebase = require('firebase')
// const fetch = require('node-fetch');

// const firebaseConfig = {
//  
// };

// firebase.initializeApp(firebaseConfig);

// function main() {

//     firebase.database().ref('listaDeEmail').on('value', function (snapshot) {
//         let res = snapshotToArray(snapshot)
//         //console.log(res);
//         sendEmail(res)
//         //console.log(snapshotToArray(snapshot));
//     });

//     function snapshotToArray(snapshot) {
//         var returnArr = [];

//         snapshot.forEach(function (childSnapshot) {
//             var item = childSnapshot.val();
//             item.key = childSnapshot.key;

//             returnArr.push(item);
//         });

//         return returnArr;
//     };

//     function sendEmail(res) {

//         const array = res

//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow',

//         };

//         const resFinal = array.map((el) => {
//             fetch(`https://us-central1-pdt-app-fe29a.cloudfunctions.net/sendMailWelcome?email=${el.email}&name=alan`, requestOptions)
//                 .then(response => response.text())
//                 .then(result => console.log(result))
//                 .catch(error => console.log('error', error));
//         })

//     }

// }

// main()

const fetch = require('node-fetch');

const url = "https://dog.ceo/api/breeds/image/random"


fetch(url)
    .then((dogData) => { return dogData })
    .then((dogData) => { return dogData.json(); })
    .then((dogData) => { console.log(dogData.message); })
    .catch((err) => { console.log(err); })



