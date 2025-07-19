document.addEventListener('DOMContentLoaded', () => {
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Recent Posts
    const recentPostsData = [
        { title: "The Future of Space Exploration", url: "#" },
        { title: "Innovations in Earth Observation", url: "#" },
        { title: "AI in Astrophysics: New Frontiers", url: "#" },
        { title: "Decoding Cosmic Mysteries", url: "#" },
        { title: "Next-Gen Satellites and Their Impact", url: "#" }
    ];

    function loadRecentPosts() {
        const recentPostsList = document.getElementById('recent-posts-list');
        if (!recentPostsList) return;

        recentPostsList.innerHTML = '';
        recentPostsData.forEach(post => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = post.url;
            a.textContent = post.title;
            li.appendChild(a);
            recentPostsList.appendChild(li);
        });
    }

    // Comments System with Local Storage
    let commentsData = JSON.parse(localStorage.getItem('blogComments')) || [
        { author: "Zeeshan Ali", text: "Great article! Very informative about the Space Apps Challenge.", date: new Date().toLocaleString() },
        { author: "Fatima Khan", text: "I participated last year, it was an amazing experience.", date: new Date().toLocaleString() }
    ];

    function saveComments() {
        localStorage.setItem('blogComments', JSON.stringify(commentsData));
    }

    function renderComments() {
        const commentsList = document.getElementById('comments-list');
        if (!commentsList) return;

        commentsList.innerHTML = '';
        
        if (commentsData.length === 0) {
            commentsList.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
            return;
        }

        commentsData.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.innerHTML = `
                <h4>${comment.author}</h4>
                <p>${comment.text}</p>
                <small>Posted on: ${comment.date}</small>
            `;
            commentsList.appendChild(commentDiv);
        });
    }

    // Comment Form Submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const author = document.getElementById('comment-author').value.trim();
            const email = document.getElementById('comment-email').value.trim();
            const text = document.getElementById('comment-text').value.trim();
            
            if (!author || !text) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const newComment = {
                author,
                text,
                date: new Date().toLocaleString()
            };
            
            commentsData.unshift(newComment);
            saveComments();
            renderComments();
            
            commentForm.reset();
        });
    }

    // Initialize
    loadRecentPosts();
    renderComments();
});
