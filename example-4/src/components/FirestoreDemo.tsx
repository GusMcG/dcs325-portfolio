import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { Button, Form, Card, ListGroup, Badge } from "react-bootstrap";

// Define the Message interface
interface Message {
  id: string;
  text: string;
  timestamp: Timestamp | null;
}

function FirestoreDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch messages from Firestore
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messageList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];
        setMessages(messageList);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  // Add a new message to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");

      // Refresh messages
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messageList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(messageList);
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  // Delete a message from Firestore
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "messages", id));

      // Update local state
      setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h3>Firebase Firestore Demo</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Add a Message</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter your message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button variant="primary" type="submit" className="ms-2">
                Send
              </Button>
            </div>
          </Form.Group>
        </Form>

        <h5>Messages:</h5>
        {loading ? (
          <p>Loading messages...</p>
        ) : (
          <ListGroup>
            {messages.map((message) => (
              <ListGroup.Item
                key={message.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  {message.text}
                  {message.timestamp && (
                    <Badge bg="secondary" className="ms-2">
                      {message.timestamp.toDate
                        ? new Date(message.timestamp.toDate()).toLocaleString()
                        : "Just now"}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(message.id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
            {messages.length === 0 && (
              <ListGroup.Item>No messages yet. Add one above!</ListGroup.Item>
            )}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

export default FirestoreDemo;
