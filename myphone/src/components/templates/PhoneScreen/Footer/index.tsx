import * as React from 'react'
import * as ReactDOM from 'react-dom'
class Footer extends React.Component {
    constructor(prop)
    {
        super(prop)
    }
    render() {
        return(
            <div className='bg-success container-fluid background-success fixed-bottom'>
                <p>footer</p>
            </div>
        )
    }
}

export default Footer