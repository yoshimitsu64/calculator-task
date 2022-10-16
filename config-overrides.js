const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env){
    alias({
        '@components': 'src/components',
        '@assets': 'src/assets',
        '@constants': 'src/constants',
        '@styles': 'src/styles',
        '@pages': 'src/pages'
    })(config);
    
    return config;
}