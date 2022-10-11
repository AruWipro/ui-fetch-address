import React, { useEffect, useState } from 'react';
import { Container, Dimmer, Divider, Dropdown, Grid, Header, Loader, Pagination } from 'semantic-ui-react';
import AddressCard from '../card/AddressCard';
import NoResults from '../error/NoResults';

function Results(props) {
    console.log('Props in Result is', props);
    const recordsPerPage = 2
    const [begin, setBegin] = useState(0)
    const [end, setEnd] = useState(recordsPerPage)
    const [activePage, setActivePage] = useState(1)
    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        setSortBy('')
        resetPageProperties()
    }, [props.offices])

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

    const resetPageProperties = () => {
        setActivePage(1)
        setBegin(0)
        setEnd(recordsPerPage)
    }

    const sortValues = (e, data) => {
        setSortBy(data.value)
        let sortedOffices = []
        if (data.value === 'name') {
            sortedOffices = props.offices.sort(compareOrganization)
        } else if (data.value === 'distance') {
            sortedOffices = props.offices.sort((a, b) => a.address.distance - b.address.distance)
        }
        resetPageProperties()

    }

    console.log('isDataLoaded', props.isDataLoaded);

    if (props.isSearchRequested && props.isDataLoaded) {
        if (props.offices && props.offices.length === 0) {
            console.log(props.isSearchRequested);
            return <NoResults offices={props.offices}/>
        } else {
            return loadData()
        }
    } else if(props.isSearchRequested){
        return <Dimmer active>
            <Loader>Loaing...</Loader>
        </Dimmer>
    }

    function loadData() {
        return <Container fluid textAlign='center'>
            <Header as='h1'>
                Nearest Offices
            </Header>
            <Divider />
            <Dimmer active = {props.isLoading}>
                <Loader>Loading</Loader>
            </Dimmer>
            <div className=" controllerWrapper">
                <div className="resultControllers">
                    <div className="paginationResults">

                        <Pagination
                            activePage={activePage}
                            className='paginationBox'
                            boundaryRange={1}
                            onPageChange={handlePaginationChange}
                            size='mini'
                            limit={2}
                            totalPages={Math.ceil(props.offices.length / 2)}
                            ellipsisItem={null}
                            prevItem={true}
                            nextItem={true} />
                    </div>
                    <div className="sortResults">
                        <Dropdown
                            clearable
                            className='SortDropdown'
                            align='right'
                            search
                            value={sortBy}
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
                {props.offices.slice(begin, end).map((office) => { return <AddressCard key={office.id} address={office} sourceCord={props.sourceCoord} />; })}
            </Grid>
        </Container>;
    }
}

export default Results

