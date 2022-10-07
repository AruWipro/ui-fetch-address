import { default as React } from 'react';
import { Button, Divider, Dropdown, Form, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react';
const getCountriesAsDropDown = require('./../../utils/CountryUtils')

class AppSearch extends React.Component {
    state = {
        range: '',
        officeEditButton: false,
        isSearchRequested: false,
        coordinates: '',
    }
    onInputchange = (event) => {
        console.log('Event is', event.target.value);
        if (event.target.name === 'range') {
            if (!/[0-9]/.test(event.target.value)) {
                this.setState({ range: '' });
            } else
                this.setState({ range: event.target.value });
        }
    }

    handleLocationSelect = (e, data) => {
        console.log('Data is', data);
        this.setState({ coordinates: data.value })
    }

    handleButtonClick = () => {
        this.setState({ isSearchRequested: true });
        this.setState({ isLoaderActive: true });
    }

    setButtonState = (e, state) => {
        this.setState({ officeEditButton: !state.officeEditButton })
    }

    submitForm = (e) => {
        this.props.searchKeyword(this.state)
    }
    render() {
        return (<Segment centered padded color='orange'>
            <Form onSubmit={this.submitForm}>
                        <Grid centered padded columns='2'>
                            <Grid.Row  >
                                <Grid.Column >
                                    {/* <Header as='h2'> Search offices by Name or Location</Header> */}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row />

                            <Grid.Row centered padded>
                                <Grid.Column centered>
                                    <Segment textAlign='center' padded raised >
                                        <Grid columns='2' stackable textAlign='center'>
                                            <Divider vertical>AND</Divider>
                                            <Grid.Row padded verticalAlign='middle'>
                                                <Grid.Column padded >
                                                    <Header icon>
                                                        <Icon name='building orange' />
                                                        Find Offices by country
                                                    </Header>
                                                    <Form.Field inline>
                                                        {/* <Form.Input type='text' name='location' value={this.state.location} placeholder='Starbucks Cafe Central London' onChange={this.onInputchange}> */}
                                                        <Dropdown
                                                            data-testid='country-dropdown'
                                                            clearable
                                                            fluid
                                                            search
                                                            selection
                                                            placeholder='Select a location'
                                                            options={getCountriesAsDropDown.default()}
                                                            name='coordinates'
                                                            onChange={this.handleLocationSelect} />
                                                    </Form.Field>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Header icon>
                                                        <Icon name='location arrow orange' />
                                                        Find Offices by range
                                                    </Header>
                                                    <Form.Field inline>
                                                        <input size="30" name='range' class='office' type='text' placeholder='Enter offices range' value={this.state.range} onChange={this.onInputchange} />
                                                        <Label pointing='left'>In Kms</Label>
                                                    </Form.Field>
                                                </Grid.Column>
                                            </Grid.Row>

                                        </Grid>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row centered padded>
                                <Grid.Column centered>
                                    <Grid columns={2} stackable textAlign='center'>
                                        <Button raised color='orange' onClick={this.handleButtonClick} disabled={!this.state.coordinates || !this.state.range}>Search</Button>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
            </Form>
        </Segment>)
    }
}

export default AppSearch

