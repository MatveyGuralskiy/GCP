# Artifact Registry (ECR AWS)
Artifact Registry integrates with Cloud Build and other continuous delivery and continuous integration systems to store packages from your builds

Could work Regional and Multi-Regional

# Steps to work with Artifact Registry

Open CLI in your Application path with Dockerfile

```
# To check Registries list
gcloud artifacts repositories list

# To start work with Docker
gcloud auth configure-docker REGION-docker.pkg.dev

# For example:
gcloud auth configure-docker us-east1-docker.pkg.dev

Open Docker Demon (For example Docker Desktop)

# Now use regular commands in CLI for Build and Push
# Build Docker Image
docker build -t LOCATION-docker.pkg.dev/YOUR_PROJECT_ID/REPOSITORY_NAME/IMAGE_NAME:TAG .

# For example:
docker build -t us-east1-docker.pkg.dev/staging-430906/php-application/app-php:V1.0 .

# Push it to Artifact Registry
docker push LOCATION-docker.pkg.dev/YOUR_PROJECT_ID/REPOSITORY_NAME/IMAGE_NAME:TAG

# For example:
docker push us-east1-docker.pkg.dev/staging-430906/php-application/app-php:V1.0

# To check if it works correct use pull and run
# For example:
docker pull us-east1-docker.pkg.dev/staging-430906/php-application/app-php:V1.0

docker run -d -p 80:80 us-east1-docker.pkg.dev/staging-430906/php-application/app-php:V1.0
```

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">