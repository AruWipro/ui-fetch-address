const loadImages = (endLimit)=> {
    let images = []
    let i = 1
    while (i <= endLimit) {
        let img = require(`./../resources/images/${i++}.jpeg`)
        images = [...images, img]
    }
    return images
}
 export default loadImages