# Application Load Balancer
The Application Load Balancer distributes HTTP and HTTPS traffic to backends hosted on a variety of Google Cloud platforms—such as Compute Engine, Google Kubernetes Engine (GKE), Cloud Storage, and Cloud Run—as well as external backends connected over the internet or by using hybrid connectivity

First of all we should create Instance template

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/ALB/Screens/ALB-2.png?raw=true">

And Instance group (it's like target group in AWS)

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/ALB/Screens/ALB-3.png?raw=true">

Now create ALB with Frontend and Backend

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/ALB/Screens/ALB-1.png?raw=true">

## Result of ALB Deployment Containers

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/ALB/Screens/Result.png?raw=true">

