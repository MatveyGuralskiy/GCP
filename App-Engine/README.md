# App Engine (Elastic Beanstalk AWS)
App Engine is a fully managed, serverless platform for developing and hosting web applications at scale

At the beggining we should create configurations for App Engine

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/App-Engine-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/App-Engine-2.png?raw=true">

Now we use GCP SDK for App Engine

You can use my Application directory with files (also with *app.py* file for App Engine)
```
# To Init SDK
gcloud init
# Start to Deploy App Engine Application
gcloud app deploy
# Go to Website URL
gcloud app browse
# To see the list of versions
gcloud app versions list
```

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/App-Engine-3-CLI.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/App-Engine-4.png?raw=true">

This is our Website

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/Website-1.png?raw=true">

After that I changed my Application to Version 2 and use
```
# To deploy new version
gcloud app deploy
```
<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/App-Engine-List.png?raw=true">

Now our Application deployed with Zero-downtime

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/App-Engine/Screens/Website-2.png?raw=true">
