import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, BtnAdd } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    console.log(event.currentTarget.value);
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    console.log(event.currentTarget.value);
    setNumber(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      id: nanoid(),
      name,
      number,
    });
    event.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
      </Label>

      <BtnAdd type="submit">Add contact</BtnAdd>
    </Form>
  );
}
// class ContactForm extends Component {
//   state = { name: '', number: '' };
//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   handleSubmit = event => {
//     const { name, number } = this.state;
//     event.preventDefault();
//     this.props.onSubmit({
//       id: nanoid(),
//       name,
//       number,
//     });

//     this.reset();
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
// <Form onSubmit={this.handleSubmit}>
//   <Label>
//     Name
//     <Input
//       type="text"
//       value={name}
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//       onChange={this.handleChange}
//     />
//   </Label>

//   <Label>
//     Number
//     <Input
//       type="tel"
//       value={number}
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//       onChange={this.handleChange}
//     />
//   </Label>

//   <BtnAdd type="submit">Add contact</BtnAdd>
// </Form>
//     );
//   }
// }
// export default ContactForm;
