// Global variables
var preHeader = $("#pre-header")[0];
var preHeaderTop = preHeader.offsetTop;
var elementsWaitScrollPosition = $(".waitScrollPosition");
var sections = $('section');
var sectionLinks = $('#pre-header').children();
var formRecentlySubmited = false;
var currentPagePosition;

// List of functions which will starts when window load and scroll position change
function functionsForStartsOnScrollOrLoadPage() {
    fixingTheHeader();
    changeClassOnScrollPosition();
    changeActiveSection();
};

// Connect functions for events
window.onscroll = functionsForStartsOnScrollOrLoadPage;
window.onload = functionsForStartsOnScrollOrLoadPage();

// Fixed pre-header
function fixingTheHeader() {
    if (window.pageYOffset > preHeaderTop + 3) {
        preHeader.classList.add("fixed"); // Fix
    } else {
        preHeader.classList.remove("fixed"); // Unfix
        AOS.refresh(); // Refresh AOS
    }
}

// Change class for element if scroll to it
function changeClassOnScrollPosition() {
    for (let element of elementsWaitScrollPosition) {
        let pos = window.pageYOffset + (window.innerHeight / 100 * 80);
        let elemPos = element.getBoundingClientRect().top + pageYOffset;
        if (pos >= elemPos && !element.classList.contains('hidden')) {
            element.classList.remove('waitScrollPosition');
            element.classList.add('active');
        }
    }
}

// Scroll to position
function scrollToPos(pos=0) {
    window.scrollTo({'top': pos, 'behavior': 'smooth'});
}

// Scroll to element
function scrollToElem(elem) {
    let posToScroll;
    if (elem.offsetTop <= preHeaderTop) {
        posToScroll = elem.offsetTop + 1;
    }
    else if (elem.offsetTop > preHeaderTop + 42){
        posToScroll = elem.offsetTop - 42;
    }
    else if ((elem.offsetTop > preHeaderTop) && (elem.offsetTop < preHeaderTop + 42)){
        posToScroll = preHeaderTop;
    }
    window.scrollTo({'top': posToScroll, 'left': 0, 'behavior': 'smooth'});
}

// Change active section to show on pre-header
function changeActiveSection() {
    for (let section of sections) {
        let sectionPos = section.offsetTop;
        let sectionBottom = sectionPos + section.offsetHeight;
        let windowPos = window.pageYOffset;
        if (preHeader.classList.contains('fixed')) {windowPos += 42};
        if (sectionPos <= windowPos && windowPos < sectionBottom && !sectionLinks[sections.index(section)].classList.contains('active')) {
            replaceClass(sectionLinks, 'active', 'inactive', true);
            replaceClass(sectionLinks[sections.index(section)], 'inactive', 'active');
        }
    }
}

// Function for fast replace class of the element
function replaceClass(object, classBefore, classAfter, list=false, forceAdd=false) {
    if (object != undefined) {
        if (!list && object.classList.contains(classBefore)) {
            object.classList.remove(classBefore);
            object.classList.add(classAfter);
        }
        else if (!list && !object.classList.contains(classBefore) && forceAdd == true) {
            object.classList.add(classAfter);
        }
        else if (list) {
            for (let elem of object) {
                if (elem.classList.contains(classBefore)) {
                    elem.classList.remove(classBefore);
                    elem.classList.add(classAfter);
                }
                else if (!elem.classList.contains(classBefore) && forceAdd == true) {
                    object.classList.add(classAfter);
                }
            }
        }
    }
}

// Change active tab
function changeTab(index, identifyingClass) {
    // Change active chart
    let activeTab = $(`.${identifyingClass}--tab.active.${identifyingClass}`)[0];
    let targetTab = $(`.${identifyingClass}--tab.${identifyingClass}`)[index];
    if (activeTab != targetTab) {
        replaceClass(activeTab, 'active', 'hidden');
        replaceClass(targetTab, 'hidden', 'active');
    }
    // Change active "choose-tab"
    let activeChooseTab = $(`div.choose.active.${identifyingClass}`)[0];
    let targetChooseTab = $(`div.choose.${identifyingClass}`)[index];
    replaceClass(activeChooseTab, 'active', 'inactive');
    replaceClass(targetChooseTab, 'inactive', 'active');

    let worksOnTargetTab = $('div.works--tab.works.active > div.work');

    for (let work of worksOnTargetTab) {
        work.classList.remove('aos-animate');
    }

    // Refresh AOS
    AOS.refresh();
}

