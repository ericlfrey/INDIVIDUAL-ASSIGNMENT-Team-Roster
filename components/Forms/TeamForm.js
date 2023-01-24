import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

export default function TeamForm() {
  return (
    <Form>
      <h2 className="text-white mt-5">Add Team</h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          // value={formInput.name}
          // onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="public"
        name="public"
        label="Public or Private"
      // checked={formInput.sale}
      // onChange={(e) => {
      //   setFormInput((prevState) => ({
      //     ...prevState,
      //     sale: e.target.checked,
      //   }));
      // }}
      />
    </Form>
  );
}
