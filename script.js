document.getElementById('codeType').addEventListener('change', function() {
  const htmlSection = document.getElementById('htmlSection');
  const cssSection = document.getElementById('cssSection');
  const jsSection = document.getElementById('jsSection');

  htmlSection.style.display = 'none';
  cssSection.style.display = 'none';
  jsSection.style.display = 'none';

  if (this.value === 'html') {
      htmlSection.style.display = 'block';
  } else if (this.value === 'css') {
      cssSection.style.display = 'block';
  } else if (this.value === 'javascript') {
      jsSection.style.display = 'block';
  }
});
