
(function(){
  var tabs =document.getElementById('tabs');
  var nav = tabs.getElementsByTagName('input');

  /*
  * Hide all tabs
  */
  function hideTabs(){
    var tab = tabs.getElementsByTagName('div');
    for(var i=0;i<=nav.length;i++){
      if(tab[i].className == 'tab'){
        tab[i].className = tab[i].className + ' hide';
      }
    }
  }

  /*
  * Show the clicked tab
  */
  function showTab(tab){
    document.getElementById(tab).className = 'tab'
  }

  hideTabs(); /* hide tabs on load */

  /*
  * Add click events
  */
  for(var i=0;i<nav.length;i++){
    nav[i].onclick = function(){
      hideTabs();
      showTab(this.className);
    }
  }
})();