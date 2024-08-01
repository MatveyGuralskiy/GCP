# Cloud Deploy
Makes continuous delivery to GKE, Cloud Run services and jobs, and Anthos easy and powerful

In my Example I wanna deploy docker container app on nodes of GKE Cluster with Cloud Deploy

First of all I create GKE Cluster with GCP SDK

```
gcloud container clusters create matvey-cluster --num-nodes=2
```

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cluster.png?raw=true">

Now I configure Cloud Deploy

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cloud-Deploy-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cloud-Deploy-2.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cloud-Deploy-3.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cloud-Deploy-4.png?raw=true">


Approve it and see the results

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cloud-Deploy-5-Approve.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-Deploy/Screens/Cloud-Deploy-6-Result.png?raw=true">
