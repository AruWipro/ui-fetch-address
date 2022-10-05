const StaticMaps = require('staticmaps')
const options= {
    width: 500,
    height: 500,
}
const map = new StaticMaps(options);
const marker = {
    img: `${__dirname}/resources/images/marker.png`, // can also be a URL,
    offsetX: 24,
    offsetY: 48,
    width: 20,
    height: 20,
   };
marker.coord = [13.437524,52.4945528];
map.addMarker(marker);
marker.coord = [13.430524,52.4995528];
map.addMarker(marker);
var line = {
    coords: [
        [13.437524,52.4945528],
        [13.430524,52.4995528],
    ],
    color: '#0000FFBB',
    width: 2
  };
  console.log(`${__dirname}`)
   displaymap = async() => {

       map.addLine(line);
       await map.render();
       console.log('Afrter line...');
       await map.image.buffer('image/jpeg', { quality: 100 });
       await map.image.save('./img.jpeg');
  }

  displaymap().then(() => console.log("Done")).catch((e) => console.log(e))