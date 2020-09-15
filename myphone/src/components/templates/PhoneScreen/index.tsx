import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

import Header from './Header'
import Footer from './Footer'
type State = {
    detail:boolean,
}
type Prop = {
    display:boolean
}
class PhoneScreen extends React.Component<Prop,State> {
    state:State
    constructor(prop:Prop)
    {
        super(prop)
        this.state = {
            detail:false
        }
    }
    shouldComponentUpdate(nextProp,nextState) {
        if(this.props.display!=nextProp.display)
            return true
    }
    styleClass : string = "container-fluid mw-100"
    render() {
        return(
            <div className={this.props.display ? this.styleClass : 'container-disable'}>
                <Header />
                {/* <Screen/> */}
                <Footer/>
            </div>
        )
    }
}

export default PhoneScreen