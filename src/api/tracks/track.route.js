const express = require('express');
const {listTracks, listTrackById, createTrack, updateTrack, deleteTrack} = require('./controlers/track.controlers');

const router = express.Router();

router.get('/',[listTracks]);
router.get('/:id',[listTrackById]);
router.post('/',[createTrack]);
router.put('/',[updateTrack]);
router.delete('/',[deleteTrack]);
module.exports = router;