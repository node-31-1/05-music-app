const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');
const Song = require('./Song');

Genre.belongsToMany(Artist, { through: 'GenresArtists' });
Artist.belongsToMany(Genre, { through: 'GenresArtists' });

Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);

Song.belongsToMany(Artist, { through: 'ArtistsSongs' });
Artist.belongsToMany(Song, { through: 'ArtistsSongs' });

Song.belongsToMany(Genre, { through: 'SongsGenres' });
Genre.belongsToMany(Song, { through: 'SongsGenres' });
