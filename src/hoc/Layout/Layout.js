import React, { Component } from 'react'; 

import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import NavTopBar from '../../components/Navigation/NavigationTopBar/NavigationTopBar';
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';
import Footer from '../../components/Footer/Footer';

import classes from './Layout.css';

/* This is our primary layout component where we set the different parts of the page. Such as where the header will go, the nav bar, main content and footer.*/
class Layout extends Component {

    state = {
        showSideDraw: false
    }

    //Update the state once the sidedraw is set to close
    sideDrawClosedHandler = () => {
        console.log('hitting this');
        this.setState({showSideDraw: false});
    }
    //Update the state, but it is dependent on the previous state
    sideDrawOpenHandler = () => {
        this.setState((prevState) => {
            return { showSideDraw: !prevState.showSideDraw}
        });
    }

    //Render and return the different elements
    render() {
        return (
            <Aux>
                <div className={classes.Wrap}>
                    <Header/>
                    <NavTopBar
                        openSideDraw={this.sideDrawOpenHandler}/>
                    />
                    <SideDraw
                        open={this.state.showSideDraw} closed={this.sideDrawClosedHandler}/>
                    <section className={classes.MainContent}>
                        {this.props.children}   
                    </section>
                    <Footer/>
                </div>
            </Aux>
        );
    }
}

export default Layout;