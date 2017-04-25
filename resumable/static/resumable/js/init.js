document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var dj;
    
    function fileGetUploaded() {
    	alert("Your upload is successful!");
        $( "#submit-btn" ).trigger( "click" );   
    }
    
    if (new Resumable().support) {
        dj = new DjangoResumable({onFileSuccess: fileGetUploaded});
    }
});
