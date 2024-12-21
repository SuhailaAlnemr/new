document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");
    const loadPostsBtn = document.getElementById("load-posts-btn");

    const samplePosts = [
        { title: "5 Tips for Productivity", content: "Discover ways to enhance your daily productivity and achieve your goals." },
        { title: "Why I Love Blogging", content: "Blogging is an amazing way to share your thoughts with the world." },
        { title: "Top 10 Travel Destinations", content: "Explore the most beautiful places to visit this year." },
        { title: "How to Stay Healthy", content: "Learn simple habits to maintain a healthy lifestyle." },
        { title: "The Art of Minimalism", content: "Declutter your life and find joy in simplicity." }
    ];

    let loadedPosts = 0;

    function loadPosts() {
        for (let i = 0; i < 2 && loadedPosts < samplePosts.length; i++) {
            const post = samplePosts[loadedPosts];
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
            loadedPosts++;
        }

        if (loadedPosts >= samplePosts.length) {
            loadPostsBtn.style.display = "none";
        }
    }

    loadPostsBtn.addEventListener("click", loadPosts);
});
