// AddItem.js
import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddItem({ type }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "snacks" || type === "drinks") {
      await SnackOrBoozeApi.addItem(type, formData); // Assuming addItem method is implemented
      history.push(`/${type}`);
    } else {
      console.error("Invalid type specified");
    }
  };

  return (
    <div>
      <h2>Add New {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange} />
        </FormGroup>
        {/* Include other fields as necessary */}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default AddItem;
