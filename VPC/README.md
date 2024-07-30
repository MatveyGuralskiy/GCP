# VPC (Virtual Private Cloud)
Provides networking functionality to Compute Engine virtual machine (VM) instances, Google Kubernetes Engine (GKE) clusters, and serverless workloads

In GCP a VPC is global network that can span multiple regions. It's not limited to any specific range of IP Addresses (CIDR Blocks)

This approach gives greater flexibility and allows you to add or change subnets without having to reconfigure the entire VPC. You can create different subnets with different CIDR blocks in different regions within the same VPC.

I created 2 VPC's: First VPC get 4 subnets, 2 in USA: private and public, and 2 in Europe: private and public. The second VPC located in Asia with public subnet only

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/VPC-List.png?raw=true">

VPC Firewall rules were open ports: 22, 80, 443, 5432, icmp and more

Don't forget in source enter 0.0.0.0/0 to connect with your IP

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/VPC-Firewall-Rules.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/Firewall-Rule.png?raw=true">

In every Region I created VM instances but in USA I created VM also in Private subnet and I'm gonna connect to him with SSH keygen

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/Instances-List.png?raw=true">

I connected to 3 VM instances and checked ping to Google for Internet Connection and connect to each other with the same Private Keygen

I also created to Private VM Instance in USA for different VM Instances with SSH and connect to Private Subnet NAT with Cloud NAT Service

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/SSH-ASIA.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/SSH-EU.png?raw=true">

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/SSH-USA.png?raw=true">

## Cloud NAT
Google Cloud's managed network address translation service, enables you to provision your application instances without public IP addresses while also allowing them to access the internet—for updates, patching, config management, and more—in a controlled and efficient manner

If you want to connect NAT to Private Subnet use Public type of NAT 

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/Cloud-NAT.png?raw=true">

## VPC Peering
Enables internal IP address connectivity across two Virtual Private Cloud (VPC) networks, regardless of whether they belong to the same project or the same organization

VPC Peering doesn't need accepter of connection, you may create 2 vpc peering connections to each other and it's automatically connects, you don't need to modified routes for that

<img src="https://github.com/MatveyGuralskiy/GCP/blob/main/VPC/Screens/VPC-Peering.png?raw=true">
