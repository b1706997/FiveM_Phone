import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from '@components/atoms/Test';
import './index.css'

type State = {
    display:boolean,
    content:string
}

class Phone extends React.Component<State> {
    state : State
    constructor(props)
    {
        super(props);
        this.state = {
            display:false,
            content:''
        }
        window.addEventListener('message',(event) => {
            if(event.data.type=="close") {
                this.setState({display:false})
            }
            if(event.data.type=="open")
                this.setState({display:true})
            if(event.data.type=='navigate')
                this.setState({content:event.data.content})
        });
    }
    render() {
        return(
            // this.state.display &&
            // <phonewrap data='ip6'> 
            //     <PhoneScreen>
                    
            //     </PhoneScreen>
            // </phonewrap>
            this.state.display &&
            <div className='Phone'>
                <Test></Test>
                <h1>{this.state.content}</h1>
            </div>
            
        )
    }
}

export default Phone;