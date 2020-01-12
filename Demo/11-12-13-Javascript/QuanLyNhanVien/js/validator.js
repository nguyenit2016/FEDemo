function Validation() {
    //Kiem tra rong
    this.KiemTraRong = function (idElement, idNotification, textNotification) {
        var isValid = true;
        var valueElement = document.getElementById(idElement).value;
        if (valueElement === "") {
            isValid = false;
            document.getElementById(idNotification).innerHTML = textNotification;
        } else {
            document.getElementById(idNotification).innerHTML = '';
        }
        return isValid;
    }
    this.KiemTraWithRegExp = function (idElement, idNotification, textNotification, typeCheck) {
        var isValid = true;
        var valueElement = document.getElementById(idElement).value;
        var pattern = "";
        switch (typeCheck) {
            case "FullName":
                pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
                break;
            case "Email":
                pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                    + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
                break;
            case "Password":
                pattern = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$");
                break;
        }
        if (!pattern.test(valueElement)) {
            isValid = false;
            document.getElementById(idNotification).innerHTML = textNotification;
        } else {
            document.getElementById(idNotification).innerHTML = '';
        }
        return isValid;
    }
    this.KiemTraDropdown = function (idElement, idNotification, textNotification) {
        var isValid = true;
        var valueElement = document.getElementById(idElement);
        if (valueElement.selectedIndex === 0) {
            isValid = false;
            document.getElementById(idNotification).innerHTML = textNotification;
        } else {
            document.getElementById(idNotification).innerHTML = '';
        }
        return isValid;
    }
}