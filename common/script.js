function CheckIsNumeric(objEvt) {
        var charCode = (objEvt.which) ? objEvt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            //document.getElementById("txtNumber").style.backgroundColor = "#FFB2B2";
            console.log("Only numbers allowed")
            return false;
        }
        else {
           // document.getElementById("txtNumber").style.backgroundColor = "#B2D8B2";
            return true;
        }
    }
    function CheckIsCharacter(objEvt) {
        var charCode = (objEvt.which) ? objEvt.which : event.keyCode
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            //document.getElementById("txtCharacter").style.backgroundColor = "#B2D8B2";
            console.log("Only characters allowed")
            return true;
        }
        else {
            //document.getElementById("txtCharacter").style.backgroundColor = "#FFB2B2";
            return false;
        }
    }