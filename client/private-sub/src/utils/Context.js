import React, { useState } from 'react';
import CreateContext from './contextCommon';

export default function Context({ children }) {
    const [user, setUser] = useState(null);
    return (
        <CreateContext.Provider value={{ user, setUser }}>
            {children}
        </CreateContext.Provider>
    );
}