import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';



function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('false');

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  return (
    <>

      <section className='login-btn-container-nav'>
        <button className="register-btn" onClick={handleShow}>
          Register
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </div>
          <div className='signup-info'>
            <h2 className='modal-title'>YOUR CAR RENTAL CLUB <span className='benefits-span'>BENEFITS</span> AWAIT!</h2>
          </div>
          <div className='signup-discount'>
            <p>Sign up now and get 10% off on select vehicles!</p>
          </div>

          <div className='modal-login-signup-form-container'>
            <div>
              <Modal.Header closeButton>
                <Modal.Title className='signup-title-modal'>SIGN UP</Modal.Title>

              </Modal.Header>
              <Modal.Body>
                <Form className="d-flex">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="me-2 modal-login-signup-form "
                    aria-label="Search"
                  />
                </Form>
                <Form className="d-flex">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="me-2 modal-login-signup-form "
                    aria-label="Search"
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary modal-bottom-btn" type="submit">REGISTER</Button>
              </Modal.Footer>
            </div>
          </div>
        </Modal>
      </section>
    </>
  );
}

export default Signup;