import { useState } from "react";
import {
  Accordion,
  Alert,
  Badge,
  Button,
  Card,
  Carousel,
  Dropdown,
  Form,
  Modal,
  Nav,
  Navbar,
  ProgressBar,
  Spinner,
  Table,
  Toast,
  Tabs,
} from "react-bootstrap";

function BootstrapDemo() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState("buttons");
  const [progress, setProgress] = useState(0);

  // Simulate progress
  const startProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h3>Bootstrap Components Demo</h3>
      </Card.Header>
      <Card.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k || "buttons")}
          className="mb-4"
        >
          <Tabs.Tab eventKey="buttons" title="Buttons & Alerts">
            <div className="mb-4">
              <h5>Buttons</h5>
              <Button variant="primary" className="me-2">
                Primary
              </Button>
              <Button variant="secondary" className="me-2">
                Secondary
              </Button>
              <Button variant="success" className="me-2">
                Success
              </Button>
              <Button variant="danger" className="me-2">
                Danger
              </Button>
              <Button variant="warning" className="me-2">
                Warning
              </Button>
              <Button variant="info" className="me-2">
                Info
              </Button>
              <Button variant="light" className="me-2">
                Light
              </Button>
              <Button variant="dark">Dark</Button>
            </div>

            <div className="mb-4">
              <h5>Alerts</h5>
              <Alert variant="primary" className="me-2 d-inline-block">
                Primary Alert
              </Alert>
              <Alert variant="secondary" className="me-2 d-inline-block">
                Secondary Alert
              </Alert>
              <Alert variant="success" className="me-2 d-inline-block">
                Success Alert
              </Alert>
              <Alert variant="danger" className="me-2 d-inline-block">
                Danger Alert
              </Alert>
              <Alert variant="warning" className="me-2 d-inline-block">
                Warning Alert
              </Alert>
              <Alert variant="info" className="me-2 d-inline-block">
                Info Alert
              </Alert>
            </div>

            <div>
              <h5>Badges</h5>
              <Badge bg="primary" className="me-2">
                Primary
              </Badge>
              <Badge bg="secondary" className="me-2">
                Secondary
              </Badge>
              <Badge bg="success" className="me-2">
                Success
              </Badge>
              <Badge bg="danger" className="me-2">
                Danger
              </Badge>
              <Badge bg="warning" className="me-2">
                Warning
              </Badge>
              <Badge bg="info" className="me-2">
                Info
              </Badge>
              <Badge bg="light" className="me-2 text-dark">
                Light
              </Badge>
              <Badge bg="dark">Dark</Badge>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="forms" title="Forms & Modals">
            <div className="mb-4">
              <h5>Form Controls</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Select</Form.Label>
                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Textarea" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="radio" name="radioGroup" label="Radio 1" />
                  <Form.Check type="radio" name="radioGroup" label="Radio 2" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>

            <div>
              <h5>Modal</h5>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Launch Modal
              </Button>

              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This is the modal body content. You can put any content here.
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => setShowModal(false)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="components" title="Other Components">
            <div className="mb-4">
              <h5>Accordion</h5>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    This is the first accordion item's content.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    This is the second accordion item's content.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="mb-4">
              <h5>Dropdown</h5>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="mb-4">
              <h5>Progress Bar</h5>
              <ProgressBar
                now={progress}
                label={`${progress}%`}
                className="mb-2"
              />
              <Button variant="primary" onClick={startProgress}>
                Start Progress
              </Button>
            </div>

            <div className="mb-4">
              <h5>Spinner</h5>
              <Spinner animation="border" role="status" className="me-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <Spinner animation="grow" role="status" className="me-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>

            <div className="mb-4">
              <h5>Table</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div>
              <h5>Toast</h5>
              <Button onClick={() => setShowToast(true)}>Show Toast</Button>

              <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <Toast.Header>
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>This is a toast message!</Toast.Body>
              </Toast>
            </div>
          </Tabs.Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default BootstrapDemo;
