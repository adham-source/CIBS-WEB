// Navbar hide on scroll starts
let prevScrollPos = window.pageYOffset;
// console.log(prevScrollPos);
window.addEventListener('scroll', () =>  {
    let currentScrollPos = window.pageYOffset,
        myNavbar = document.querySelector('.navbar'),
        myButtonUp = document.querySelector('#page-up');
    if (prevScrollPos > currentScrollPos) {
        myNavbar.style.top = '0';
    } else {
        myNavbar.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
/*
    if (prevScrollPos >= 400) {
        myButtonUp.style.display = 'block';
        myButtonUp.onclick = function () {
            window.scrollTo(0, 0); // window.scrollTo(x, y);  
        }
    } else {
        myButtonUp.style.display = 'none';
    }*/
});

// camera plugin slider
jQuery('#camera_wrap').camera({

    // topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
    alignment: 'center', 
    
    // true, false
    autoAdvance: true, 
    
    // true, false. Auto-advancing for mobile devices
    mobileAutoAdvance: true, 
    
    // 'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
    barDirection: 'leftToRight',  
    
    // 'bottom', 'left', 'top', 'right'
    barPosition: 'top', 
    
    // the number of columns
    cols: 6,
    
    //for the complete list http://jqueryui.com/demos/effect/easing.html
    easing: 'easeInOutExpo',  
    
    //leave empty if you want to display the same easing on mobile devices and on desktop etc.
    mobileEasing: '', 
    
    // 'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
    //you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'
    fx: 'random', 
  
    // leave empty if you want to display the same effect on mobile devices and on desktop etc.
    mobileFx: '', 
  
    // to make the <a href="https://www.jqueryscript.net/tags.php?/grid/">grid</a> blocks slower than the slices, this value must be smaller than transPeriod
    gridDifference: 250,  
    
    // here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
    height: '50%',  
    
    // the path to the image folder (it serves for the blank.gif, when you want to display <a href="https://www.jqueryscript.net/tags.php?/video/">video</a>s)
    imagePath: 'images/',  
    
    // true, false. Puase on state hover. Not available for mobile devices
    hover: true, 
    
    // pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
    loader: 'bar',  
    loaderColor: '#0077b5', 
    loaderBgColor: '#222222', 
    loaderOpacity: 1, //0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
    loaderPadding: 2, 
    loaderStroke: 7, 
    pieDiameter: 38,
    piePosition: 'rightTop', //'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
    
    // you can also leave it blank
    minHeight: '200px',  
    
    // true or false, to display or not the navigation buttons
    navigation: true, 
    
    // if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
    navigationHover: true, 
    
    // same as above, but only for mobile devices
    mobileNavHover: true, 
    
    // true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
    opacityOnGrid: false,  
    
    // a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
    overlayer: true, 
    
    // enable pagination
    pagination: false,
    
    // true or false, to display or not the play/pause buttons
    playPause: true, 
    
    // true, false. It stops the slideshow when you click the sliders.
    pauseOnClick: true, 
    
    // true, false. Select true if you don't want that your images are cropped
    portrait: false, 
    
    // the number of rows
    rows: 4,
    
    // if 0 the same value of cols
    slicedCols: 12, 
    
    // if 0 the same value of rows
    slicedRows: 8,  
    
     // next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
    slideOn: 'random',
    
    // shows thumbnails
    thumbnails: false,
    
    // milliseconds between the end of the sliding effect and the start of the nex one
    time: 7000, 
    
    // lenght of the sliding effect in milliseconds
    transPeriod: 1500
    
});

// Start owel carousel
$(document).ready(function(){
    $(".our-programs .owl-carousel").owlCarousel({
            loop: true,
            margin: 20,
            // autoplay: true,
            rtl: true,
            responsiveClass: true,
            responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});

