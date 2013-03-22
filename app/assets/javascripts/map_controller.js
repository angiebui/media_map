var MapController = {
  selectableRegions: ["US", "IN", "AR", "AU", "BE",
                      "BR", "CA", "CL", "CO", "CZ",
                      "EG", "FR", "DE", "GB", "HK",
                      "HU", "IE", "IL", "IT", "JP",
                      "JO", "MY", "MX", "MA", "NL",
                      "NZ", "PE", "PH", "PL", "RU",
                      "SA", "SG", "ZA", "KR", "ES",
                      "SE", "TW", "AE"],

  createValuesMap: function(specialRegions){
    var values = {};
      for(var i = 0, length = specialRegions.length; i < length; i++) {
        values[specialRegions[i]] = '#ffffff';
      }
      return values;
  },

  init: function(){
    $('#world-map').vectorMap({
      onRegionClick: function(event, code){
        VideoController.retrieveVideos(code);
      },
      regionStyle: {
        initial: {
          fill: "#b0b0b0"
        }
      },
      series: {
        regions: [{
          values: this.createValuesMap(this.selectableRegions)
        }]
      }
    });
  }
};
