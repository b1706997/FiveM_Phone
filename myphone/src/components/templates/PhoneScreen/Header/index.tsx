import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import {connect} from 'react-redux'
type State = {

}
type Prop = {
    time:string,
    tick:any,
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
            <div className='container-fluid root mw-100 d-flex justify-content-between'>
                <i className='fa fa-signal' aria-hidden={true}></i>
                <p className='text-center display-4'>{this.props.time}</p>
                <i className='fa fa-battery size' aria-hidden={true}></i>
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