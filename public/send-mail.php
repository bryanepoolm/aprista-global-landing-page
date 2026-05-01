<?php
header('Content-Type: application/json');

// Configuration
$smtpHost = 'smtp.ionos.mx';
$smtpPort = 587;
$smtpUsername = 'gerencia@distribuidoraprisuaglobal.mx';
$smtpPassword = '6aQvOxZ2Fi5Uj9';
$fromEmail = 'gerencia@distribuidoraprisuaglobal.mx';
$toEmail = 'gerencia@distribuidoraprisuaglobal.mx';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$nombre = $_POST['nombre'] ?? '';
$correo = $_POST['correo'] ?? '';
$empresa = $_POST['empresa'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Support JSON payload
if (empty($nombre) && empty($correo)) {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    if ($data) {
        $nombre = $data['nombre'] ?? '';
        $correo = $data['correo'] ?? '';
        $empresa = $data['empresa'] ?? '';
        $mensaje = $data['mensaje'] ?? '';
    }
}

if (empty($nombre) || empty($correo) || empty($mensaje)) {
    echo json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios']);
    exit;
}

// Simple SMTP Client
class SimpleSMTP
{
    private $socket;
    private $host;
    private $port;
    private $username;
    private $password;

    public function __construct($host, $port, $username, $password)
    {
        $this->host = $host;
        $this->port = $port;
        $this->username = $username;
        $this->password = $password;
    }

    public function send($from, $to, $replyTo, $subject, $body)
    {
        $this->socket = fsockopen($this->host, $this->port, $errno, $errstr, 30);
        if (!$this->socket) {
            throw new Exception("Connection failed: $errstr ($errno)");
        }

        $this->read();
        $this->cmd("EHLO " . $this->host);
        $this->cmd("STARTTLS");
        stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $this->cmd("EHLO " . $this->host);
        $this->cmd("AUTH LOGIN");
        $this->cmd(base64_encode($this->username));
        $this->cmd(base64_encode($this->password));
        $this->cmd("MAIL FROM: <$from>");
        $this->cmd("RCPT TO: <$to>");
        $this->cmd("DATA");

        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8\r\n";
        $headers .= "From: $from\r\n";
        $headers .= "Reply-To: $replyTo\r\n";
        $headers .= "Subject: $subject\r\n";

        $this->cmd($headers . "\r\n" . $body . "\r\n.");
        $this->cmd("QUIT");
        fclose($this->socket);
        return true;
    }

    private function cmd($command)
    {
        fputs($this->socket, $command . "\r\n");
        return $this->read();
    }

    private function read()
    {
        $response = "";
        while ($str = fgets($this->socket, 515)) {
            $response .= $str;
            if (substr($str, 3, 1) == " ")
                break;
        }
        return $response;
    }
}

try {
    $smtp = new SimpleSMTP($smtpHost, $smtpPort, $smtpUsername, $smtpPassword);

    $subject = "Nuevo mensaje de contacto de $nombre ($empresa)";
    $body = "
        <h2>Nuevo mensaje de contacto en Prisua Global</h2>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Email:</strong> $correo</p>
        <p><strong>Empresa/Industria:</strong> $empresa</p>
        <p><strong>Mensaje:</strong><br>" . nl2br(htmlspecialchars($mensaje)) . "</p>
    ";

    $smtp->send($fromEmail, $toEmail, $correo, $subject, $body);
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo: ' . $e->getMessage()]);
}
?>
