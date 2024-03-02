const portalItems = document.querySelectorAll('.portal-item');

for (let i = 0; i < portalItems.length; i++) {
  portalItems[i].addEventListener('mouseover', function (e) {
    const clasess = Array.from(e.currentTarget.classList);

    if (clasess.includes('sd')) {
      document.body.style.backgroundColor = '#ffb2b8';
    }

    if (clasess.includes('smp')) {
      document.body.style.backgroundColor = '#e8ebff';
    }
  });

  portalItems[i].addEventListener('mouseout', function (e) {
    document.body.style.backgroundColor = '#fff';
  });
}
