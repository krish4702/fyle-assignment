$(document).ready(function(){
  $('.services-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

  // Handle hover content
  $('.slide').hover(
      function() {
          $(this).find('.hover-content').css('opacity', '1');
      },
      function() {
          $(this).find('.hover-content').css('opacity', '0');
      }
  );
});

  // Project Image Toggle
  const projectImage = document.getElementById('project-image');
  const contents = document.querySelectorAll('.content');

  contents.forEach((content, index) => {
      content.addEventListener('click', () => {
          contents.forEach(c => c.classList.remove('active'));
          content.classList.add('active');
          projectImage.src = `image${index + 1}.jpg`;
      });
  });

  // Growth Card Hover Effects
  const growthCards = document.querySelectorAll('.growth-card');

  growthCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
          card.style.transform = 'scale(1.05)';
      });

      card.addEventListener('mouseleave', () => {
          card.style.boxShadow = 'none';
          card.style.transform = 'scale(1)';
      });
  });

