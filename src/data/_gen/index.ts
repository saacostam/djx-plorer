import { Song, SongAttributes } from "../../types";
import { ARTISTS } from "./mock/artists";
import { NOUNS } from "./mock/nouns";
import { VERBS } from "./mock/verbs";
import { getRandomFloatBetween, getRandomIntegerBetween } from "./utils";

interface GenerateSongsOptions {
    numberOfSongs: number;
}

export function generateSongs({
    numberOfSongs,
}: GenerateSongsOptions): Song[] {
    const generatedSongs: Song[] = [];

    for (let i = 0; i < numberOfSongs; i++) {
        const song = generateOneSong();
        generatedSongs.push(song);
    }

    return generatedSongs;
}

function generateOneSong(): Song {
    return {
        name: generateSongName(),
        artist: generateArtistName(),
        tempo: getRandomIntegerBetween(60, 180),
        attributes: generateSongAttributes(),
    }
}

enum SongNameSection {
    Noun = 0,
    Verb = 1,
}

const SONG_COMPOSITION_TEMPLATES: (SongNameSection | string)[][] = [
    [SongNameSection.Noun, SongNameSection.Verb, SongNameSection.Noun],
    [SongNameSection.Noun, "and", SongNameSection.Noun],
    [SongNameSection.Verb, SongNameSection.Noun],
    ["The", SongNameSection.Noun],
]

function generateSongName(): string {
    const template = SONG_COMPOSITION_TEMPLATES[Math.floor(Math.random() * SONG_COMPOSITION_TEMPLATES.length)];

    let songName = "";

    for (let i=0; i<template.length; i++) {
        const section = template[i];
        if (typeof section === "string") {
            songName += section;
        }else if (section === SongNameSection.Noun) {
            songName += NOUNS[Math.floor(Math.random() * NOUNS.length)];
        }else if (section === SongNameSection.Verb) {
            songName += VERBS[Math.floor(Math.random() * NOUNS.length)];
        }else {
            throw new Error("Invalid template section: " + section);

        }
    }

    return songName;
}

function generateArtistName(): string {
    return ARTISTS[Math.floor(Math.random() * ARTISTS.length)];
}

function generateSongAttributes(): SongAttributes {
    return {
        valence: getRandomFloatBetween(0, 1),
        energy: getRandomFloatBetween(0, 1),
        danceability: getRandomFloatBetween(0, 1),
        speechiness: getRandomFloatBetween(0, 1),
        acousticness: getRandomFloatBetween(0, 1),
        instrumentalness: getRandomFloatBetween(0, 1),
        liveness: getRandomFloatBetween(0, 1),
    }
}
