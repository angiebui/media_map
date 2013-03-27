var ViewController = {

  init: function(){
    $('.top-items').on('click', 'a', function(e){
      e.preventDefault();
      ViewController.updateVideo(this);
    });
  },

  updateVideo: function(link){
    var id = $(link).parent().attr('data-id');
    $('#ytplayer').attr("src", this.createSrc(id, "1"));
  },

  clearMedia: function(){
    $('.top-items ul li.tile').remove();
  },

  createSrc: function(id, playSetting){
    return "http://www.youtube.com/embed/" +id+ "?autoplay=" +playSetting+ "&enablejsapi=1";
  },

  createThumbnailList: function(video){
    return ["<li class='tile' data-id='"+video.id+"'><a href='#' class='tile-link'>",
            "<img src='"+video.thumbnail.sqDefault+"' height='80' width='107'>",
            "<span class='thumbnail-title'>",
            video.title,
            "</span><span class='view-count'>",
            ViewController.addCommas(video.viewCount),
            " views</span></a></li>"].join('');
  },

  setWindowHash: function(){
    var code = MapController.selectedCountry;
    var sortBy = FormController.sortBy();
    var category = FormController.category();
    var timeFrame = FormController.timeFrame();

    var hash = "maps/" + code+ "/" +sortBy+ "/" +category+ "/" +timeFrame;
    location.hash = hash;
  },

  render: function(videos){
    this.clearMedia();
    this.populateThumbnails(videos);
    var src = this.createSrc(videos[0].id, "0");
    $('#ytplayer').attr("src", src).show();
  },

  populateThumbnails: function(videos){
    for(var i = 0; i < videos.length; i++){
      var thumbnail = videos[i].thumbnail.sqDefault;
      var id = videos[i].id;
      $('.video-thumbnails').append(ViewController.createThumbnailList(videos[i]));
    }
  },

  addCommas: function(views){
    while (/(\d+)(\d{3})/.test(views.toString())){
      views = views.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return views;
  }
};
