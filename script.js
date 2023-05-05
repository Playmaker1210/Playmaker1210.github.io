function CopyToClipboard() {
    let email = "hatvanitamas02@gmail.com";
    navigator.clipboard.writeText(email); 
    alert("Email kimásolva! " + email);
  }