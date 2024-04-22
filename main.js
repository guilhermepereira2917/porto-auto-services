function configureFadeInAnimation(element) {
  element.viewportChecker({
    classToAdd: 'fade-in',
    offset: 100,
    repeat: false,
  });
};

const sections = ['.introduction-section', '.about-section', '.services-section', '.contact-section'];

sections.forEach(section => {
  configureFadeInAnimation($(section).first());
});