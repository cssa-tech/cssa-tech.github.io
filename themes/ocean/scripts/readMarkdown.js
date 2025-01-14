const fs = require('fs');
const path = require('path');

hexo.extend.helper.register('renderMarkdown', function (filePath) {
  const fullPath = path.join(hexo.source_dir, filePath);
  if (fs.existsSync(fullPath)) {
    const mdContent = fs.readFileSync(fullPath, 'utf8');
    return hexo.render.renderSync({ text: mdContent, engine: 'markdown' });
  } else {
    return '<p>The specified markdown file could not be found.</p>';
  }
});
