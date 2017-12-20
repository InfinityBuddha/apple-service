import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'


import s from './styles/App.css'


/*
 * В этом файле делается верстка
 * (шикарная верстка получилась)
 * */

class App extends Component {

    render() {
        return (
            <div className={s.App}>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
