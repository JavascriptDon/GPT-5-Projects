const lists = ["todo", "doing", "done"];

    function createCard(text, description, assignee, priority) {
      const div = document.createElement("div");
      div.className = `card ${priority}`;
      div.innerHTML = `
        <div class="actions">
          <span class="edit">✎</span>
          <span class="delete">✕</span>
        </div>
        <div class="text">${text}</div>
        <div class="desc">${description || ""}</div>
        <div class="meta">
          👤 <span class="assignee">${assignee}</span>
          <span class="priority">${priority}</span>
        </div>
      `;

      div.querySelector(".delete").onclick = () => div.remove();
      div.querySelector(".edit").onclick = () => enableEdit(div);

      return div;
    }

    function enableEdit(card) {
      card.classList.add("editing");

      const textEl = card.querySelector(".text");
      const descEl = card.querySelector(".desc");

      const originalText = textEl.innerText;
      const originalDesc = descEl.innerText;

      textEl.innerHTML = `<input class="edit-input" value="${originalText}" />`;
      descEl.innerHTML = `<textarea class="edit-input">${originalDesc}</textarea>`;

      const input = textEl.querySelector("input");
      const textarea = descEl.querySelector("textarea");

      input.focus();

      const actions = card.querySelector(".actions");
      actions.innerHTML = `<span class="save">✔</span>`;

      function save() {
        textEl.innerText = input.value;
        descEl.innerText = textarea.value;
        exitEdit();
      }

      function cancel() {
        textEl.innerText = originalText;
        descEl.innerText = originalDesc;
        exitEdit();
      }

      function exitEdit() {
        card.classList.remove("editing");
        actions.innerHTML = `
          <span class="edit">✎</span>
          <span class="delete">✕</span>
        `;
        actions.querySelector(".edit").onclick = () => enableEdit(card);
        actions.querySelector(".delete").onclick = () => card.remove();
      }

      actions.querySelector(".save").onclick = save;

      [input, textarea].forEach(el => {
        el.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            cancel();
          }
          if (e.key === "Enter" && el.tagName === "INPUT") {
            save();
          }
        });
      });
    }

    function addTask() {
      const text = document.getElementById("task").value;
      const description = document.getElementById("description").value;
      const assignee = document.getElementById("assignee").value;
      const priority = document.getElementById("priority").value;
      if (!text) return;

      document.getElementById("todo").appendChild(createCard(text, description, assignee, priority));
      document.getElementById("task").value = "";
      document.getElementById("description").value = "";
    }

    lists.forEach(id => {
      new Sortable(document.getElementById(id), {
        group: "shared",
        animation: 150,
        onAdd: enforceWIP,
        onUpdate: enforceWIP
      });
    });

    function enforceWIP(evt) {
      const column = evt.to.closest(".column");
      const limit = column.querySelector("input").value;
      if (evt.to.children.length > limit) {
        alert("WIP limit exceeded!");
        evt.from.appendChild(evt.item);
      }
    }

    document.getElementById("search").addEventListener("input", e => {
      const val = e.target.value.toLowerCase();
      document.querySelectorAll(".card").forEach(c => {
        c.style.display = c.innerText.toLowerCase().includes(val) ? "block" : "none";
      });
    });

    // Expose addTask globally for onclick
    window.addTask = addTask;