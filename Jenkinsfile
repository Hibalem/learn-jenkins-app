pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }
    }
}

 /*environment {
        NETLIFY_SITE_ID = '83ecd942-52da-49fb-9303-f0c357b035cf'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }*/
