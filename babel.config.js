module.exports = {
    presets: [
      '@babel/preset-react',
      [ 
        '@babel/preset-env',
        { 
          corejs: 2,
          useBuiltIns: 'usage',
          targets: {
            node: 'current',
          },
        },
        '@vue/babel-preset-jsx'
      ],
    ],
    sourceType: "unambiguous"
  };