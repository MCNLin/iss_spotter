const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request(`https://api.ipify.org/?format=json`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    //if we get here, all's well and we got the data
    // use request to fetch IP address from JSON API
    const ip = JSON.parse(body).ip;
    callback(null,ip);
  });
};
 
const fetchCoordsByIP = function(ip,callback) {
  request ,('https://api.freegeoip.app/json/?apikey=174.119.235.188'), function(error, response, body){
    if (error) {
      callback(error, null);
      return;
  }
}
};
module.exports = { fetchMyIP, fetchCoordsByIP };