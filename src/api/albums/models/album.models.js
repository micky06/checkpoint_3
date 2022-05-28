const connection = require('../../../../db-config');
class AlbumModel {

    // ******************** recupère la liste des albums
    async getAlbums() {
        try {
            const sql = 'SELECT title, genre, picture, artist FROM album';
            const result = await connection.promise().query(sql);
            return result[0];
        } catch (error) {
            throw error;
        }
    }
    // ******************** recupère un album par son id
    async getAlbumById(id) {
        try {
            const sql = 'SELECT title, genre, picture, artist FROM album where id = ?';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    // ******************** recupère toutes les pistes d'un album
    async getTracksByAlbumId(id) {
        try {
            const sql = 'SELECT track.title, track.youtube_url FROM track WHERE id_album = ?';
            // const sql = 'SELECT track.title, track.youtube_url FROM track INNER JOIN album ON album.id = ?';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    // ********************************** Crée un album dans la db
    async createAlbum(title, genre, picture, artist) {
        try {
            const sql = 'INSERT INTO `album` (`title`, `genre`, `picture`, `artist`) VALUES (?, ?, ?, ?)';
            const result = await connection.promise().query(sql, [title, genre, picture, artist]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    // ********************************** Met à jour un album dans la db
    async updateAlbum(id, title, genre, picture, artist) {
        try {
            const sql = 'UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?';
            const result = await connection.promise().query(sql, [title, genre, picture, artist, id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    // ********************************** Suprimme un album dans la db
    async deleteAlbum(id) {
        try {
            const sql = 'DELETE FROM album WHERE id = ?';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

}
module.exports = new AlbumModel();
