import React from 'react';

export default function Error({message}) {
    return (
        <div className="card-panel red darken-4 error col s12">
            {message}
        </div>
    );
}