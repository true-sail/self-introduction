$(() => {

    $('#page-top').on('click', () => {
        $('body, html').animate({ scrollTop: 0 }, 1000);
    });

})
