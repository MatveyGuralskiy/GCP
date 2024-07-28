# Google Kubernetes Engine
GKE provides the operational power of Kubernetes while managing many of the underlying components, such as the control plane and nodes, for you

## Steps to work with GKE

1. Install GCP SDK

2. Enable GCP:

gcloud services enable container.googleapis.com

3. Create Cluster:

gcloud container clusters create matvey-cluster --num-nodes=2

4. Install kubectl GCP plugin

gcloud components install kubectl

5. Connect to the cluster

gcloud container clusters get-credentials matvey-cluster

## Result in Compute Engine and GKE Console