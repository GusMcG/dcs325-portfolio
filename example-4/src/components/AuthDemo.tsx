import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Button, Form, Card, Alert } from "react-bootstrap";

function AuthDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(auth.currentUser);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
      } else {
        // Sign in
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h3>Firebase Authentication Demo</h3>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}

        {user ? (
          <div>
            <p>Logged in as: {user.email}</p>
            <Button variant="danger" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            <Button
              variant="link"
              onClick={() => setIsSignUp(!isSignUp)}
              className="ms-2"
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Need an account? Sign Up"}
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

export default AuthDemo;
