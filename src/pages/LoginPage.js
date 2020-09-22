import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import { fazerLogin } from '../actions';
import { connect } from "react-redux";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            isLoading: false,
            mensagem: ''
        }
    }

    componentDidMount() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp({
                apiKey: "AIzaSyAnkQWKFqblGsRy7goGbtknDqPcpk7Rn1E",
                authDomain: "agenda-escolar-48cc4.firebaseapp.com",
                databaseURL: "https://agenda-escolar-48cc4.firebaseio.com",
                projectId: "agenda-escolar-48cc4",
                storageBucket: "agenda-escolar-48cc4.appspot.com",
                messagingSenderId: "39708402589",
                appId: "1:39708402589:web:a6ff77960ced3dbc888574"
            });
        }
    }

    onChangeInput(campo, valor) {
        this.setState({
            [campo]: valor
        });
    }

    fazerLogin() {
        this.setState({ isLoading: true, mensagem: '' });
        const { email, senha } = this.state;
        this.props.fazerLogin({email, senha}).then(() => {
            this.setState({mensagem: 'Sucesso'});
            this.props.navigation.replace('Main');
        });
    }

    getMensagemPorErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Usuário ou senha incorretos';
            case 'auth/user-not-found':
                return 'Usuário ou senha incorretos';
            case 'auth/invalid-email':
                return 'Email inválido';
            default:
                return 'Erro desconhecido';
        }
    }

    renderizarMensagem() {
        const {mensagem} = this.state;

        if (!mensagem){
            return null;
        }

        return (
            <View>
                <Text>{mensagem}</Text>
            </View>
        );
    }

    renderizarBotao(){
        if (this.state.isLoading) {
            return <ActivityIndicator/>
        }
        return (
            <Button title="Entrar" onPress={() => this.fazerLogin()}/>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}> Agenda Escolar</Text>
                <Text style={styles.titulo}> Eletrônica </Text>
                <FormRow first>
                    <TextInput placeholder="Email" value={this.state.email} onChangeText={value => this.onChangeInput('email',value)}/>
                </FormRow>
                <FormRow last>
                    <TextInput placeholder="Senha" secureTextEntry value={this.state.senha} onChangeText={value => this.onChangeInput('senha', value)}/>
                </FormRow>
                <Text style={styles.esqueciSenha}> Esqueci minha senha </Text>
                {this.renderizarBotao()}

                {this.renderizarMensagem()}
            </View>             
         );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#CADAEB'

    },

    titulo: {
        fontSize: 45,
        textAlign: 'center'
    },

    esqueciSenha: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10
    }


});

export default connect(null, { fazerLogin })(LoginPage)