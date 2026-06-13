function setupNotice(id, text, seconds = 0, extraStyle = "") {
    const container = document.getElementById(id);
    if (!container) return; 

    const textId = 'text-' + id;
    
    // แสดงข้อความ
    container.innerHTML = `
        <div id="${textId}" style="
            text-align: center; 
            margin-top: 10px; 
            transition: opacity 1s ease; 
            opacity: 1; 
            font-family: sans-serif;
            ${extraStyle} 
        ">
            ${text}
        </div>
    `;

    // --- ส่วนควบคุมการจางหาย ---
    // ถ้า seconds มีค่ามากกว่า 0 ถึงจะทำงาน (ถ้าเป็น 0 จะค้างไว้ตลอด)
    if (seconds > 0) {
        setTimeout(() => {
            const el = document.getElementById(textId);
            if (el) {
                el.style.opacity = '0';
                setTimeout(() => { el.style.display = 'none'; }, 1000);
            }
        }, seconds * 1000);
    }
}
window.addEventListener('load', function() {
    // แบบที่ 3: แช่ค้างไว้ตลอด (ไอดีใหม่ที่คุณต้องการเพิ่ม)
    setupNotice('Video4K', 
        '✨ ซีรี่ย์มีความคมชัด 4K หากหนังสะดุดให้ลดความคมชัดลงห้ามเกิน 1080p', 
        50, 
        'color: #2ecc71; font-size: 19px; border-bottom: 1px dashed #ccc; padding-bottom: 5px;'
    );
});

