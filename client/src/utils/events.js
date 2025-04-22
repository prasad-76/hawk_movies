/**
 * Activate and Deactivate scroll lock on the body tag. 
 * @param {*} toggle 
 */
export function toggleBodyScroll(toggle) {
  document.body.style.overflow = toggle ? "hidden" : "auto";
}

/**
 * Scroll movies bar to go through different movie cards in that carousel.
 * @param {*} carouselId HTML id of the carousel that is being scrolled.
 * @param {*} left A default parameter with a Boolean value that decides if you want to scroll the carousel to right or left.
 */
export function scrollMoviesBar(carouselId, left = 1) {
  const carousel = document.getElementById(carouselId);
  const cardWidth = carousel.querySelector(".carousel-card").getBoundingClientRect().width;

  carousel.scrollLeft += (cardWidth * left);
}

/**
 * Play pause the video (i.e. iframe)
 * @param {*} vidFunc pass what functionality to be performed.
 */
export function controlIframeVideo(vidFunc) {
  var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"' + vidFunc + '","args":""}',
    "*"
  );
}