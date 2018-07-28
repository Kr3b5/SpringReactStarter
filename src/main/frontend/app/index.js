import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css'
import Comp1 from './components/comp1'

class Indexcomp extends React.Component {
    render() {
        return (
            <div>
                <p> Index Component</p>

                <hr/>

                <Comp1/>
            </div>
        )
    }
}


ReactDOM.render(
    <Indexcomp/>,
    document.getElementById('react')
);
