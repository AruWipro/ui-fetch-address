import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import AppHeader from './components/header/AppHeader';
import Results from './components/results/Results';
import Search from './components/searchForm/Search';
const {getAdressWithInRange} = require('./services/AddressService')

function App() {
  const [range, setRange] = useState(100)
  const [searchResult, setSearchResult] = useState([]);
  const [startSearch, setStartSearch] = useState(false)
  const [sourceLatitude, setSourceLatitude] = useState()
  const [sourceLongitude, setSourceLongitude] = useState()
  const [isDataLoaded,setDataLoaded] = useState(false)
  
  const filterPlaces = (range, lat, long) => {
    const request = {
      latitude: lat || sourceLatitude,
      longitude: long || sourceLongitude,
      range: range
    }
    return  getAdressWithInRange(request)
  }
  
  const getSourceCoordinates = () => {
    return {
      latitude:sourceLatitude,
      longitude:sourceLongitude,
  }
}
  const searchHandler = ({range, isSearchRequested, coordinates }) => {
    const [lat,long] = coordinates.split(',')
    setRange(range)
    setStartSearch(isSearchRequested)
    setSourceLatitude(lat)
    setSourceLongitude(long)
  }

  useEffect(() => {
    setDataLoaded(false)
       async function findNearestOffices(){
        if(startSearch){
        const response = await filterPlaces(range)
        console.log('API Response is', response);
        setSearchResult(response)
        setDataLoaded(true)
        }
      }
       findNearestOffices();
  },[sourceLatitude,range])

  return (
    // <div className="App" style={{backgroundImage: `url(${bgImage})`,backgroundRepeat:"inherit",backgroundSize:"contain", width:"100%", height:"100%"}}>
    <div className="App">
      <AppHeader/>
      <div className="searchContainer">
        <Search searchKeyword = {searchHandler}/>
        <Results offices = {searchResult || []} isSearchRequested = {startSearch} sourceCoord = {getSourceCoordinates} isDataLoaded = {isDataLoaded}/>
      </div>
      <Footer className = "AppFooter"/>
    </div>
  );
}

export default App;
