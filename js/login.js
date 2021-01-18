var phoneico = document.getElementById("phoneico");
var pwico = document.getElementById("pwico");
var sectionFormInput = document.getElementById("sectionFormInput");
var phoneico_flag = false;
var pwico_flag = false;

phoneico.onblur = function () {
    var phoneNumber = phoneico.value;
    if (phoneNumber.replace(/\s/g, "") === "") {
        phoneico.nextElementSibling.innerHTML = "请输入手机号码";
        phoneico.nextElementSibling.style = "color:red";
    } else {
        var phoneNumber_reg = /^\d{10,}$/;
        if (phoneNumber_reg.test(phoneNumber)) {
            phoneico.nextElementSibling.innerHTML = "";
            phoneico_flag = true;
        } else {
            phoneico.nextElementSibling.innerHTML = "您的手机号码有误，请重新输入";
            phoneico.nextElementSibling.style = "color:red";
        }
    }
}
pwico.onblur = function () {
    var pwNumber = pwico.value;
    if (pwNumber.replace(/\s/g, "") === "") {
        pwico.nextElementSibling.innerHTML = "请输入密码";
        pwico.nextElementSibling.style = "color:red";
    } else {
        var pwNumber_reg = /^\d{5,}$/;
        if (pwNumber_reg.test(pwNumber)) {
            pwico.nextElementSibling.innerHTML = "";
            pwico_flag = true;
        } else {
            pwico.nextElementSibling.innerHTML = "您的密码有误，请重新输入";
            pwico.nextElementSibling.style = "color:red";
        }
    }
}
sectionFormInput.onsubmit = function (e) {
    e = e || window.event;
    if (!phoneico_flag || !pwico_flag) {
        e.preventDefault();
    }
}