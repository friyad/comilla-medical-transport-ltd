import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (children)
                    : (< Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />)
            }
        />
    );
};

export default PrivetRoute;