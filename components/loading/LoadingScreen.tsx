import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-content">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
