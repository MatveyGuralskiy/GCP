# Google Kubernetes Engine (EKS AWS and ECS AWS)
GKE provides the operational power of Kubernetes while managing many of the underlying components, such as the control plane and nodes, for you

## Steps to work with GKE

1. Install GCP SDK

2. Enable GCP:

gcloud services enable container.googleapis.com

3. Create Cluster:

gcloud container clusters create matvey-cluster --num-nodes=2

4. Install kubectl GCP plugin

gcloud components install kubectl

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/Install%20gke-plugin.png?raw=true">

5. Connect to the cluster

gcloud container clusters get-credentials matvey-cluster

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/kubectl.png?raw=true">

## Result in Compute Engine and GKE Console

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/Compute-Engine.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE.png?raw=true">


# Now Let's work with GKE like AWS ECS Service
GKE also can be very simple as ECS AWS Service

Go to GCP GKE Console and choose Deploy Container

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-1.png?raw=true">

Let's Config Cluster

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-2.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-3.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-4.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-5.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-6.png?raw=true">

Now Our Cluster has Service, Deployment, Load Balancer, Pods, Nodes, ReplicaSets and more

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-7-Deployed.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-7-Deployed.png?raw=true">

Our Application with Service GKE Load Balancer

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/GKE/Screens/GKE-Container-Application.png?raw=true">
