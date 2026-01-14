// Artworks Database
        const artworks = [
            // Renaissance
            {
                id: 1,
                title: "The Birth of Venus",
                artist: "Sandro Botticelli",
                date: "March 1486",
                category: "renaissance",
                description: "An iconic painting depicting the goddess Venus emerging from the sea. This masterpiece represents the rebirth of classical culture and humanistic ideals.",
                image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600"
            },
            {
                id: 2,
                title: "The Last Supper",
                artist: "Leonardo da Vinci",
                date: "September 1498",
                category: "renaissance",
                description: "A mural painting representing the scene of Jesus's last supper with his apostles. Known for its dramatic composition and emotional depth.",
                image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600"
            },
            {
                id: 3,
                title: "The School of Athens",
                artist: "Raphael",
                date: "August 1511",
                category: "renaissance",
                description: "A fresco depicting philosophers and scholars of ancient Greece. Represents the marriage of art, philosophy, and science.",
                image: "https://i.pinimg.com/1200x/d2/40/d4/d240d456c4971c7f0a4fc2ef27adc889.jpg"
            },
            
            // Impressionism
            {
                id: 4,
                title: "Starry Night",
                artist: "Vincent van Gogh",
                date: "June 1889",
                category: "impressionism",
                description: "A swirling night sky over a French village. Van Gogh's masterpiece captures emotion through bold brushstrokes and vibrant colors.",
                image: "https://i.pinimg.com/1200x/43/ed/71/43ed71c8fa1ffd98a7c064fb39515f2b.jpg"
            },
            {
                id: 5,
                title: "Water Lilies",
                artist: "Claude Monet",
                date: "November 1916",
                category: "impressionism",
                description: "Part of a series of approximately 250 oil paintings depicting Monet's flower garden at Giverny, capturing the play of light on water.",
                image: "https://i.pinimg.com/736x/79/1d/6f/791d6f168ca89f7fd8ee83947e197cc8.jpg"
            },
            {
                id: 6,
                title: "Dance at Le Moulin de la Galette",
                artist: "Pierre-Auguste Renoir",
                date: "May 1876",
                category: "impressionism",
                description: "A vibrant scene of Parisian life showing people dancing and socializing. Celebrates the joy of modern urban leisure.",
                image: "https://i.pinimg.com/1200x/f6/30/2e/f6302e9aca5472e575db00cbb0725751.jpg"
            },
            
            // Modern Art
            {
                id: 7,
                title: "The Persistence of Memory",
                artist: "Salvador Dalí",
                date: "August 1931",
                category: "modern",
                description: "Famous for its melting clocks, this surrealist masterpiece explores concepts of time, memory, and the subconscious mind.",
                image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600"
            },
            {
                id: 8,
                title: "Guernica",
                artist: "Pablo Picasso",
                date: "June 1937",
                category: "modern",
                description: "A powerful anti-war painting created in response to the bombing of Guernica. A profound statement on the tragedies of war.",
                image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600"
            },
            {
                id: 9,
                title: "The Scream",
                artist: "Edvard Munch",
                date: "May 1893",
                category: "modern",
                description: "An expressionist icon depicting existential angst. The swirling sky and agonized figure have become symbols of modern anxiety.",
                image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600"
            },
            
            // Contemporary
            {
                id: 10,
                title: "Campbell's Soup Cans",
                artist: "Andy Warhol",
                date: "July 1962",
                category: "contemporary",
                description: "Thirty-two canvases depicting Campbell's soup cans. A defining work of pop art that challenged traditional definitions of art.",
                image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600"
            },
            {
                id: 11,
                title: "Balloon Dog",
                artist: "Jeff Koons",
                date: "April 1999",
                category: "contemporary",
                description: "A monumental stainless steel sculpture that celebrates childhood joy and nostalgia while questioning the nature of art and value.",
                image: "https://i.pinimg.com/736x/ce/bf/3c/cebf3c560ae65c775ec042f7525dc7b1.jpg"
            },
            {
                id: 12,
                title: "Untitled (Portrait of Ross in L.A.)",
                artist: "Felix Gonzalez-Torres",
                date: "March 1991",
                category: "contemporary",
                description: "A conceptual artwork made of candy representing the artist's partner who died of AIDS. Visitors are invited to take pieces.",
                image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600"
            },
            
            // Abstract
            {
                id: 13,
                title: "Composition VIII",
                artist: "Wassily Kandinsky",
                date: "February 1923",
                category: "abstract",
                description: "A pioneering work of abstract art featuring geometric shapes and vibrant colors. Kandinsky believed colors and forms had spiritual values.",
                image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600"
            },
            {
                id: 14,
                title: "No. 5, 1948",
                artist: "Jackson Pollock",
                date: "November 1948",
                category: "abstract",
                description: "A dense drip painting showcasing Pollock's revolutionary technique. The chaotic yet controlled composition revolutionized modern art.",
                image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600"
            },
            {
                id: 15,
                title: "Broadway Boogie Woogie",
                artist: "Piet Mondrian",
                date: "January 1943",
                category: "abstract",
                description: "Inspired by New York City and jazz music, this painting uses primary colors and geometric forms to create rhythm and movement.",
                image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600"
            }
        ];

        let currentCategory = 'all';

        // Category Information
        const categoryInfo = {
            all: {
                title: "All Artworks",
                description: "Explore our complete collection of masterpieces from various periods and styles"
            },
            renaissance: {
                title: "Renaissance Art",
                description: "Masterpieces from the 14th-17th century European cultural movement"
            },
            impressionism: {
                title: "Impressionism",
                description: "19th century art movement characterized by small brush strokes and emphasis on light"
            },
            modern: {
                title: "Modern Art",
                description: "Revolutionary artworks from the late 19th to mid-20th century"
            },
            contemporary: {
                title: "Contemporary Art",
                description: "Art produced from the 1960s to the present day"
            },
            abstract: {
                title: "Abstract Art",
                description: "Non-representational art emphasizing colors, shapes, and forms"
            }
        };

        function filterCategory(category) {
            currentCategory = category;
            
            // Update button states
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayArtworks();
        }

        function displayArtworks() {
            const container = document.getElementById('artworksContainer');
            const filtered = currentCategory === 'all' 
                ? artworks 
                : artworks.filter(art => art.category === currentCategory);
            
            const info = categoryInfo[currentCategory];
            
            container.innerHTML = `
                <div class="category-section">
                    <div class="category-header">
                        <h2>${info.title}</h2>
                        <p>${info.description}</p>
                    </div>
                    <div class="artwork-grid">
                        ${filtered.map(artwork => `
                            <div class="artwork-card" onclick="viewArtwork(${artwork.id})">
                                <img src="${artwork.image}" alt="${artwork.title}" class="artwork-thumbnail">
                                <div class="artwork-card-body">
                                    <h3 class="artwork-title">${artwork.title}</h3>
                                    <p class="artwork-artist">${artwork.artist}</p>
                                    <p class="artwork-date"><i class="far fa-calendar"></i> ${artwork.date}</p>
                                    <p class="artwork-description">${artwork.description}</p>
                                    <a href="artwork-detail.html?id=${artwork.id}" class="view-details">
                                        View Details <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function viewArtwork(id) {
            window.location.href = `artwork-detail.html?id=${id}`;
        }

        // Initial display
        displayArtworks();