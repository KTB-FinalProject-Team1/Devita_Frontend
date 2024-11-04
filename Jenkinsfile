pipeline {
    agent { label 'ec2-devita-front' }

    environment {
        GIT_BRANCH = 'main'
        GIT_REPO = 'https://github.com/KTB-FinalProject-Team1/Devita_Frontend'
        S3_BUCKET = 'devita-front'
        AWS_REGION = 'ap-northeast-2'
        AWS_CREDENTIALS = credentials('ayaan_aws')
        BUILD_DIR = './build'
        
        AWS_S3_BUCKET = 'devita-env'
        S3_ENV_FILE = '.env'
    }

    stages {
        // 이전 빌드 중지 단계 추가
        stage('Check for Previous Builds') {
            steps {
                script {
                    // 현재 Job에서 실행 중인 이전 빌드를 가져옴
                    def job = Jenkins.instance.getItemByFullName(env.JOB_NAME)
                    def currentBuildNumber = currentBuild.number

                    // 이전 빌드가 실행 중이면 중단시킴
                    job.builds.each { build ->
                        if (build.isBuilding() && build.number < currentBuildNumber) {
                            echo "Cancelling build #${build.number}"
                            build.doStop()  // 이전 빌드를 중단
                        }
                    }
                }
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"

            }
        }
        
        stage('Set ENV') {
            steps {
                script {
                    sh '''
                    export AWS_ACCESS_KEY_ID=$(echo $AWS_CREDENTIALS | cut -d':' -f1)
                    export AWS_SECRET_ACCESS_KEY=$(echo $AWS_CREDENTIALS | cut -d':' -f2)

                    aws s3 cp s3://$AWS_S3_BUCKET/$S3_ENV_FILE .env --region $AWS_REGION
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                withEnv(['CI=false']) {
                    sh 'npm run build'
                }
            }
        }

        stage('Set S3') {
            steps {
                script {
                    sh '''
                    // export AWS_ACCESS_KEY_ID=$(echo $AWS_CREDENTIALS | cut -d':' -f1)
                    // export AWS_SECRET_ACCESS_KEY=$(echo $AWS_CREDENTIALS | cut -d':' -f2)

                    aws s3 rm s3://${S3_BUCKET} --recursive --region ${AWS_REGION}
                    aws s3 cp ${BUILD_DIR} s3://${S3_BUCKET}/ --recursive --region ${AWS_REGION}
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Build and upload to S3 succeeded!'
        }
        failure {
            echo 'Build or upload to S3 failed!'
        }
    }
}
