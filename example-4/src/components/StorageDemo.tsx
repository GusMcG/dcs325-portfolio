import { useState, useEffect } from "react";
import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import {
  Button,
  Card,
  Form,
  Image,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";

interface FileItem {
  name: string;
  url: string;
  path: string;
}

function StorageDemo() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetch files from Firebase Storage
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(storage, "uploads");
        const result = await listAll(storageRef);

        const filePromises = result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return {
            name: item.name,
            url,
            path: item.fullPath,
          };
        });

        const fileList = await Promise.all(filePromises);
        setFiles(fileList);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Upload file to Firebase Storage
  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadProgress(0);

    try {
      // Create a reference to the file location
      const storageRef = ref(storage, `uploads/${selectedFile.name}`);

      // Upload the file
      await uploadBytes(storageRef, selectedFile);

      // Get the download URL
      const url = await getDownloadURL(storageRef);

      // Add to files list
      setFiles([
        ...files,
        {
          name: selectedFile.name,
          url,
          path: storageRef.fullPath,
        },
      ]);

      // Reset form
      setSelectedFile(null);
      setUploadProgress(100);

      // Simulate progress completion
      setTimeout(() => {
        setUploading(false);
        setUploadProgress(0);
      }, 1000);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  // Delete file from Firebase Storage
  const handleDelete = async (path: string, name: string) => {
    try {
      const fileRef = ref(storage, path);
      await deleteObject(fileRef);

      // Update files list
      setFiles(files.filter((file) => file.path !== path));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h3>Firebase Storage Demo</h3>
      </Card.Header>
      <Card.Body>
        <Form className="mb-4">
          <Form.Group className="mb-3">
            <Form.Label>Upload a File</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="file"
                onChange={handleFileChange}
                disabled={uploading}
              />
              <Button
                variant="primary"
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className="ms-2"
              >
                Upload
              </Button>
            </div>
          </Form.Group>

          {uploading && (
            <ProgressBar
              now={uploadProgress}
              label={`${uploadProgress}%`}
              className="mb-3"
            />
          )}
        </Form>

        <h5>Uploaded Files:</h5>
        <Row>
          {files.map((file) => (
            <Col key={file.path} xs={12} sm={6} md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={file.url}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{file.name}</Card.Title>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(file.path, file.name)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {files.length === 0 && (
            <Col>
              <p>No files uploaded yet. Upload one above!</p>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default StorageDemo;
