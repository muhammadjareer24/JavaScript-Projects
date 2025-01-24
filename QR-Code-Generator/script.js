const QRCodeContainer = document.querySelector(".QRCodeContainer");

const QRCode = document.querySelector(".QRCode");
const button = document.querySelector("button");

button.addEventListener("click", generateQRCode);

function generateQRCode() {
  const QRTextInput = document.querySelector(".QRText");

  const QRText = QRTextInput.value;

  if (QRText.length > 0) {
    QRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRText}`;

    QRCodeContainer.classList.add("showQRCodeContainer");

    QRTextInput.value = "";
  }
}
