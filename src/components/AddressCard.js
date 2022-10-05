import React from 'react';
import { Container, Icon, Image, Item, Segment } from 'semantic-ui-react';
const officeImages = importImages(10)
const ModelView = require('./ModelView')

function importImages(endLimit) {
    let images = []
    let i = 1
    while (i <= endLimit) {
        let img = require(`./../resources/images/${i++}.jpeg`)
        images = [...images, img]
    }
    return images
}

const itemClick = (e, website) => {
    console.log('Website is ', website);
}
function AddressCard(props) {
    const { organization, website, address, natureOfWork, services } = props.address
    const source = props.sourceCord()
    const { city, distance, location, latitude, longitude } = address
    const randomImage = officeImages[Math.floor(Math.random() * officeImages.length)]
    const params = encodeURIComponent(location)
    const imgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&markers=color:yellow%7Clabel:S%7C${source.latitude},${source.longitude}&markers=color:red%7Clabel:D%7C${latitude},${longitude}&zoom=12&size=700x700&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    const getMapImg = () => {return  <Image src={imgUrl} size = 'small'  />}
    return <Segment compact size='large'>
        <Item.Group width='large'>
            <Item onClick={(e) => itemClick(e, website)} clicable>
                <Item.Image size='tiny' src={randomImage} avatar  as = 'a' href={website}/>
                <Item.Content align='left' >
                    <div className="googleMap">
                        <ModelView.default segment={getMapImg} imgUrl = {imgUrl} addressObj = {props.address}/>
                    </div>
                    <Item.Header >
                        {organization}
                    </Item.Header>
                    <Item.Description className='customDescription'>
                        {natureOfWork}
                    </Item.Description>
                    <Container>
                        <Item.Meta >
                            <Icon name='point' /> <strong>{distance}</strong> kms away
                        </Item.Meta>
                        <Item.Meta >
                            <Icon name='address card' /> {city}
                        </Item.Meta>
                        <Item.Meta >
                            <Icon name='building outline' /> {location}
                        </Item.Meta>

                    </Container>
                </Item.Content>
            </Item>
        </Item.Group>
    </Segment>
}

export default AddressCard