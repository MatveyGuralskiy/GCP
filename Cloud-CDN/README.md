# Cloud CDN (CloudFront AWS)
Content Delivery Network uses Google's global edge network to serve content closer to users, which accelerates your websites and applications. Cloud CDN works with the global external Application Load Balancer or the classic Application Load Balancer to deliver content to your users

Steps to use Cloud CDN

1. Create Instance Template
<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/Instance-Template.png?raw=true">
2. Create Health Check
<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/Health-Check.png?raw=true">
3. Create Instance Group (wait and check if Instance/s work/s correctly) for example I created 2 VM Instances
<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/Instance-Group.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/VM-Instances.png?raw=true">
4. Create Application Load Balancer
<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/ALB-Backend.png?raw=true">

5. Enable Cloud CDN on ALB (wait around 10 minutes)

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/ALB.png?raw=true">

## Result:

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/ALB-Website-1.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/ALB-Website-2.png?raw=true">

Let's check the cache Cloud CDN on Application with F5 and F12 for Developer Tools --> Network --> PNG/JPEG Image --> Header

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/Cloud-CDN/Screens/Cache-Check.png?raw=true">
