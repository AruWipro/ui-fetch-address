import React, { useEffect, useState } from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import { getAllAddresses } from './../services/AddressService';
import Results from './Results';

function NoResults () {
    const [addresses, setAddress] = useState([])
    const [isButtonClicked, setButtonClick] = useState(false)
    
    useEffect(() => {
        async function loadAllAddresses(){
            const addresses = await getAllAddresses()
            console.log('All addresses are',addresses);
            setAddress(addresses)
        }
        loadAllAddresses()
    },[isButtonClicked])
    
    const loadFullData = () => {
        console.log('Load full data...');
        setButtonClick(true)
        return 
    }

    const getSourceCoordinates = () => {
        return {
          latitude:51.5144636,
          longitude:-0.142571,
      }
    }

    if(!isButtonClicked){
        console.log('Inside Not clicked...');
    return <Container fluid textAlign='center'>
        <Header as='h1' >
            Sorry! No Offices Found
        </Header>
        <Button raised color= 'orange' onClick={loadFullData}>View all partners </Button>
    </Container>
    }

    else {
        console.log('Inside Clicked...');
        return <Results offices = {addresses} sourceCoord = {getSourceCoordinates} isSearchRequested = {true}/>
    }
}



export default NoResults