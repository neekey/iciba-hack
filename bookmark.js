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

        loadStyle( 'http://192.168.1.112:8080/' + type +'.css?t=' + Date.now()  );
        loadScript( 'http://192.168.1.112:8080/' + type +'.js?t=' + Date.now() );
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