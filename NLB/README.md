# NLB
Network Load Balancer (NLB) can be used for online gaming with many concurrent players where high performance and low latency are required to ensure a smooth gaming experience

I created NLB with Instance group with 2 instance with Instance template (docker image matveyguralskiy/apache_php:latest)

1. Create Instance Template

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/Instance-Template.png?raw=true">

2. Create Instance group

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/Instance-group-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/Instance-group-2.png?raw=true">

3. Create NLB

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/NLB-1.png?raw=true">

4. Create Health Check

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/Health-Check.png?raw=true">

5. Apply API Network Services API

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/API.png?raw=true">

6. NLB 

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/NLB-2.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/NLB-3.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/NLB-4.png?raw=true">

Results:

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/Result-NLB-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/NLB/Screens/Result-NLB-2.png?raw=true">
