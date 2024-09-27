const path = require('path');
const fs = require('fs');
const { transformSync } = require('@swc/core');


function transform() {
  const srcPath = path.join(process.cwd(), 'src/index.js');
  const source = fs.readFileSync(srcPath, 'utf-8');
  // without minify
  // const code = source;
  const { code } = transformSync(source, {
    jsc: {
      minify: {
        compress: {
          unused: false,
        },
        mangle: true
      },
      target: 'es2021',
    },
    minify: true
  });

  const libPath = path.join(process.cwd(), 'lib');
  if (!fs.existsSync(libPath)) {
    fs.mkdirSync(libPath);
  }
  fs.writeFileSync(path.join(libPath, 'index.js'), code);
}

transform();
