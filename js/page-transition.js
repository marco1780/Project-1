const leavePage = href => {
    $('body').animate({ opacity: 0 }, 1000, () => {
        window.location = href
    })
}

$(document).ready(() => {
    $('body').animate({ opacity: 1 }, 2000)
    
    $('.page-transition').on('click', e => {
        const href = $(e.target).attr('href')
        leavePage(href)
    })
})