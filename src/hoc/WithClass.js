import React from 'react';

// this is the high order component
const withClass = (WrappedComponent, ClassName) => {
    return props => (
        <div className={ClassName}>
            <WrappedComponent {...props} />
        </div>
    )

}


export default withClass;