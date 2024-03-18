const fs = require('fs');

const text = `
{
    "commit_id": ${process.env.CODEBUILD_RESOLVED_SOURCE_VERSION}
}
`

try {
    fs.writeFileSync("sample.json", text);
    console.log('output-commit-id-in-codebuild.js end');
} catch (e) {
    console.log(e);
}