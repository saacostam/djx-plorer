/**
 * The playable song
 */
export interface Song{
    /**
     * The name of the song
     */
    name: string;

    /**
     * The artist(s) of the song, as a string
     */
    artist: string;

     /**
     * The tempo of the song.
     * A higher number means the song is faster.
     */
        tempo: number;

    /**
     * The description of the song
     */
    attributes: SongAttributes
}

export interface SongAttributes {
    /**
     * The valence of the song.
     * A higher number means the song is more positive.
     */
    valence: number;

    /**
     * The energy of the song.
     * A higher number means the song is more energetic.
     */
    energy: number;

    /**
     * The danceability of the song.
     * A higher number means the song is more danceable.
     */
    danceability: number;

    /**
     * The speechiness of the song.
     * A higher number means the song is more speechy.
     */
    speechiness: number;

    /**
     * The acousticness of the song.
     * A higher number means the song is more acoustic.
     */
    acousticness: number;

    /**
     * The instrumentalness of the song.
     * A higher number means the song is more instrumental.
     */
    instrumentalness: number;

    /**
     * The liveness of the song.
     * A higher number means the song is more live.
     */
    liveness: number;
}
