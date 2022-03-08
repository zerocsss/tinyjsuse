//全屏
function fullScreen(id: string) {
  var element: any = document.getElementById(id);
  if (element.requestFullscreen) {
      element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
  }
}

//退出全屏 
function exitFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  }
  // } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  // } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  // } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  // }
}

//监听window是否全屏，并进行相应的操作,支持esc键退出
window.onresize = function() {
  var isFull=!!(document.fullscreenElement);//!document.webkitIsFullScreen都为true。因此用!!
  if (isFull==false) {
  }else{
  }
}


export default fullScreen;