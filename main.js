const dropdown = document.getElementById('dropdown');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

let timeout; // متغير لتخزين المؤقت

// عرض القائمة عند المرور بالماوس
dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // إلغاء أي مؤقت موجود
    dropdown.classList.add('show'); // عرض القائمة
});

// تأخير الإغلاق عند مغادرة القائمة
dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdown.classList.remove('show'); // إخفاء القائمة
    }, 100); // التأخير بمقدار 500 مللي ثانية
});