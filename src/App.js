import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import AppHeader from './components/header/AppHeader';
import Results from './components/results/Results';
import Search from './components/searchForm/Search';
const {getAdressWithInRange} = require('./services/AddressService')

function App() {
  const [range, setRange] = useState(100)
  const [inputCoordinates, setInputLocation] = useState()
  const [searchResult, setSearchResult] = useState([]);
  const [page,setPage] = useState(1)
  const [startSearch, setStartSearch] = useState(false)
  const [sourceLatitude, setSourceLatitude] = useState()
  const [sourceLongitude, setSourceLongitude] = useState()

  
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
      async function findNearestOffices(){
        if(startSearch){
        const response = await filterPlaces(range)
        console.log('API Response is', response);
        setSearchResult(response)
        }
      }
      findNearestOffices();
  },[sourceLatitude,range])

  const setActivePageHandler = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <AppHeader/>
      <div className="searchContainer">
        <Search searchKeyword = {searchHandler} />
        <Results offices = {searchResult || []} isSearchRequested = {startSearch} sourceCoord = {getSourceCoordinates}/>
      </div>
      <Footer className = "AppFooter"/>
    </div>
  );
}

export default App;
