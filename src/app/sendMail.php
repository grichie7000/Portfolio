<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case "POST":
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = trim($params->email ?? '');
        $name = trim($params->name ?? '');
        $messageContent = trim($params->message ?? '');

        if (
            empty($email) || 
            empty($name) || 
            empty($messageContent) || 
            !filter_var($email, FILTER_VALIDATE_EMAIL)
        ) {
            http_response_code(400);
            echo json_encode(['error' => 'Ungültige Eingaben.']);
            exit;
        }

        $recipient = 'contact@richard-geis.com';
        $subject = "Contact From <$email>";
        $message = "From: $name<br><br>" . nl2br(htmlspecialchars($messageContent));

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            'From: noreply@mywebsite.com'
        ];

        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'E-Mail konnte nicht gesendet werden.']);
        }
        break;

    default:
        header("Allow: POST, OPTIONS", true, 405);
        exit;
}
