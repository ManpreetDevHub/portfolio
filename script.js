
document.querySelectorAll('.circle').forEach(circle => {
    let percent = +circle.dataset.percentage;
    let current = 0;

    const animate = () => {
      if (current <= percent) {
        circle.style.background = `conic-gradient(#22d3ee 0% ${current}%, #334155 ${current}% 100%)`;
        current++;
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  });