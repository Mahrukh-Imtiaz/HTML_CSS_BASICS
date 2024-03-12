document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("jobApplicationForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(form);

        // Create table
        const table = document.createElement("table");
        table.classList.add("submitted-data");

        // Add table header
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = "<th>Field</th><th>Value</th>";
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Add table body
        const tbody = document.createElement("tbody");
        for (const [key, value] of formData.entries()) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${key}</td><td>${value}</td>`;
            tbody.appendChild(row);
        }
        table.appendChild(tbody);

        // Append table to the container
        const container = document.querySelector(".container");
        container.appendChild(table);

        // Reset the form
        form.reset();
    });
});
