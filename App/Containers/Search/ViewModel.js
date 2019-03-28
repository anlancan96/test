import React from 'react';

const hasViewModel = (WrappedComponent) => {
    return class ViewModel extends React.Component {
        render() {
            return (
                <WrappedComponent 
                />
            )
        }
    }
}

export default hasViewModel;