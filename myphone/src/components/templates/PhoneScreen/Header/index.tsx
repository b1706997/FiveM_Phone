import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import {connect} from 'react-redux'
type State = {

}
type Prop = {
    time:string,
    tick:any
}
class Header extends React.Component<Prop,State> {
    constructor(prop:Prop)
    {
        super(prop)
        this.tick = this.tick.bind(this)
    }
    componentDidMount()
    {
        // this.interval = setInterval(this.props.tick,1000)
        // console.log(this.props.time)
    }
    componentWillUnmount()
    {
        // clearInterval(this.interval)
    }
    tick() {
        this.props.tick()
    }

    render() {
        return(
            <div className='container'>
                <p>{this.props.time}</p>
                <button onClick={this.tick}></button>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {time:state.timeString}
}

const mapDispatchToProp = (dispatch) => {
    return{
        tick: () => dispatch({type:'constructor/timer'})
    }
}


export default connect(mapStateToProp,mapDispatchToProp)(Header)

// export default Header