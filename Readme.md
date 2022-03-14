#### create a build from docker file 
    `docker build -t parse-server:0.1 .`

#### tag a build with remote repository ( docker hub repo)
    `docker tag parse-server:0.1 heeropunjabi/parse-server:0.1`

#### push a image ( build ) to a dockerHub
    `docker push heeropunjabi/parse-server:0.1`


#### start K8 Cluster locally using MiniKube ( within docker container )
    `minikube start --driver=hyperkit`    

#### start K8 Cluster locally using MiniKube ( within docker container )
    `minikube start --driver=hyperkit`        

#### check the status of Minikube cluster is up & running
    `minikube status`  

#### deploy k8 component like service and deployment for mongo & parse
    `kubectl apply -f ./mongo-secret.yaml`      
    `kubectl apply -f ./mongo.yaml`      
    `kubectl apply -f ./mongo-config.yaml`
    `kubectl apply -f ./mongo-config.yaml`
    `kubectl apply -f ./parse.yaml`

#### check all the component ( service and deployment) are running
    `kubectl get all`      

#### connect to a pod
    `kubectl exec -it <POD-UUID> -- /bin/sh`          

#### stream logs from Pod
    `kubectl logs <POD-UUID> -f`              

#### get url for your service
    `minikube service --url parse-service`                  

#### stop the K8 Cluster
    `minikube stop`     

#### Delete the K8 Cluster
    `minikube delete`                          
    