$(window).on('load', () => {

    function onResize() {
        $('#main-content').height('auto');
        const navbarHeight = $('.navbar').outerHeight() || 0;
        const footerHeight = $('footer').outerHeight() || 0;
        let height = $(window).innerHeight() - navbarHeight - footerHeight;
        if ($('#main-content').height() < height) {
            $('#main-content').height(height);
        } else {
            $('#main-content').height('auto');
        }
    }

    $(window).resize(onResize.bind(this));
    onResize();

    $('.home-copy-btn').on('click', function () {
        const value = '(31) 3409-XXXX';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value);
        }
        $(this).text('Copiado');
        setTimeout(() => $(this).text('Copiar'), 1200);
    });

});
