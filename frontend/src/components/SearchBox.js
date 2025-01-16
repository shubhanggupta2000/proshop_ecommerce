import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const Navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      Navigate(`/search/${keyword}`);
    } else {
      Navigate("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      inline="true"
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 my-1">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
