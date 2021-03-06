import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// Styles
// import { Button } from 'react-bootstrap';
import '../css/Contact.css';

function Contact() {
    return (
        <div className='col-12 contactform'>


            <div className='col-lg-8 col-sm-12'>
                <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Envoyez nous un message</h3>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>What for ?</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>Talk with us</option>
                            <option>Write for us</option>
                            <option>Make a proposal of subject</option>
                            <option>Work with us</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit" style={{ float: 'right', marginBottom: '200px', width: '30%' }}>
                    Submit
  </Button>
            </div>
            <div className='col-lg-4 col-sm-12 icons-contact'>
                <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Contactez nous</h3>
                <div className='object-contact-mail'> <a href=''>la.laborantine.pro@gmail.com</a></div>
                <div class="social-btns">
                    <a class="btn facebook" href="#"><div></div></a>
                    <a class="btn twitter" href="#"><div></div></a>
                    <a class="btn instagram" href="#"><div></div></a>
                </div>
            </div>

            <div >




            </div>


        </div>

    );
}

export default Contact;
