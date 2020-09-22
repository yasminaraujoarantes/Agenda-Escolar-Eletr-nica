import React from 'react';
import { ScrollView , Text, StyleSheet, Button } from 'react-native';
import ChamadaListItem from './ChamadaListItem'
import axios from 'axios';

export default class ChamadaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            chosenDate: new Date()
        }

        this.setDate = this.setDate.bind(this);
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api?nat=br&results=20').then(response => {
            const { results } = response.data;
            const items = results.map(people => {
                return <ChamadaListItem key={people.name.first} people={people} />
            })
            this.setState({
                peoples: items
            })
        });
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        return (
            <ScrollView>

                {this.state.peoples}

                <Button title="Finalizar Chamada" onPress={() => this.props.navigation.navigate('Main')}/>
            </ScrollView>
        )

    }
};