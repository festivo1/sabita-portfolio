import React from "react";
import { Link } from "react-router-dom";
// import './headerComponents.css';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function HeaderComponent() {
    const divstyle = { marginRight: '30px', };
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: 'grey', }}>
                <div> <h1 >Portfolio</h1> </div>
                <div> <h2>Sabita Silwal</h2> </div>
            
            </div>
            <div style={{ textAlign: 'left', backgroundColor: 'lightgreen', padding: '15px', marginTop: '-8px' }}>
                </div>
        </div>
    )

}

// function HeaderComponent() {
//   const divstyle = { marginRight: "30px" };
//   return (
//     <div>
    //   <Navbar inverse collapseOnSelect>
    //     <Navbar.Header>
    //       <Link to="#" className="navbar-brand">
    //         BIZIT
    //       </Link>
    //     </Navbar.Header>
    //     <Navbar.Collapse>
    //       <Nav>
    //         <LinkContainer to="Filter">
    //           <NavItem eventKey={1}>Filter</NavItem>
    //         </LinkContainer>
    //         <LinkContainer to="Search">
    //           <NavItem eventKey={2}>Search</NavItem>
    //         </LinkContainer>
    //       </Nav>
    //       <Nav pullRight>
    //         <LinkContainer to="/Signup">
    //           <NavItem eventKey={1}>Sign Up</NavItem>
    //         </LinkContainer>
    //         <LinkContainer to="/Login">
    //           <NavItem eventKey={2}>Login</NavItem>
    //         </LinkContainer>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
//       {/* <CardList
//       saveButtonHandler={this.saveButtonHandler}
//       cards={this.state.cards}
//       /> */}
//       <Navbar inverse collapseOnSelect fixedBottom>
//         <Navbar.Collapse>
//           <Nav>
//             <LinkContainer to="/">
//               <NavItem eventKey={4}>Home</NavItem>
//             </LinkContainer>
//             <LinkContainer to="/Profile">
//               <NavItem eventKey={5}>Profile</NavItem>
//             </LinkContainer>
//             <LinkContainer to="/AddNewCard">
//               <NavItem eventKey={6}>Add Card</NavItem>
//             </LinkContainer>
//             <LinkContainer to="/SavedCard">
//               <NavItem eventKey={7}>Saved Cards</NavItem>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }
export default HeaderComponent;
