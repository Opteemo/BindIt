// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    var mx, my, update_position;

    mx = null;
    my = null;
    $('#bindtempo').mousemove(function(e) {
      mx = e.pageX - this.offsetLeft;
      my = e.pageY - this.offsetTop;
    });
    update_position = function(x, y, animate) {
      var css;

      if (animate == null) {
        animate = false;
      }
      css = {
        left: x,
        top: y
      };
      if (animate) {
        $('#bindtempo .round').animate(css, 800);
      } else {
        css.left += 'px';
        css.top += 'px';
        $('#bindtempo .round').css(css);
      }
    };
    if (true) {
      $('#bindtempo').mousemove(function(e) {
        update_position(mx - 10, my - 10);
      });
    } else {
      $('#bindtempo').bindTempo('mousemove', 1000, function(e) {
        update_position(mx - 10, my - 10, true);
      });
    }
  });

  $(function() {
    var render;

    render = function(text) {
      var html;

      html = '';
      $.each(text, function(index, value) {
        var key;

        key = Math.floor((Math.random() * 10) + 1);
        html += '<span class="t' + key + '">' + value + '</span>';
      });
      $('#bindsolo .output').html(html);
    };
    if (true) {
      $('#bindsolo .input').bind('keyup', function(e) {
        render($(this).val());
      });
    } else {
      $('#bindsolo .input').bindSolo('keyup', 500, function(e) {
        render($(this).val());
      });
    }
  });

}).call(this);