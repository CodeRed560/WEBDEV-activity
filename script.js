// 1️⃣ Load quotes from localStorage OR make an empty array
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

// 2️⃣ Display the quotes on screen
function showQuotes() {
    const list = document.getElementById("quoteList");
    list.innerHTML = "";

    quotes.forEach((q, index) => {
        list.innerHTML += `
            <li>
                ${q}
                <button class="delete-btn" onclick="deleteQuote(${index})">X</button>
            </li>
        `;
    });
}

// 3️⃣ Add a new quote
function addQuote() {
    const input = document.getElementById("quoteInput");
    const text = input.value.trim();

    if (text === "") return alert("Please type a quote!");

    quotes.push(text);

    // Save to localStorage
    localStorage.setItem("quotes", JSON.stringify(quotes));

    input.value = "";
    showQuotes();
}

// 4️⃣ Delete a quote
function deleteQuote(i) {
    quotes.splice(i, 1);

    localStorage.setItem("quotes", JSON.stringify(quotes));

    showQuotes();
}

// 5️⃣ Show quotes on page load
showQuotes();
