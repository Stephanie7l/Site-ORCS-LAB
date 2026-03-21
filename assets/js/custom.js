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

    // Close navbar collapse on link click
    $('.navbar-nav .nav-link').on('click', function() {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar && navbar.classList.contains('show')) {
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) {
                toggler.click();
            }
        }
    });

    // Ensure navbar-collapse is properly initialized
    const navElement = document.getElementById('navbarOrcs');
    if (navElement) {
        navElement.addEventListener('show.bs.collapse', function() {
            $('body').addClass('menu-open');
        });
        navElement.addEventListener('hide.bs.collapse', function() {
            $('body').removeClass('menu-open');
        });
    }

    $(window).on('resize', function() {
        if ($(window).width() > 991) {
            $('body').removeClass('menu-open');
        }
    });

    $('.home-copy-btn').on('click', function () {
        const value = '(31) 3409-XXXX';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value);
        }
        $(this).text('Copiado');
        setTimeout(() => $(this).text('Copiar'), 1200);
    });

});
