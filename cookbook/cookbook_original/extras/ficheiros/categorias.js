    $("h1").click(function() {
      var target = $(this).data("target");
      $(target).slideToggle("fast");
  
      var $this = $(this);
      $this.toggleClass("open");
    });

    $("h2").click(function() {
      var target = $(this).data("target");
      $(target).slideToggle("fast");
  
      var $this = $(this);
      $this.toggleClass("open");
    });

    $("h3").click(function() {
      var target = $(this).data("target");
      $(target).slideToggle("fast");
  
      var $this = $(this);
      $this.toggleClass("open");
    });
