// 1. Navbar Highlight khi cuộn trang
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// 2. Accordion cho Kỹ năng chuyên môn
document.querySelectorAll('.acc-btn').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        
        // Đóng các panel khác
        document.querySelectorAll('.acc-panel').forEach(p => {
            if (p !== panel) p.classList.remove('show');
        });

        panel.classList.toggle('show');
        button.querySelector('span').innerText = panel.classList.contains('show') ? '-' : '+';
    });
});

// 3. Filter Dự án (Trang Works)
const filterButtons = document.querySelectorAll('.f-btn');
const projectCards = document.querySelectorAll('.p-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-f');

        projectCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-cat') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});