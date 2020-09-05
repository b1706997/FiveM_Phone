import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Translation } from 'react-i18next';
// Props
type Prop = {
    language:string,
    onclick:object
}
class Test extends React.Component<Prop,{}> {
    constructor(props:Prop)
    {
        super(props)
    }
    render() {
        return(
            <div>
                <Translation>
                    {
                        t => <h1>{t('hello.label')}</h1>
                    }
                </Translation>
            <button onClick={this.props.onclick}></button>
            </div>
        )
    }
}



