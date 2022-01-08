import React from 'react'

//React.memo to memorize comopnent so it doesn't rerender everytime.
export const Hijo = React.memo(({ numero, incrementar }) => {

        console.log('  Me volví a generar :(  ');

        return (
            <button
                className="btn btn-primary me-3"
                onClick={ () => incrementar( numero ) }
            >
                { numero }
            </button>
        )
    }
)