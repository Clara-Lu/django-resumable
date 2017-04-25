document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var dj;
    
    function fileGetUploaded() {
        alert("success!");    
    }
    
    if (new Resumable().support) {
        dj = new DjangoResumable({onFileSuccess: fileGetUploaded});
    }
});
