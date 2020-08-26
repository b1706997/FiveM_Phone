import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from '@components/atoms/Test';
import './index.css'

type State = {
    display:boolean
}

class Phone extends React.Component<State> {
    state : State
    constructor(props)
    {
        super(props);
        this.state = {
            display:false
        }
        window.addEventListener('message',(event) => {
            if(event.data.type=="ui") {
                this.setState({display:event.data.status})
            }
        });
    }
    render() {
        return(
            // this.state.display &&
            <phonewrap data='ip6'> 
                <PhoneScreen>
                    
                </PhoneScreen>
            </phonewrap>
            <div className='PhoneWrap'>
                <div className='PhoneScreen'>            
                                <Test></Test>
                </div>
            </div>
            
        )
    }
}

export default Phone;