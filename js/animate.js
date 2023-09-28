export default function Animate() {
    //sideBar
    $('#btnSlider').click(function () {
        let widthSlider = $('#sliderNav').outerWidth() //200
        let offsetIconNav = $('#iconNav').offset().left

        if ($('#sliderNav').css('left') === '-200px') {
            $('#sliderNav').animate({ left: `${0}` }, 500)
            $('#iconNav').animate({ left: `${0}` }, 500)
            $('#btnSlider').removeClass('fa-solid fa-align-justify')
            $('#btnSlider').addClass('fa-solid fa-xmark')
            animateLinkesOpen()
        }
        else {
            $('#btnSlider').removeClass('fa-solid fa-xmark')
            $('#btnSlider').addClass('fa-solid fa-align-justify')
            $('#sliderNav').animate({ left: `-${widthSlider}` }, 500)
            $('#iconNav').animate({ left: `-${offsetIconNav}` }, 500)
            animateLinkesOut()
        }
    })
    // animate when open sidebar
    function animateLinkesOpen() {
        $('#linkOne').animate({ opacity: '1', paddingTop: '25px' }, 150, function () {
            $('#linkTwo').animate({ opacity: '1', paddingTop: '25px' }, 150, function () {
                $('#linkThree').animate({ opacity: '1', paddingTop: '25px' }, 150, function () {
                    $('#linkFour').animate({ opacity: '1', paddingTop: '25px' }, 150, function () {
                        $('#linkFive').animate({ opacity: '1', paddingTop: '25px' }, 150)
                    })
                })
            })
        })
    }
    //animate when out sidebar
    function animateLinkesOut() {
        $('#linkOne').animate({ opacity: '1', paddingTop: '400px' }, 100, function () {
            $('#linkTwo').animate({ opacity: '1', paddingTop: '400px' }, 100, function () {
                $('#linkThree').animate({ opacity: '1', paddingTop: '400px' }, 100, function () {
                    $('#linkFour').animate({ opacity: '1', paddingTop: '400px' }, 100, function () {
                        $('#linkFive').animate({ opacity: '1', paddingTop: '400px' }, 100)
                    })
                })
            })
        })
    }


    //move tabs
    $('#linkOne').click(function () {
        $('#search').siblings('section').fadeOut(500).addClass('d-none')
        $('#search').fadeIn(500).removeClass('d-none')
    })
    $('#linkTwo').click(function () {
        $('#category').siblings('section').fadeOut(500).addClass('d-none')
        $('#category').fadeIn(500).removeClass('d-none')
    })
    $('#linkThree').click(function () {
        $('#area').siblings('section').fadeOut(500).addClass('d-none')
        $('#area').fadeIn(500).removeClass('d-none')
    })
    $('#linkFour').click(function () {
        $('#ingredients').siblings('section').fadeOut(500).addClass('d-none')
        $('#ingredients').fadeIn(500).removeClass('d-none')
    })
    $('#linkFive').click(function () {
        $('#contact').siblings('section').fadeOut(500).addClass('d-none')
        $('#contact').fadeIn(500).removeClass('d-none')
    })



    $(document).ready(function () {
        $('.fa-spinner').fadeOut(500, function () {
            $('#loading').fadeOut(500, function () {
                $('#loading').remove()
                $('body').css('overflow', 'auto')
            })
        })
    })


}