// Redirect to another page
function redirect(url) {
    window.location.href = url;
}

// Show contact form
function showForm() {
    let formContainer = $('div.form-container')[0];
    formContainer.classList.add('active');
    currentPagePosition = window.pageYOffset;
    $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('noscroll');
}

// Hide contact form
function closeForm() {
    let formContainer = $('div.form-container')[0];
    setTimeout(() => {
        formContainer.classList.remove('active');
        $('body').css('top', -(document.documentElement.scrollTop) + 'px').removeClass('noscroll');
        $('html, body').scrollTop(currentPagePosition);
    }, 500);
    formContainer.animate({
        opacity: 0
    }, 500);
}

// Animate close button of contact form
function closeButtonAnimation() {
    let buttons = $('div.close');
    for (const button of buttons) {
        button.animate({
            opacity: 1,
            transform: 'scale(2)',
            '-webkit-transform': 'scale(2)',
            '-moz-transform': 'scale(2)',
            '-ms-transform': 'scale(2)',
            '-o-transform': 'scale(2)'
        }, 100);
        button.animate({
            transform: 'scale(1)',
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)',
            '-ms-transform': 'scale(1)',
            '-o-transform': 'scale(1)'
        }, 100);
    }
}

// Submit form without redirect
function submitForm() {
    let name = $('input.name')[0].value;
    let email = $('input.replyto')[0].value;
    let message = $('textarea.message')[0].value;
    if (email == "" || message == "") return true;
    let formData = new FormData();
    formData.append('name', name);
    formData.append('_replyto', email);
    formData.append('message', message);
    $.ajax({
        type: 'POST',
        url: 'https://formspree.io/f/mayayezv',
        data: formData,
        processData: false,
        contentType: false
    });
    closeForm();
    showSuccesMessage();
    return false;
}

// Show message if form was submit
function showSuccesMessage() {
    alert('Thank you for message! I will gladly answer you shortly.');
    let name = $('input.name')[0];
    let email = $('input.replyto')[0];
    let message = $('textarea.message')[0];
    name.value = '';
    email.value = '';
    message.value = '';
}

// Show 3D model preview
function show3DModelPreview(src) {
    // Disable page scroll
    currentPagePosition = window.pageYOffset;
    $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('noscroll');

    // Create new element
    const model = $(`<model-viewer src="${src}" alt="A 3D model of an astronaut" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer>`);
    model.css('opacity', '0')
    const closeButton = $('<div class="close" onclick="close3DModelPreview(); closeButtonAnimation();"></div>');
    model.append(closeButton);
    $("body").append(model);

    // Animation
    model.animate({
        opacity: 1
    }, 500)
}

// Close 3D model preview
function close3DModelPreview() {
    const model = $('model-viewer');
    model.animate({
        opacity: 0
    }, {
        duration: 500,
        complete: () => {
            model.remove();
            $('body').css('top', -(document.documentElement.scrollTop) + 'px').removeClass('noscroll');
            $('html, body').scrollTop(currentPagePosition);
        }
    })
}

// Remove parent onclick from child
$('.noParentClick').click(function(event){
    event.stopPropagation();
})

const showPopup = (text, duration=3000) => {
    const popup = $(`<div class="popup">${text}</div>`) // Create a new element
    $(document.body).append(popup) // Add it to the HTML
    const animationDuration = Math.min(duration / 3, 1000);
    const shownDuration = duration - animationDuration * 2;
    popup.animate({opacity: 1}, animationDuration) // Shown animation
    setTimeout(() => { // After 3 sec
        popup.animate({opacity: 0}, { // Hiding animation
            duration: animationDuration,
            complete: () => { // On animation complete
                popup.remove() // Remove the element from HTML
            }
        })
    }, shownDuration);
}

function detectGlobalDarkMode() {
    const chartsLinesColor = getComputedStyle($('.line')[0]).background.split(')')[0] + ')'; // Get the color of chart background lines
    const isEdgeChromium = navigator.userAgent.includes('Edg');
    const notified = localStorage.getItem('notifiedAboutDarkMode'); // Check if a popup was shown

    if (!notified && ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !isEdgeChromium) || chartsLinesColor != 'rgba(238, 238, 238, 0.6)')) { // Check if dark mode enabled
        showPopup('Please turn off forced dark mode for better experience.', 8000); // Show poppup
        localStorage.setItem('notifiedAboutDarkMode', 'true'); // Make an entry
    }
}

setTimeout(detectGlobalDarkMode, 1000);


// Initialize AOS
AOS.init();