# Cloud CDN (CloudFront AWS)
Content Delivery Network uses Google's global edge network to serve content closer to users, which accelerates your websites and applications. Cloud CDN works with the global external Application Load Balancer or the classic Application Load Balancer to deliver content to your users

Steps to use Cloud CDN

1. Create Instance Template

2. Create Health Check

3. Create Instance Group (wait and check if Instance/s work/s correctly) for example I created 2 VM Instances

4. Create Application Load Balancer

5. Enable Cloud CDN on ALB (wait around 10 minutes)

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">

<img src="">



## Result:

<img src="">

<img src="">

Let's check the cache Cloud CDN on Application with F5 and F12 for Developer Tools --> Network --> PNG/JPEG Image --> Header

<img src="">