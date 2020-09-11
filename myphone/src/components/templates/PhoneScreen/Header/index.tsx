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
        console.log(prop)
    }
    interval;
    componentDidMount()
    {
        this.interval = setInterval(this.props.tick,2000)
    }
    componentWillUnmount()
    {
        clearInterval(this.interval)
    }
    render() {
        return(
            <div className='container'>
                <p>{this.props.time}</p>
                <button > sad</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ time: state.construct.timeString })



const mapDispatchToProp = (dispatch) => {
    return{
        tick: () => dispatch({type:'constructor/timer'})
    }
}


export default connect(mapStateToProps,mapDispatchToProp)(Header)

// export default Header