import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-content">
                <h1>Loading...</h1>
                <div className="loading-spinner"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
