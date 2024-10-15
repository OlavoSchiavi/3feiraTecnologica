var fileUrl = window.location.href + "/VitalSync";

        // Gera o QR code no div com o ID "qrcode"
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: fileUrl, // URL para o arquivo APK
            width: 300,    // Largura do QR code
            height: 300,   // Altura do QR code
        });