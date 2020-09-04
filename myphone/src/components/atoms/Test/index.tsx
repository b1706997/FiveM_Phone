import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withTranslation } from 'react-i18next'

class Test extends React.Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return(
            <h1>{this.props('')}</h1>
        )
    }
}

export default withTranslation()(Test)
