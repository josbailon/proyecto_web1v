document.addEventListener("DOMContentLoaded", function () {
    const eventInput = document.getElementById("event-input");
    const eventDate = document.getElementById("event-date");
    const addEventButton = document.getElementById("add-event");
    const eventList = document.getElementById("event-list");

    let events = [];

    function addEvent() {
        const eventText = eventInput.value.trim();
        const eventDateValue = eventDate.value;

        if (eventText === "" || eventDateValue === "") {
            return;
        }

        events.push({ text: eventText, date: eventDateValue });
        eventInput.value = "";
        eventDate.value = "";
        renderEvents();
    }

    function deleteEvent(index) {
        events.splice(index, 1);
        renderEvents();
    }

    function editEvent(index) {
        const newText = prompt("Editar evento", events[index].text);
        if (newText !== null) {
            events[index].text = newText;
            renderEvents();
        }
    }

    function renderEvents() {
        eventList.innerHTML = "";
        events.forEach((event, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${event.text} (Fecha: ${event.date})</span>
                <span class="edit-event" data-index="${index}">Editar</span>
                <span class="delete-event" data-index="${index}">Eliminar</span>
            `;
            eventList.appendChild(li);
        });

        const deleteButtons = document.querySelectorAll(".delete-event");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                deleteEvent(index);
            });
        });

        const editButtons = document.querySelectorAll(".edit-event");
        editButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                editEvent(index);
            });
        });
    }

    addEventButton.addEventListener("click", addEvent);
    renderEvents();

    // Agrega algunos eventos iniciales
    events.push({ text: "Reunión de equipo", date: "2023-10-15" });
    events.push({ text: "Entrega del proyecto", date: "2023-10-20" });
    renderEvents();
});
