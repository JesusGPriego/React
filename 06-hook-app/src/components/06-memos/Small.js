import React from 'react'

//memo returns a memorized component. This way it is needed less resources to work.
export const Small = React.memo(({value}) => {
    console.log('Small triggered');
        return (
            <small>
                {value}
            </small>
        )
    }
)