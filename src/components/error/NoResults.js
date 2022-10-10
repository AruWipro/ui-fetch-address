import React, { useEffect, useState } from 'react';
import { Button, Container, Header, Message } from 'semantic-ui-react';
import { getAllAddresses } from './../../services/AddressService';
import Results from './../results/Results';

function NoResults (props) {
    const [addresses, setAddress] = useState([])
    const [isButtonClicked, setButtonClick] = useState(false)
    
     useEffect(() => {
        setAddress([])
        setButtonClick(false)
     },[props.offices])
    
    const loadFullData = async() => {
        console.log('Load full data...');
        setButtonClick(true)
        async function loadAllAddresses(){
            const savedAdd = localStorage.getItem('addresses')
            let obj = JSON.parse(savedAdd)
            console.log('Loading from session...',obj);
            if(!obj){
                obj = await getAllAddresses()
                console.log('Setting to session...');
                localStorage.setItem('addresses',JSON.stringify(obj))
            }
            setAddress(obj)
            console.log('All addresses are',obj);
        }
        await loadAllAddresses()
    }

    const getSourceCoordinates = () => {
        return {
          latitude:51.5144636,
          longitude:-0.142571,
      }
    }
    console.log('Addresses are',addresses);
   
    if(addresses.length === 0){
        console.log('Inside Not addresses...');
    return <Container fluid textAlign='center'>
        <Message negative compact padded color='red'>
        <Header as='h1' >
            Sorry! No Offices Found
        </Header>
        <p>
            Please update your location or increase the distance
        </p>
        
        <Button raised color= 'orange' onClick={loadFullData}>View all partners </Button>
        </Message>
    </Container>
    }

    else if (isButtonClicked && addresses.length > 0)  {
        console.log('Inside addresses...');
        return <Results offices = {addresses} sourceCoord = {getSourceCoordinates} isSearchRequested = {true}/>
    }
}



export default NoResults