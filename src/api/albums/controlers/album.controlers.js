const albumModels = require('../models/album.models');
class AlbumControler {
    
        async listAlbums(req, res) {
    
            // ************** recupere la liste des album
            try {
                const result = await albumModels.getAlbums();
                res.status(201).send(result);
            } catch (error) {
                res.status(500).send({
                    error: error.message,
                });
            }
        }
    
        async listAlbumById(req, res) {
    
            // ************** recupere un album par id
            const {
                id
            } = req.params;
            try {
                const result = await albumModels.getAlbumById(id);
                res.status(201).send(result);
            } catch (error) {
                res.status(500).send({
                    error: error.message,
                });
            }
        }
    
        async listTrackByAlbumId(req, res) {
    
            // ************** recupere la liste des tracks d'un album
            const {
                id
            } = req.params;
            try {
                const result = await albumModels.getTracksByAlbumId(id);
                res.status(201).send(result);
            } catch (error) {
                res.status(500).send({
                    error: error.message,
                });
            }
        }
    
        async createAlbum(req, res) {
            const {
                title,
                genre, 
                picture, 
                artist,
            } = req.body;
    
            // ********************************** Ajoute un album
            try {
                await albumModels.createAlbum(title, genre, picture, artist);
                res.status(201).send('album successfully created');
            } catch (error) {
                res.status(500).send({
                    error: error.message,
                });
            }
        }
    
        // ********************************** met a jour un album
        async updateAlbum(req, res) {
            try {
                const {
                    id,
                    title,
                    genre, 
                    picture, 
                    artist,
                        } = req.body;
                await albumModels.updateAlbum(id, title, genre, picture, artist);
                res.status(200).send('album successfully updated');
            } catch (error) {
                res.status(500).send({
                    error: error.message
                });
            }
        }
        // ********************************** efface un album
        async deleteAlbum(req, res) {
            try {
                const {
                    id
                } = req.body;
                await albumModels.deleteAlbum(id);
                res.status(200).send('album successfully deleted');
            } catch (error) {
                res.status(500).send({
                    error: error.message,
                });
            }
        }
    }
module.exports = new AlbumControler();
