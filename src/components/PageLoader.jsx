import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 20);

        return () => clearTimeout(loadingTimeout);
    }, []);

    if (loading) {
        return ReactDOM.createPortal(
            <div id="loader">
                <img src=' ' alt='hp-logo' />
            </div>,
            document.body
        );
    }

    return null;
}

export default Loader;
