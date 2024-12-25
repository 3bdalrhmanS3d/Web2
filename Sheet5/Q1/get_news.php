<?php 
$host = 'localhost';
$username = 'root';
$password = 'rootroot';
$dbname = 'store';

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get offset from the request
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
$limit = 3; // Limit to 3 items per request

// Corrected SQL query
$sql = "SELECT Id, Title, Content, Published_date FROM news ORDER BY Published_date DESC LIMIT $limit OFFSET $offset";

// Execute query
$result = $conn->query($sql);

$news = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $news[] = $row;
    }
}

// Set the content type to JSON and return the data
header('Content-Type: application/json');
echo json_encode($news);

$conn->close();
?>
