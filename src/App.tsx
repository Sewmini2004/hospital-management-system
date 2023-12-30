import * as React from 'react';
import './App.css';
import Header from "./components/layout/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home"
import {About} from "./views/about1";
import {Service} from "./views/service";
class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Home/>
                    <About/>
                    <Service/>
                </BrowserRouter>
            </div>


        );
    }
}

export default App;
