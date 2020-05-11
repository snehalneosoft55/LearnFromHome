import React from 'react'

import { Navbar } from 'react-bootstrap'

export default class NavBars extends React.Component{
    render(){
        return(
            <section className="navBarSection">
                <div className="navbarWrapper">
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand >PathShala</Navbar.Brand>
                    </Navbar>

                </div>

            </section>
        )
    }
}