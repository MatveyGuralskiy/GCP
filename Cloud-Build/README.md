# Cloud Build
Service that executes your builds on Google Cloud. Cloud Build can import source code from a variety of repositories or cloud storage spaces, execute a build to your specifications, and produce artifacts such as Docker containers or Java archives

You can work with Cloud Functions, Artifact Registry, Cloud Run and more

In my example I created: Cloud Function, Cloud Build trigger, Cloud Storage

Step 1: Create Cloud Function

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Function-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Function-2.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Function-3.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Function-4.png?raw=true">

Website Link

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Function-5-Website.png?raw=true">

Create Cloud Storage Bucket

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Storage-Bucket.png?raw=true">

Enable API Cloud Resource Manager API

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Open-API.png?raw=true">

Now you can create a Cloud Build trigger

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Build-Trigger-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Build-Trigger-2.png?raw=true">

Make some test change in Repository to see the trigger process

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Build-1.png?raw=true">

Now change App Version in GitHub and see new Deployment with Cloud Function

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/New-Version.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/Cloud-Build-New-Version-2.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Build/Screens/New-Version-Result.png?raw=true">
