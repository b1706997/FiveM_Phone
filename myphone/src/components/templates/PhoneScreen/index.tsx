import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
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
    render() {
        return(
            <div className='container'>
                sds
            </div>
        )
    }
}

export default PhoneScreen