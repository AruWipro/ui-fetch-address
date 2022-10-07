import React from 'react';
import { Container, Icon, Image, Item, Segment } from 'semantic-ui-react';
const imageUtils = require('./../../utils/ImageUtils')
const ModelView = require('../model/ModelView')



const itemClick = (e, website) => {
    console.log('Website is ', website);
}
function AddressCard(props) {
    const { organization, website, address, natureOfWork, services } = props.address
    const source = props.sourceCord()
    const { city, distance, location, latitude, longitude } = address
    const officeImages = imageUtils.default(10)
    const randomImage = officeImages[Math.floor(Math.random() * officeImages.length)]
    const params = encodeURIComponent(location)
    const imgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&markers=color:yellow%7Clabel:S%7C${source.latitude},${source.longitude}&markers=color:red%7Clabel:D%7C${latitude},${longitude}&zoom=12&size=700x700&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    
    const getMapImg = () => { return <Image src={imgUrl} size='small' /> }
    
    const getGoogleImages = () => {
        if (distance) {
            return <div className="googleMap">
                <ModelView.default segment={getMapImg} imgUrl={imgUrl} addressObj={props.address} />
            </div>
        }
    }

    const showDistance = () => {
        if(distance) {
            return <Item.Meta >
               <Icon name='point' /> <strong>{distance}</strong> kms away
            </Item.Meta>
        }
    }
    return <Segment tcompact size='large' data-testid='adressCard-test'>
        <Item.Group width='large'>
            <Item onClick={(e) => itemClick(e, website)} clicable>
                <Item.Image size='tiny' src={randomImage} avatar as='a' href={website} />
                <Item.Content align='left' >
                    {getGoogleImages()}
                    <Item.Header data-testid='adressCard-header'>
                        {organization}
                    </Item.Header>
                    <Item.Description className='customDescription'>
                        {natureOfWork}
                    </Item.Description>
                    <Container>
                        {showDistance()}
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