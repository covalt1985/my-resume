import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import '../style.css';

class ProjectsText extends Component {
  render() {
    return (
      <div className="cardProject_container">
        {/* Portfolio */}
        <Card border="success" bg="transparent" text="success">
          <Card.Header>Moje portfolio</Card.Header>
          <Card.Body>
            <Card.Text>
              Jednym z moich ostatnich projektów jest strona na której jesteś.
              Stworzyłem ją w React'cie wykorzystując głównie React Router oraz
              React Bootstrap.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Lights Out */}
        <Card border="success" bg="transparent" text="success">
          <Card.Header>Lights Out</Card.Header>
          <Card.Body>
            <Card.Title>Gra logiczna</Card.Title>
            <Card.Text>
              Prosta gra logiczna, polegająca na doprowadzenia planszy do stanu,
              w którym żadna komórka nie będzie podświetlona. Logikę do niej
              napisałem ćwicząc podstawy React'a, oraz stylizowanie aplikacji.
            </Card.Text>
            <Button
              as={Card.Link}
              variant="outline-success"
              href="https://covalt1985.github.io/lightsOut/"
              target="blank">
              Zobacz Projekt
            </Button>
          </Card.Body>
        </Card>

        {/* ToDo List */}
        <Card border="success" bg="transparent" text="success">
          <Card.Header>ToDo List</Card.Header>
          <Card.Body>
            <Card.Text>
              Klasyczna lista toDo, stworzona jako ćwiczenie z interakcją z
              formami w react'cie
            </Card.Text>
            <Button
              as={Card.Link}
              variant="outline-success"
              href="https://covalt1985.github.io/My-React-Excercise-ToDoList/"
              target="blank">
              Zobacz Projekt
            </Button>
          </Card.Body>
        </Card>
        {/* Work in progress */}
        {/* <Card border="success" bg="transparent" text="success">
          <Card.Header>Kolejny projekt w przygotowaniu</Card.Header>
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card> */}
      </div>
    );
  }
}

export default ProjectsText;
