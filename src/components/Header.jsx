import React from "react";
import { Form } from "react-bootstrap";

function Header({ setSearchInput, setHornCount }) {
  const handleFilterChange = (value) => {
    setHornCount(value);
  };

  return (
    <header className="header">
      <h1>Gallery Title</h1>

      <div className="form-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <HornFilter onFilterChange={handleFilterChange} />
    </header>
  );
}

function HornFilter({ onFilterChange }) {
  return (
    <Form>
      <Form.Group controlId="hornsSelect">
        <Form.Label>Filter by number of horns</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="1">1 Horn</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="100">100 Horns</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default Header;
