import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';



export const NavBar = () => {

    const logout = () => {
        localStorage.removeItem("token")
    }

    return (
        <Menu>
            <Menu.Item name='editorials'>
                <Link to={'/home'}>
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item name='editorials'>
                <Link to={'/add-member'}>
                    Add Member
                </Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <Link to={'/login'}>
                    <Button onClick={logout} primary>Log out</Button>
                </Link>
            </Menu.Item>
        </Menu>
    );
}

// <Link to={'/register'} variant='body2'>
//                             {"Don't have an account? Register now!"}
//                         </Link>