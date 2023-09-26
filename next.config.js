const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = ( phase ) => {
    if ( phase === PHASE_DEVELOPMENT_SERVER){
        return{
            env: {
                mongodb_username: 'koketsobogopanenov24',
                mongodb_password: 'zFw9JKhIFncPjjgg',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'blog-message-dev'
            },
        }
    }


    return {env: {
            mongodb_username: 'koketsobogopanenov24',
            mongodb_password: 'zFw9JKhIFncPjjgg',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'blog-message'
        },
    }
}