$(document).ready(function(){
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            if(el.webkitRequestFullScreen) {
               el.webkitRequestFullScreen();
           }
          else {
             el.mozRequestFullScreen();
          }    
          window.setTimeout(callback, 1000 / 60);
        };
      })();

      function createAlpha(char, x, y, color) {
          trolls = [];
          switch(char)
          {
            case 'A':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              break;
            case 'B':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'C':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'D':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'E':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'F':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              break;
            case 'G':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'H':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              break;
            case 'I':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              trolls.push(new Ball(x+30, y+20, 0, 0, color));
              trolls.push(new Ball(x+30, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+30, y+80, 0, 0, color));
              trolls.push(new Ball(x+30, y+100, 0, 0, color));
              break;
            case 'J':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+30, y+20, 0, 0, color));
              trolls.push(new Ball(x+30, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+30, y+80, 0, 0, color));
              trolls.push(new Ball(x+30, y+100, 0, 0, color));
              break;
            case 'K':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y+50, 0, 0, color));
              trolls.push(new Ball(x+31, y+30, 0, 0, color));
              trolls.push(new Ball(x+45, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+70, 0, 0, color));
              trolls.push(new Ball(x+31, y+90, 0, 0, color));
              trolls.push(new Ball(x+45, y+110, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              break;
            case 'L':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'M':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+15, y+7, 0, 0, color));
              trolls.push(new Ball(x+24, y+21, 0, 0, color));
              trolls.push(new Ball(x+30, y+40, 0, 0, color));
              trolls.push(new Ball(x+34, y+21, 0, 0, color));
              trolls.push(new Ball(x+44, y+7, 0, 0, color));
              break;
            case 'N':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+15, y+10, 0, 0, color));
              trolls.push(new Ball(x+22, y+30, 0, 0, color));
              trolls.push(new Ball(x+30, y+50, 0, 0, color));
              trolls.push(new Ball(x+38, y+70, 0, 0, color));
              trolls.push(new Ball(x+44, y+90, 0, 0, color));
              break;
            case 'O':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'P':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              break;
            case 'Q':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+100, 0, 0, color));
              trolls.push(new Ball(x+70, y+130, 0, 0, color));
              trolls.push(new Ball(x+80, y+140, 0, 0, color));
              break;
            case 'R':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+70, 0, 0, color));
              trolls.push(new Ball(x+31, y+90, 0, 0, color));
              trolls.push(new Ball(x+45, y+110, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              break;
            case 'S':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'T':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+30, y+20, 0, 0, color));
              trolls.push(new Ball(x+30, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+30, y+80, 0, 0, color));
              trolls.push(new Ball(x+30, y+100, 0, 0, color));
              trolls.push(new Ball(x+30, y+120, 0, 0, color));
              break;
            case 'U':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              break;
            case 'V':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x+5, y+20, 0, 0, color));
              trolls.push(new Ball(x+10, y+40, 0, 0, color));
              trolls.push(new Ball(x+15, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+80, 0, 0, color));
              trolls.push(new Ball(x+25, y+100, 0, 0, color));
              trolls.push(new Ball(x+30, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+55, y+20, 0, 0, color));
              trolls.push(new Ball(x+50, y+40, 0, 0, color));
              trolls.push(new Ball(x+45, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+80, 0, 0, color));
              trolls.push(new Ball(x+35, y+100, 0, 0, color));
              break;
            case 'W':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+20, 0, 0, color));
              trolls.push(new Ball(x, y+40, 0, 0, color));
              trolls.push(new Ball(x, y+60, 0, 0, color));
              trolls.push(new Ball(x, y+80, 0, 0, color));
              trolls.push(new Ball(x, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+60, y+20, 0, 0, color));
              trolls.push(new Ball(x+60, y+40, 0, 0, color));
              trolls.push(new Ball(x+60, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y+80, 0, 0, color));
              trolls.push(new Ball(x+60, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+10, y+110, 0, 0, color));
              trolls.push(new Ball(x+20, y+100, 0, 0, color));
              trolls.push(new Ball(x+30, y+90, 0, 0, color));
              trolls.push(new Ball(x+40, y+100, 0, 0, color));
              trolls.push(new Ball(x+50, y+110, 0, 0, color));
              break;
            case 'X':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x+10, y+20, 0, 0, color));
              trolls.push(new Ball(x+20, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+40, y+80, 0, 0, color));
              trolls.push(new Ball(x+50, y+100, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+50, y+20, 0, 0, color));
              trolls.push(new Ball(x+40, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+80, 0, 0, color));
              trolls.push(new Ball(x+10, y+100, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              break;
            case 'Y':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x+10, y+20, 0, 0, color));
              trolls.push(new Ball(x+20, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+50, y+20, 0, 0, color));
              trolls.push(new Ball(x+40, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+80, 0, 0, color));
              trolls.push(new Ball(x+30, y+100, 0, 0, color));
              trolls.push(new Ball(x+30, y+120, 0, 0, color));
              break;
            case 'Z':
              trolls.push(new Ball(x, y, 0, 0, color));
              trolls.push(new Ball(x, y+120, 0, 0, color));
              trolls.push(new Ball(x+20, y, 0, 0, color));
              trolls.push(new Ball(x+40, y, 0, 0, color));
              trolls.push(new Ball(x+20, y+120, 0, 0, color));
              trolls.push(new Ball(x+40, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y+120, 0, 0, color));
              trolls.push(new Ball(x+60, y, 0, 0, color));
              trolls.push(new Ball(x+50, y+20, 0, 0, color));
              trolls.push(new Ball(x+40, y+40, 0, 0, color));
              trolls.push(new Ball(x+30, y+60, 0, 0, color));
              trolls.push(new Ball(x+20, y+80, 0, 0, color));
              trolls.push(new Ball(x+10, y+100, 0, 0, color));
              break;              
          }
          return trolls;
      }
    
      function getMousePos(canvas, evt) {
        // get canvas position
        var obj = canvas;
        var top = 0;
        var left = 0;
        while(obj.tagName != 'BODY') {
          top += obj.offsetTop;
          left += obj.offsetLeft;
          obj = obj.offsetParent;
        }

        // return relative mouse position
        var mouseX = evt.clientX - left + window.pageXOffset;
        var mouseY = evt.clientY - top + window.pageYOffset;
        return {
          x: mouseX,
          y: mouseY
        };
      }
    
      function updateTrolls(canvas, balls, timeDiff, mousePos) {
        if(timeDiff > 10000)
            timeDiff = 10000;
        var context = canvas.getContext('2d');
        var collisionDamper = document.getElementById("damp").value;
        var floorFriction = document.getElementById("fr").value * timeDiff;
        var mouseForceMultiplier = 1 * timeDiff;
        var restoreForce = document.getElementById("rs").value * timeDiff;

        for(var n = 0; n < balls.length; n++) {
          var ball = balls[n];
          // set ball position based on velocity
          ball.y += ball.vy;
          ball.x += ball.vx;

          // restore forces
          if(ball.x > ball.origX) {
            ball.vx -= restoreForce;
          }
          else {
            ball.vx += restoreForce;
          }
          if(ball.y > ball.origY) {
            ball.vy -= restoreForce;
          }
          else {
            ball.vy += restoreForce;
          }

          // mouse forces
          var mouseX = mousePos.x;
          var mouseY = mousePos.y;

          var distX = ball.x - mouseX;
          var distY = ball.y - mouseY;

          var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

          var totalDist = Math.abs(distX) + Math.abs(distY);

          var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
          var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

          if(distX > 0) {// mouse is left of ball
            ball.vx += forceX;
          }
          else {
            ball.vx -= forceX;
          }
          if(distY > 0) {// mouse is on top of ball
            ball.vy += forceY;
          }
          else {
            ball.vy -= forceY;
          }

          // floor friction
          if(ball.vx > 0) {
            ball.vx -= floorFriction;
          }
          else if(ball.vx < 0) {
            ball.vx += floorFriction;
          }
          if(ball.vy > 0) {
            ball.vy -= floorFriction;
          }
          else if(ball.vy < 0) {
            ball.vy += floorFriction;
          }

          // floor condition
          if(ball.y > (canvas.height - ball.radius)) {
            ball.y = canvas.height - ball.radius - 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
          }

          // ceiling condition
          if(ball.y < (ball.radius)) {
            ball.y = ball.radius + 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
          }

          // right wall condition
          if(ball.x > (canvas.width - ball.radius)) {
            ball.x = canvas.width - ball.radius - 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
          }

          // left wall condition
          if(ball.x < (ball.radius)) {
            ball.x = ball.radius + 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
          }
        }
      }
    
      function Ball(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.origX = x;
        this.origY = y;
        this.radius = 10;
      }
      
      function animate(canvas, lastTime, mousePos, trolls) {
        var context = canvas.getContext('2d');
        // update
        var date = new Date();
        var time = date.getTime();
        var timeDiff = time - lastTime;
        var size = document.getElementById("sz").value;
        updateTrolls(canvas, trolls, timeDiff, mousePos);
        lastTime = time;

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        // render
        for(var n = 0; n < trolls.length; n++) {
          //var ball = balls[n];
          var ball = trolls[n];
          context.beginPath();
          context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI*size, false);
          context.fillStyle = ball.color;
          context.fill();
        }

        // request new frame
        requestAnimFrame(function() {
          animate(canvas, lastTime, mousePos, trolls);
        });
      }
      function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
          var color1 = '#';
        for (var i = 0; i < 6; i++ ) {
            color1 += letters[Math.floor(Math.random() * 16)];
        }
        switch(Math.floor(Math.random()*4)) {
            case 0:
                color += "3A5BCD";
                break;
            case 1:
                color += "EF2B36";
                break;
            case 2:
                color += "FFC636";
                break;
            case 3:
                color += "02A817";
                break;
        }
        if(Math.random() > 0.3)
            return color;
        else
            return color1;
      }
      
      var canvas = document.getElementById('myCanvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      //canvas.width = 500;
      //canvas.height = 400;
      var date = new Date();
      var time = date.getTime();
      var trolls = [];
      var tx = document.getElementById("txt");
      var blue = '#3A5BCD';
      var red = '#EF2B36';
      var yellow = '#FFC636';
      var green = '#02A817';
      tx.defaultValue = "Google";      /*
       * set mouse position really far away
       * so the mouse forces are nearly obsolete
       */
      var mousePos = {
        x: 9999,
        y: 9999
      };
      var s = tx.value;
      s = s.toUpperCase();
      var x = 100, y = 50;
      for(var i=0;i<s.length;++i)
      {
        trolls=trolls.concat(createAlpha(s.charAt(i), x+i*90,y, getRandomColor()));
      }
      animate(canvas, time, mousePos, trolls);
      
      tx.addEventListener('change', function() {
          var s = tx.value;
          s = s.toUpperCase();
          console.log(s);
          var x = 100, y = 50;
          trolls = [];
          for(var i=0;i<s.length;++i)
          {
              console.log(getRandomColor());
              trolls=trolls.concat(createAlpha(s.charAt(i), x+i*90,y, getRandomColor()));
          }
          console.log(trolls.length);
          mousePos.x = mousePos.y = 9999;
          animate(canvas, time, mousePos, trolls);
      });
      


      canvas.addEventListener('mousemove', function(evt) {
        var pos = getMousePos(canvas, evt);
        mousePos.x = pos.x;
        mousePos.y = pos.y;
      });

      canvas.addEventListener('touchStart', function(evt) {
        var pos = getMousePos(canvas, evt);
          mousePos.x = pos.x;
          mousePos.y = pos.y;
      });
    
      canvas.addEventListener('touchLeave', function(evt) {
          mousePos.x = mousePos.y = 9999;
      });
    
      canvas.addEventListener('mouseout', function(evt) {
        mousePos.x = 9999;
        mousePos.y = 9999;
      });
      
});