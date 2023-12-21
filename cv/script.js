document.getElementById("show").addEventListener("change", function() {
    const detailElements = document.getElementsByClassName('detail');
    const allElements = document.getElementsByClassName('all');

    switch (this.value) {
        case "Detail":
            for (let i = 0; i < detailElements.length; i++) {
                detailElements[i].style.display = 'block';
            }
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.display = 'none';
            }
            break;
        case "All":
            for (let i = 0; i < detailElements.length; i++) {
                detailElements[i].style.display = 'block';
            }
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.display = 'block';
            }
            break;
        default:
            for (let i = 0; i < detailElements.length; i++) {
                detailElements[i].style.display = 'none';
            }
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.display = 'none';
            }
            break;
    }
});

function generateqrcode(thevalue) {
    let qrcode = new QRCode(document.getElementById("qrcode"), {
      text: thevalue,
      width: 128,
      height: 128,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
}

generateqrcode("https://0fajarpurnama0.github.io/cv");