import { API } from "./assets/scripts/api.js";
import { element, renderCards, renderPlayingInfo, renderSearchCards } from "./assets/scripts/ui.js";

const api = new API();

document.addEventListener("DOMContentLoaded", async () => {
    await api.getPopulerSongs();
    renderCards(api.songs);
});

element.list.addEventListener("click", (e) => {
    if (e.target.id === "play-btn"){
        const parent = e.target.closest(".card");
        renderPlayingInfo(parent.dataset);
    }
})

element.searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    if(!query) return;
    element.title.innerHTML = `${query} İçin Sonuçlar`;
    await api.getSearchSongs(query);
    renderSearchCards(api.searchSongs);
})