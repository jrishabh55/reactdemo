import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApiSerivce from './ApiService';
import { Loading } from './components/Loading';
import { Contacts } from './components/Contacts';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            error: false
        };
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return (<div id="loading"><Loading /></div>);
    }

    callApi() {
        ApiSerivce.contacts()
            .then(data => {
                this.setState({data : data.data.contacts});
            }).then(() => {
                ReactDOM.render(<Contacts data={this.state.data} />, document.getElementById('loading'));
            })
            .catch(err => this.setState({error: err.message}))
    }
}

export default App;
