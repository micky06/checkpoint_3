const express = require('express');
const {listAlbums, listAlbumById, listTrackByAlbumId, createAlbum, updateAlbum, deleteAlbum} = require('./controlers/album.controlers');

const router = express.Router();

router.get('/',[listAlbums]);
router.get('/:id',[listAlbumById]);
router.get('/:id/tracks',[listTrackByAlbumId]);
router.post('/',[createAlbum]);
router.put('/',[updateAlbum]);
router.delete('/',[deleteAlbum]);

module.exports = router;