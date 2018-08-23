const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(function(journey) {
    return journey.startLocation;
});
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(function(journey){
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const modes = this.journeys.map(function(journey) {
    return journey.transport;
  })
  return modes;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const modes = this.journeys.filter(function(journey){
    return journey.transport === transport;
  })
  return modes;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
