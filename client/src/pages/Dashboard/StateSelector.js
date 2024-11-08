// src/pages/Dashboard/StateSelector.js
import React from 'react';

const StateSelector = ({ onSelectState }) => {
    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi'
    ];

    return (
        <select onChange={(e) => onSelectState(e.target.value)}>
            <option value="">Select a State</option>
            {states.map((state) => (
                <option key={state} value={state}>
                    {state}
                </option>
            ))}
        </select>
    );
};

export default StateSelector;
