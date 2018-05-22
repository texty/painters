(function() {
    $(document).ready(function(){
        $(".small-pics img.slide-img").on("click", function() {
            var carousel_selector = $(this).parent().attr("data-carousel");
            $(carousel_selector).carousel($(this).index());
        });    
    });
})();