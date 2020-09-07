import * as React from 'react'
import * as ReactDOM from 'react-dom'

type State = {
    detail:boolean,
    currentApp:object,
}
type Prop = {
    App:Array<number> // 2D array
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
    render() {
        return(
            this.state.detail ? <h1>Detail</h1> : <h1>HomePage</h1>
        )
    }
}

export default PhoneScreen