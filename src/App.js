import React, {Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


import './styles/App.css'


/*
 * В этом файле делается верстка
 * (шикарная верстка получилась)
 * */

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
                
            </div>
    );
    }
}

export default App;
