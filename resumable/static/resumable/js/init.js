document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var dj;
    
    // user-defined option
    function fileGetUploaded() {
    	alert("Your upload is successful!");
        $( "#submit-btn" ).trigger( "click" );   
    }
    
    if (new Resumable().support) {
        dj = new DjangoResumable({onFileSuccess: fileGetUploaded});
    }
});
