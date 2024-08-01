export const element = {
    list: document.querySelector("#list"),
    playingInfo: document.querySelector(".playing"),
    searchForm: document.querySelector("#search-form"),
    title: document.querySelector(".songs #title"),
}

export const renderCards = (songs) => {
    element.list.innerHTML = "";
    songs.forEach((song) => {
        const div = document.createElement('div');
        div.dataset.url = song.attributes.previews[0].url;
        div.dataset.artist = song.attributes.artistName;
        div.dataset.name = song.attributes.name;
        div.className = "card";
        div.innerHTML = `
            <figure>
                <img src="./assets/images/no-text.png">
                <div class="play">
                    <i id="play-btn" class="bi bi-play-fill"></i>
                </div>
            </figure>
            <h4>${song.attributes.artistName}</h4>
            <p>${song.attributes.name}</p>
        `;
        element.list.appendChild(div);
    })
}

export const renderSearchCards = (searchSongs) => {
    element.list.innerHTML = "";
    searchSongs.forEach((searchSong) => {
        const div = document.createElement("div");
        div.dataset.url = searchSong.stores.apple.previewurl;
        div.dataset.artist = searchSong.heading.subtitle;
        div.dataset.name = searchSong.heading.title;
        div.className = "card";
        div.innerHTML = `
            <figure>
                <img src="./assets/images/no-text.png">
                <div class="play">
                    <i id="play-btn" class="bi bi-play-fill"></i>
                </div>
            </figure>
            <h4>${searchSong.heading.subtitle}</h4>
            <p>${searchSong.heading.title}</p>
        `;
        element.list.appendChild(div);
    })
}

export const renderPlayingInfo = (data) => {
    element.playingInfo.innerHTML = `
        <div class="info">
            <img class="animate" src="./assets/images/no-text.png">
            <div>
                <p>${data.artist}</p>
                <h3>${data.name}</h3>
            </div>
        </div>
        <audio controls autoplay>
            <source src="${data.url}">
        </audio>
    `;
}