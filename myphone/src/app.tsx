import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom"
import {Provider} from 'react-redux'
import store from '@redux/store.tsx'
import './i18n'
import PhoneScreen from '@templates/PhoneScreen'
// import Test from '@atoms/Test'

type State = {
    display:boolean
}
class App extends React.Component<{},State> {
    state:State
    constructor(prop)
    {
        super(prop)
        this.state  = {
            display:true
        }
    }
    handleConstruct (event) {
        if(event.data.type=='constructor')
        {
            // Lay phone ID tu` database
            const phoneID = 1
            // Set globalState.phoneID = phoneID
            // store.dispatch({type:'setting/phoneIDChange',payload:{phoneID}})
        }
    }
    handleInput(event) {
        if(event.data.type=="close")
            this.setState({display:false})
        if(event.data.type=="open")
            this.setState({display:true})
        // if(event.data.type=='navigate')
        //     this.setState({content:event.data.content})
    }
    componentWillMount() {
        window.addEventListener('message',this.handleConstruct)
    }
    componentDidMount() {
        window.removeEventListener('message',this.handleConstruct)
        window.addEventListener('message',this.handleInput)
    }
    componentWillUnmount() {
        window.removeEventListener('message',this.handleInput)
    }
    render() {
        return(
            // this.state.display ? <PhoneScreen></PhoneScreen> : null
            <PhoneScreen display={this.state.display}/>
            // <Test language={'vn'}></Test>
        )
    }
}
ReactDOM.render(
    // <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    // </Router>,
    ,
    document.getElementById('root')
);
