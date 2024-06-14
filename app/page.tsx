import React from 'react';
import Game from './components/Game';
import './styles/tailwind.css';

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <Game />
        </div>
    );
};

export default App;
