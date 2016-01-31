var CCC = function() {
     return {
       init: init,
       autoLogin: autoLogin,
       sendMessage: sendMessage
    }
    function autoLogin() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "ui/1/loginHandler", false); // false means synchronous
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("username=kermit&password=kermit");
        //after this we have required cookie, but seems something yet should happend, so just request main page
        var xhr = new XMLHttpRequest();
        xhr.open('GET', ".", false); // false means synchronous
        xhr.send();
    }

    function sendMessage() {
        window.parent.postMessage("modeler-closed", "*");
    }

    function init() {
        /*
         * this doesn't work every time, 
         * as browser can open another url faster than message will be sent
         */
        window.addEventListener("beforeunload", sendMessage, false);

        KISBPM.TOOLBAR.ACTIONS.closeEditor = sendMessage;
    }
}();
CCC.autoLogin();
