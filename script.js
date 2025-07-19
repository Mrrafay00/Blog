document.addEventListener('DOMContentLoaded', () => {
            // --- Scroll-to-Top Button functionality ---
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

            // --- Recent Posts Functionality ---
            // Dummy data for recent posts
            const recentPostsData = [
                { title: "The Future of Space Exploration", url: "#" },
                { title: "Innovations in Earth Observation", url: "#" },
                { title: "AI in Astrophysics: New Frontiers", url: "#" },
                { title: "Decoding Cosmic Mysteries", url: "#" },
                { title: "Next-Gen Satellites and Their Impact", url: "#" }
            ];

            function loadRecentPosts() {
                const recentPostsList = document.getElementById('recent-posts-list');
                if (!recentPostsList) return; // Exit if element not found

                recentPostsList.innerHTML = ''; // Clear existing content

                recentPostsData.forEach(post => {
                    const listItem = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.href = post.url;
                    anchor.textContent = post.title;
                    listItem.appendChild(anchor);
                    recentPostsList.appendChild(listItem);
                });
            }

            // --- Comment Section Functionality ---
            // Dummy data for comments
            const commentsData = [
                { author: "Zeeshan Ali", text: "Great article! Very informative about the Space Apps Challenge.", date: "July 18, 2025 10:30 AM" },
                { author: "Fatima Khan", text: "I participated last year, it was an amazing experience. The challenges are truly inspiring.", date: "July 19, 2025 02:15 PM" },
                { author: "Hassan Qureshi", text: "I appreciate the detailed breakdown of the challenges. Looking forward to the next one!", date: "July 19, 2025 04:00 PM" }
            ];

            const commentForm = document.getElementById('comment-form');
            const commentsListContainer = document.getElementById('comments-list');

            function renderComments() {
                if (!commentsListContainer) return; // Exit if element not found

                commentsListContainer.innerHTML = ''; // Clear previous comments

                if (commentsData.length === 0) {
                    commentsListContainer.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
                    return;
                }

                commentsData.forEach(comment => {
                    const commentItem = document.createElement('div');
                    commentItem.classList.add('comment-item');
                    commentItem.innerHTML = `
                        <h4>${comment.author}</h4>
                        <p>${comment.text}</p>
                        <small>Date: ${comment.date}</small>
                    `;
                    commentsListContainer.appendChild(commentItem);
                });
            }

            if (commentForm) {
                commentForm.addEventListener('submit', (event) => {
                    event.preventDefault(); // Prevent default form submission

                    const authorInput = document.getElementById('comment-author');
                    const emailInput = document.getElementById('comment-email');
                    const textInput = document.getElementById('comment-text');

                    const author = authorInput.value.trim();
                    const email = emailInput.value.trim();
                    const text = textInput.value.trim();

                    if (author === '' || email === '' || text === '') {
                        alert('Please fill in all required fields (Name, Email, Comment).');
                        return;
                    }

                    // Basic email validation (you can use a more robust regex for production)
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        alert('Please enter a valid email address.');
                        return;
                    }

                    const newComment = {
                        author: author,
                        text: text,
                        date: new Date().toLocaleString() // Current date and time
                    };

                    commentsData.push(newComment); // Add new comment to our dummy data
                    renderComments(); // Re-render comments to show the new one

                    // Clear form fields
                    authorInput.value = '';
                    emailInput.value = '';
                    textInput.value = '';

                    // Optional: You could show a success message here instead of alert
                    // alert('Your comment has been posted!');
                });
            }

            // Load recent posts and comments when the page loads
            loadRecentPosts();
            renderComments();
        });
