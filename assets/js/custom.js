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

    const whatsappForm = document.getElementById('whatsapp-contact-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!whatsappForm.checkValidity()) {
                whatsappForm.reportValidity();
                return;
            }

            const nome = document.getElementById('nome')?.value?.trim() || '';
            const organizacao = document.getElementById('organizacao')?.value?.trim() || '';
            const email = document.getElementById('email')?.value?.trim() || '';
            const telefone = document.getElementById('telefone')?.value?.trim() || '';
            const tipo = document.getElementById('tipo')?.value?.trim() || '';
            const prazo = document.getElementById('prazo')?.value?.trim() || '';
            const mensagem = document.getElementById('mensagem')?.value?.trim() || '';

            const texto = [
                'Ola, ORCS Lab. Gostaria de solicitar projeto/parceria.',
                '',
                `Nome: ${nome}`,
                `Empresa/Organizacao: ${organizacao}`,
                `E-mail: ${email}`,
                `Telefone: ${telefone || 'Nao informado'}`,
                `Tipo de demanda: ${tipo}`,
                `Prazo estimado: ${prazo || 'Nao informado'}`,
                `Desafio: ${mensagem}`
            ].join('\n');

            const whatsappNumber = '553134093550';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }

});
