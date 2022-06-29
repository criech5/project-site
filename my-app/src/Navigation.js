import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <NavbarBrand href="/project-site/" className="mr-auto">Cole's Stuff</NavbarBrand>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/project-site/#/spotipsy/">SpotiPsy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/project-site/#/yourdle/">Yourdle</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}