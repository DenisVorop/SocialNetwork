//========================================================================================================================================================

import './scss/null.scss';
import './scss/ui.module.scss';
import './App.scss';

//========================================================================================================================================================

import Body from './components/Body/Body';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';
import { connect } from 'react-redux';
import { initializedApp } from './Redux/appReducer.ts';
import Preloader from './components/common/Preloader/Preloader';

//========================================================================================================================================================

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='wrapper'>
                <HeaderContainer />
                <main className='page'>
                    <Body />
                </main>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const MapDispatchToProps = {
    initializedApp,
}

//========================================================================================================================================================

export default connect(MapStateToProps, MapDispatchToProps)(App);
