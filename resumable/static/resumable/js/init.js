document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var dj;

    // defined behavior: when file is successfully uploaded
    function fileGetUploaded() {
    	alert("Your upload is successful!");
        $( "#submit-btn" ).trigger( "click" );   
    }
    
    if (new Resumable().support) {
        dj = new DjangoResumable({onFileSuccess: fileGetUploaded});
    }
});
