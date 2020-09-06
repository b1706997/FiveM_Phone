import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Translation } from 'react-i18next';
// Props
type Prop = {
    language:string,
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
                        t => <h1>{t('Welcome to React')}</h1>
                    }
                </Translation>
            <button > hey u</button>
            </div>
        )
    }
}


export default Test
