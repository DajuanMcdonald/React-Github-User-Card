import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

export default function Navigation() {
    return (
        <>
            <Navbar color="light" light exand="md">
                <NavbarBrand>Github User Card</NavbarBrand>
                <form action="">
                    <input type="text"/>
                    <button>Search</button>
                </form>

            </Navbar>
        </>
    )
}