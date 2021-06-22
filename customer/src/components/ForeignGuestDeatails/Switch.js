import React, { Component } from 'react'
import { Dropdown,Button } from 'react-bootstrap';

export default class Navbar extends Component {
    render() {
        return (
            <div>

<Dropdown>
  <Button variant="success">--You Can Select Your Favourite Igabara Hobbit House -- </Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="/guest">Local</Dropdown.Item>
    <Dropdown.Item href="/foreign">Foreign</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

            
        )
    }
}
