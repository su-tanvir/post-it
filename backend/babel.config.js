module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@controllers': './src/controllers',
          '@models': './src/models',
          '@views': './src/views'

        }
      }
    ]
  ],
  ignore: ['**/*.test.ts', '**/*.spec.ts']
}
