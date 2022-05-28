const connection = require('../../../../db-config');
const trackModels = require('../models/track.models');
class TrackControler {

    async listTracks(req, res) {

        // ************** recupere la liste des tracks
        try {
            const result = await trackModels.getTracks();
            res.status(201).send(result);
        } catch (error) {
            res.status(500).send({
                error: error.message,
            });
        }
    }

    async listTrackById(req, res) {

        // ************** recupere une track par id
        const {
            id
        } = req.params;
        try {
            const result = await trackModels.getTracksById(id);
            res.status(201).send(result);
        } catch (error) {
            res.status(500).send({
                error: error.message,
            });
        }
    }

    async createTrack(req, res) {
        const {
            title,
            youtube_url,
            album,
        } = req.body;

        // ********************************** Ajoute un track
        try {
            await trackModels.createTrack(title, youtube_url, album);
            res.status(201).send('track successfully created');
        } catch (error) {
            res.status(500).send({
                error: error.message,
            });
        }
    }

    // ********************************** met a jour un track
    async updateTrack(req, res) {
        try {
            const {
                id,
                title,
                youtube_url,
                album,
                } = req.body;
            await trackModels.updateTrack(id, title, youtube_url, album);
            res.status(200).send('track successfully updated');
        } catch (error) {
            res.status(500).send({
                error: error.message
            });
        }
    }
    // ********************************** efface un track
    async deleteTrack(req, res) {
        try {
            const {
                id
            } = req.body;
            await trackModels.deleteTrack(id);
            res.status(200).send('track successfully deleted');
        } catch (error) {
            res.status(500).send({
                error: error.message,
            });
        }
    }


}
module.exports = new TrackControler();