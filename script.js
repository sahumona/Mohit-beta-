// ---------- Mobile Menu Toggle ----------
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// ---------- Filter Books by Category ----------
function filterBooks(category, btn) {
    const cards = document.querySelectorAll('.book-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Active button change
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let visibleCount = 0;

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide "no result" message
    document.getElementById('noResult').style.display =
        visibleCount === 0 ? 'block' : 'none';
}

// ---------- Search Books ----------
function searchBooks() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const cards = document.querySelectorAll('.book-card');
    let found = 0;

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();

        if (title.includes(query) || author.includes(query)) {
            card.style.display = 'block';
            found++;
        } else {
            card.style.display = 'none';
        }
    });

    document.getElementById('noResult').style.display =
        found === 0 ? 'block' : 'none';
}

// ---------- Show Book Details (Modal) ----------
function showDetails(title, author, category) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalAuthor').textContent = "✍️ Author: " + author;
    document.getElementById('modalCategory').textContent = "🏷️ Category: " + category;
    document.getElementById('modal').style.display = 'flex';
}

// ---------- Close Modal ----------
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

// ---------- Contact Form Submit ----------
function submitForm(e) {
    e.preventDefault();
    alert("✅ Thank you! Aapka message bhej diya gaya hai.");
    e.target.reset();
}

// ---------- Smooth Scroll (extra) ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
