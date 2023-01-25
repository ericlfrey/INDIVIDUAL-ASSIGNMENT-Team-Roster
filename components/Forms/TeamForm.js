import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { createTeam, updateTeam } from '../../api/teams';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  public: false,
};

export default function TeamForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    createTeam(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateTeam(patchPayload).then(() => {
        router.push('/teams');
      });
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">Add Team</h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="public"
        name="public"
        label="Public or Private"
        checked={formInput.public}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            public: e.target.checked,
          }));
        }}
      />
      <Button type="submit">Create Book</Button>
    </Form>
  );
}
