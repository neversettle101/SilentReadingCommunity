import React, { useState } from 'react';
import { Form, FormControl, Dropdown } from 'react-bootstrap';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      .map((item) => (item.name));
      setFilteredResults(results);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (value) => {
    setSearchTerm(value);
    setShowDropdown(false);
  };

  return (
    <section className="search" id="search">
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </Form>
      {showDropdown && filteredResults.length > 0 && (
        <Dropdown show>
          <Dropdown.Menu className="dropdown-menu-custom">
            {filteredResults.map((result, index) => (
              <Dropdown.Item 
                key={index}
                onClick={() => handleSelect(result)}
              >
                {result}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </section>
  );
};

export default SearchComponent;
