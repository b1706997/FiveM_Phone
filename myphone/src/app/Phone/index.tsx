import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from '@components/atoms/Test';
import './index.css'
import {Provider} from 'react-redux';
import store from '@redux/store.js';


type State = {
    display:boolean,
    content:string,
}

type Prop = {
    lang:string
}

class Phone extends React.Component<Prop , State>{
    state : State
    constructor(props:Prop)
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
            <Provider store={store}>
                <div className='Phone'>
                    <Test></Test>
                    <h1>{this.state.content}</h1>
                </div>
            </Provider>
        )
    }
}

export default Phone;