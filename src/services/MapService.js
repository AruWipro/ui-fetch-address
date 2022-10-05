// const StaticMaps = require('staticmaps')

// const options = {
//     width: 500,
//     height: 500,
// }
// const map = new StaticMaps(options);


// const marker = {
//     img: `${__dirname}/../resources/images/marker.png`, // can also be a URL,
//     offsetX: 24,
//     offsetY: 48,
//     width: 20,
//     height: 20,
// };

// const drawLine = ({ lat1, long1, lat2, long2 }) => {
//     const polyline = {
//         coords: [
//             [lat1, long1],
//             [lat2, long2],
//           [13.40538,52.510632]
//         ],
//         color: '#0000FFBB',
//         width: 3
//       };
    
//       map.addLine(polyline);
// }

// const getStaticImage = async ({ lat1, long1, lat2, long2 }) => {
//     const imageName = `${Date.now()}.jpeg`
//     marker.coord = [lat1, long1];
//     map.addMarker(marker);
//     marker.coord = [lat2, long2];
//     map.addMarker(marker);
//     map.addLine(drawLine(lat1, long1, lat2, long2));
//     await map.render();
//     await map.image.buffer('image/jpeg', { quality: 100 });
//     await map.image.save(`./../resources/images/maps/${imageName}.jpeg`);
//     return imageName
// }

// module.exports = {getStaticImage}