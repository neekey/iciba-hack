javascript:!(function(){
    var host = location.host;
    var search = location.search;
    var type = null;

    if( host == 'word.iciba.com' ){

        type = /action\=(\w+)&?/g.exec( search );
        if( !type ){
            return;
        }

        type = type[1];

        loadStyle( 'http://neekey.github.com/iciba-hack/' + type +'.css?t=' + Date.now()  );
        loadScript( 'http://neekey.github.com/iciba-hack/' + type +'.js?t=' + Date.now() );
    }

    function loadStyle( url ){
        var link = document.createElement( 'link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        document.head.appendChild( link );
    }

    function loadScript( url ){
        var script = document.createElement( 'script');
        script.src = url;
        document.head.appendChild( script );
    }
})();