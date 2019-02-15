(function() {
    var tabs = document.getElementById('tabs');
    var nav = tabs.getElementsByTagName('input');

    /*
     * Hide all tabs
     */
    function hideTabs() {
        var tab = tabs.getElementsByTagName('div');
        for (var i = 0; i <= nav.length; i++) {
            if (tab[i].className == 'tab') {
                tab[i].className = tab[i].className + ' hide';
            }
        }
    }

    /*
     * Show the clicked tab
     */
    function showTab(tab) {
        document.getElementById(tab).className = 'tab'
    }

    /*
     * Add click events
     */
    for (var i = 0; i < nav.length; i++) {
        nav[i].onclick = function() {
            hideTabs();
            showTab(this.className);
        }
    }

    hideTabs(); /* hide tabs on load */
    showTab("div1");

    document.querySelectorAll(".tab").forEach(function(t) {
        t.addEventListener("click", function() {
            document.querySelectorAll(".tab").forEach(function(div) {
                if (div.className.includes("hide") === false) {
                    window.nextInput = parseInt(div.id.split("")[3], 10) + 1
                    if (window.nextInput === 4) {
                        window.nextInput = 1
                    };
                };
            });
            hideTabs();
            let newDiv = "div" + window.nextInput
            document.getElementsByClassName(newDiv)[0].checked = true;
            showTab(newDiv);
        });
    })

})();