const connection = require('../../../../db-config');
class TrackModel {
    // ******************** recupère la liste des pistes
    async getTracks() {
        try {
            const sql = 'SELECT track.title AS title, track.youtube_url, album.title AS album FROM track INNER JOIN album ON album.id = track.id_album';
            const result = await connection.promise().query(sql);
            return result[0];
        } catch (error) {
            throw error;
        }
    }
    // ******************** recupère une piste par son id
    async getTracksById(id) {
        try {
            const sql = 'SELECT track.title AS title, track.youtube_url, album.title AS album FROM track INNER JOIN album ON album.id = track.id_album where track.id = ?';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    // ********************************** Crée une piste dans la db
    async createTrack(title, youtube_url, album) {
        try {
            const sql = 'INSERT INTO `track` (`title`, `youtube_url`, `id_album`) VALUES (?, ?, (SELECT id FROM `album` WHERE album.title = ?))';
            const result = await connection.promise().query(sql, [title, youtube_url, album]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    // ********************************** Met à jour une piste dans la db
    async updateTrack(id, title, youtube_url, album) {
        try {
            const sql = 'UPDATE track SET title = ?, youtube_url = ?, id_album = (SELECT id FROM album WHERE title = ?) WHERE track.id = ?';
            const result = await connection.promise().query(sql, [title, youtube_url, album, id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteTrack(id) {
        // ********************************** Suprimme une piste dans la db
        try {
            const sql = 'DELETE FROM track WHERE id = ?';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }

}
module.exports = new TrackModel();