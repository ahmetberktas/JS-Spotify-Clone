/* API İşlemleri */

import { url, options } from "./constants.js";

export class API {
    constructor() {
        this.songs = [];
        this.searchSongs = [];
    }
    async getPopulerSongs() {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            this.songs = data.data;
        } catch(err) {
            console.log("Veriler Alınırken Hata oluştu.", err);
        }
    }
    async getSearchSongs(query) {
        try {
            const res = await fetch(`https://shazam-api7.p.rapidapi.com/search?term=${query}`, options);
            const data = await res.json();
            this.searchSongs = data.data.tracks.hits;
        } catch(err) {
            console.log("Aranan Veri Bulunamadı.", err);
        }
    }
}