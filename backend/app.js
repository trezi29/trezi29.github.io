var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  accessToken : 'BQAwFvm3ZflV2I2IEL6DWaT_VzAFUjpcQmmBecX-JMG07xhwwe-YGkrTifNobAM8A9AXlMd_35FOyy0orkA12PiDB_a2MJ_EGRHr1R36sn3E5A9RD3QiyhRm-KOA265dW1fLjjkjTTEB'
});

spotifyApi.getAvailableGenreSeeds()
.then(function(data) {
  console.log(data.body);
}, function(err) {
  console.log("Something went wrong!", err);
});
