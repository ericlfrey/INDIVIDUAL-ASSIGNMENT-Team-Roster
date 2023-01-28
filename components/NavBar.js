/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="navbar-container">
        <Link passHref href="/teams">
          <Navbar.Brand>🌹 Ka-Tet 🥀</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <div className="page-links">
              <Link passHref href="/teams">
                <Nav.Link>Teams</Nav.Link>
              </Link>
              <Link passHref href="/team/new">
                <Nav.Link>New Team</Nav.Link>
              </Link>
              <Link passHref href="/members">
                <Nav.Link>Members</Nav.Link>
              </Link>
              <Link passHref href="/member/new">
                <Nav.Link>New Member</Nav.Link>
              </Link>
            </div>
            <SearchBar />
            <Link passHref href="/teams">
              <Nav.Link className="sign-out-btn" size="sm" id="sign-out-btn" onClick={signOut}>Sign Out</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
