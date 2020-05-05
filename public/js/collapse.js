$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function () {
            $(this).siblings().find(".bi-plus").css('display', 'none');
            $(this).siblings().find(".bi-x").css('display', 'block')
        })
        .on('hidden.bs.collapse', function () {
            $(this).siblings().find(".bi-plus").css('display', 'block');
            $(this).siblings().find(".bi-x").css('display', 'none')
        });
});
