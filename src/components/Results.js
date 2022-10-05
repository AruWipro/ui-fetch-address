import React, { useEffect, useState } from 'react';
import { Button, Container, Divider, Dropdown, Grid, Header, Pagination } from 'semantic-ui-react';
import AddressCard from './AddressCard';
import NoResults from './NoResults';

function Results(props) {
    console.log('Props in Result is', props);
    const recordsPerPage = 2
    const [begin, setBegin] = useState(0)
    const [end, setEnd] = useState(recordsPerPage)
    const [activePage, setActivePage] = useState(1)
    const [sortBy, setSortBy] = useState('')
    const [offices, setOffices] = useState()

    useEffect(() => {
        setSortBy('')
       resetPageProperties()
    },[props.offices])

    function compareOrganization(a, b) {
        // converting to uppercase to have case-insensitive comparison
        const name1 = a.organization.toUpperCase();
        const name2 = b.organization.toUpperCase();
    
        let comparison = 0;
    
        if (name1 > name2) {
            comparison = 1;
        } else if (name1 < name2) {
            comparison = -1;
        }
        return comparison;
    }
    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage)
        setBegin(activePage * recordsPerPage - recordsPerPage);
        setEnd(activePage * recordsPerPage);
    }

    const getSortOptions = () => {
        return [
            { key: 'dis', text: 'By Distance', value: 'distance' },
            { key: 'name', text: 'By Name', value: 'name' },
        ]
    }

    const resetPageProperties = ()=> {
        setActivePage(1)
        setBegin(0)
        setEnd(recordsPerPage)
    }

    const sortValues = (e, data) => {
        console.log('Updating Sort....', data.value);
        setSortBy(data.value)
        let sortedOffices = []
        if (data.value === 'name') {
            console.log('Sorting by Name...',);
            sortedOffices = props.offices.sort(compareOrganization)
        } else if (data.value === 'distance') {
            console.log('Sorting by distance...',);
            sortedOffices = props.offices.sort((a, b) => a.address.distance - b.address.distance)
        }
        setOffices(sortedOffices)
        resetPageProperties()

    }

    const NoOffices = () => {
        return <Container fluid textAlign='center'>
            <Header as='h1' >
                Sorry! No Offices Found
            </Header>
            <Button raised color= 'orange' >View all partners </Button>
        </Container>
    }

    if (props.isSearchRequested) {
        if (props.offices && props.offices.length === 0) {
            return <NoResults />
        } else {
            const items = props.offices

            const paginatedItems = offices && offices.length > 0 ? offices.slice(begin, end) :items.slice(begin, end)
            console.log('paginatedItems',paginatedItems);
            console.log('Offices',offices);
            return <Container fluid textAlign='center'>
                <Header as='h1'>
                    Nearest Offices
                </Header>
                <Divider />
                <div className=" controllerWrapper">
                <div className="resultControllers">
                    <div className="paginationResults">
                <Pagination
                    activePage={activePage}
                    boundaryRange={1}
                    onPageChange={handlePaginationChange}
                    size='mini'
                    limit={2}
                    totalPages={Math.ceil(props.offices.length / 2)}
                    ellipsisItem={null}
                    prevItem={true}
                    nextItem={true}
                />
                </div>
                <div className="sortResults">
                <Dropdown
                    clearable
                    className='SortDropdown'
                    align='right'
                    search
                    value = {sortBy}
                    selection
                    placeholder='Select sort'
                    options={getSortOptions()}
                    name='sortBy'
                    onChange={sortValues} />
                    </div>
                </div>
                </div>
                <br />
                <Grid centered={true} padded sortable={true}>
                    {props.offices.slice(begin, end).map((office) => { return <AddressCard key={office.id} address={office} sourceCord={props.sourceCoord} /> })}
                </Grid>
            </Container>
        }
    }
}

export default Results

