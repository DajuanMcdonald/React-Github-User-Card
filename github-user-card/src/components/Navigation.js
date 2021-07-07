import React from 'react';
import { Nav, Navbar, NavbarBrand, Button } from 'reactstrap';
import './navigation.css';
import userEvent from "@testing-library/user-event";

export default function Navigation() {
    const handleSearch = (e) => {
        e.preventDefault();

    };

    const handSubmit = () => {
        fetch(`https://api.github.com/users/fiopwk/${userEvent}`)
            .then(res => res.json())
            .then(data => this.setState({followers: ''}))
    };

    return (
        <>
            <Navbar className='nav-bar' color="light" light exand="md">
                <NavbarBrand>Github User Card</NavbarBrand>
                <form action="">
                    <input type="text"/>
                    <Button type='submit' color='primary'>Search</Button>
                </form>

            </Navbar>
        </>
    )
}