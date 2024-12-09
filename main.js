(function() {
    emailjs.init("R743JRdbiwx7BCuQq"); // استبدل هذا بمفتاحك العام
})();


// التعامل مع الفورم عند الإرسال
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    emailjs.sendForm("service_2apclsq", "template_i0yc1qn", this)
        .then(function(response) {
            alert("تم إرسال الرسالة بنجاح!");
        }, function(error) {
            alert("حدث خطأ أثناء الإرسال: " + error.text);
        });
});

// التحكم في قائمة التنقل والـ Header
let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function() {
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active');
};

let header = document.querySelector('header');

window.onscroll = function() {
    if (this.scrollY >= 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    btnMenu.classList.remove('fa-times');
    Menu.classList.remove('active');
};
