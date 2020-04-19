const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        console.log(`\n`, fileNode.relativePath);

        console.log(createFilePath({ node, getNode, basePath: `pages` }));
    }
}