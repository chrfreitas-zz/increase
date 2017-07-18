import React from 'react';
import ReactDOM from 'react-dom';

import React from 'react';
import Spotify from './Spotify.js';
import Playlist from './Playlist.js';
import Controls from './Controls.js';

class App extends React.Component {
    constructor() {

    }
    render() {
        return (
            <div>
                <h1>Ola</h1>
            </div>
        );
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('main'));
