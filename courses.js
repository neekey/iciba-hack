!(function(){

    var Win = $(window);
    var Doc = $(document);
    var Body = $(document.body);
    var WordBox = $( '.word_box' );

    function clearDOM(){
        Body.append(WordBox);
        Body.children().each(function( index, item ){
            if( item.className.indexOf( 'word_box' ) < 0 ){
                $( item ).remove();
            }
        });
    }

    /**
     * 添加移动端的mobile
     */
    function addMobileMeta(){
        $( document.head ).append( '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">' );
    }

    function resizeBody(){
        Body.css({
            width: Win.width() + 'px',
            height: Win.height() + 'px'
        });
    }

    function attachEvent(){
        Win.on( 'resize', resizeBody );
    }

    clearDOM();
    addMobileMeta();
    resizeBody();
    attachEvent();
})();