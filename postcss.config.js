module.exports = {
  plugins: [
    require('precss'),
		require('tailwindcss'),
    require('postcss-nested')({ bubble: ['apply'] }),
    require('autoprefixer')
  ]
}
