// src/pages/Dashboard/CropSalesAnalytics.js
import React, { useState } from 'react';
import StateSelector from './StateSelector';
import StateAnalytics from './StateAnalytics';

const CropSalesAnalytics1 = () => {
    const [selectedState, setSelectedState] = useState('');

    return (
        <div>
            <h1>Crop Sales Analytics</h1>
            <StateSelector onSelectState={setSelectedState} />
            <StateAnalytics selectedState={selectedState} />
        </div>
    );
};

export default CropSalesAnalytics1;
