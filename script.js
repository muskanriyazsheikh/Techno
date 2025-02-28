document.getElementById('codeType').addEventListener('change', function() {
  const htmlSection = document.getElementById('htmlSection');
  const cssSection = document.getElementById('cssSection');
  const jsSection = document.getElementById('jsSection');
  const outputSection = document.getElementById('outputSection');
  const menu = document.getElementById('menu');

  htmlSection.style.display = 'none';
  cssSection.style.display = 'none';
  jsSection.style.display = 'none';
  outputSection.style.display = 'none';
  menu.style.display = 'none';

  if (this.value === 'html') {
      htmlSection.style.display = 'block';
      menu.style.display = 'block';
  } else if (this.value === 'css') {
      cssSection.style.display = 'block';
      menu.style.display = 'block';
  } else if (this.value === 'javascript') {
      jsSection.style.display = 'block';
      menu.style.display = 'block';
  }
});

document.getElementById('runButton').addEventListener('click', function() {
  const outputSection = document.getElementById('outputSection');
  outputSection.style.display = 'block';

  const htmlCode = document.getElementById('htmlCode').value;
  const cssCode = document.getElementById('cssCode').value;
  const jsCode = document.getElementById('jsCode').value;

  const output = document.getElementById('output');
  output.innerHTML = `
    <style>${cssCode}</style>
    ${htmlCode}
    <script>${jsCode}<\/script>
  `;
});

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('htmlCode').value = '';
  document.getElementById('cssCode').value = '';
  document.getElementById('jsCode').value = '';
  const outputSection = document.getElementById('outputSection');
  outputSection.style.display = 'none';
  const output = document.getElementById('output');
  output.innerHTML = '';
});

document.getElementById('downloadButton').addEventListener('click', function() {
  const htmlCode = document.getElementById('htmlCode').value;
  const cssCode = document.getElementById('cssCode').value;
  const jsCode = document.getElementById('jsCode').value;

  const zip = new JSZip();
  zip.file("index.html", htmlCode);
  zip.file("style.css", cssCode);
  zip.file("script.js", jsCode);

  zip.generateAsync({ type: "blob" }).then(function(content) {
    saveAs(content, "code.zip");
  });
});
