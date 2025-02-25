# SwarmAircraftCarrier

<img src="https://github.com/HarryEddward/ContainerizedAircraftCarrier/blob/main/.github/img/banner_full.png?raw=true" alt="alt text" width="400">

## Simple, fast, secure, and production-ready container orchestrator and more DevOps's program.

**Skip Kubernetes complexity, Docker Swarm uncertainty, and Nomad’s quirks.** Use Docker as your trusted container manager, and for container resource optimization we use Containerd with optimized and flexible configurations without worrying about many features. Forget about thinking about how to structure your services, just push your docker-compose files directly to the orchestrator, while having secure and optimized connections for all orchestrated nodes.

## Why SwarmAircraftCarrier?
<img src="https://github.com/HarryEddward/ContainerizedAircraftCarrier/blob/main/.github/img/swarm_light.png?raw=true" alt="alt text" width="225">

### You want:
- 🚀 **Put your services in the fastest and secure way into production**
- ⚡ **Optimized nodes without a lot of configuration**
- 💰 **Do not use expensive cloud services**
- 🐳 **Easy integration with docker-compose.yml files**
- ✍️ **Flexible, concise, avoid repeating yourself configuration**
- 🔄 **Flexible like Kubernetes, but concise like Docker Swarm orchestrator**
- 🔁 **Easy migration from Docker Swarm**

When you think about putting your own programs into production, you think about being able to isolate them so they are safe and not worry about the configuration, not worry about what happens from the orchestrator.

Nowadays, k8s is often used in business environments, and it is often very difficult to build clusters in a simple way and they are done through cloud services. Outside of this, it is already complicated to manage the services themselves, you have to use very verbose charts that are really difficult to manage.

We could say that Docker Swarm is more than enough for an SME, being able to have 1,000 nodes on a master node and it is easy to manage, but if we look closely, they are not well optimized and perhaps we have reason to worry about the future, in this way, we can also say that it is out of maintenance and it is a problem, since we will not know if it will continue to work on the new servers in 2-8 years.

And finally, Nomad, one of the popular orchestrators, keeps its program isolation services in an isolated but easy-to-manage way.

I think that if Docker is very popular for its container management, and Docker Swarm is its ideal orchestrator, why can't we make an optimized orchestrator with many automated production features that are just as useful as those in k8s?

So anyone can manage the program without much effort and without much margin for human error in terms of configurations or restoring an already decreapted service.

Well, I was thinking that we could have all these new features:
- CLI (All functions in a compact way)
- Web GUI (Like the Portainer program, see the slave nodes and the master, with all its functions to be able to use)
- Functions directly for production, avoiding ambiguous functions
- Always encrypted networks
- Automatic CI/CD by projects, through Jenkins native proxy container using Jenkinsfiles
- Automatic secure conexion from shell to nodes slaves, with encrypted list of node slaves

## How use it?

SAC (**SwarmAircraftCarrier**)

### Initialize Node Master
```
docker-sac init
   --ip-advertise-master                             [IP]              [192.168.1.136]
   --pre-configuration-proyect-file                  [PATH_FILE]       [Ex.: https://github.com/[username]/[name_repo]/blob/main/sac.yaml?raw=true]
   --ip-slave-publish-web-orchestrator-manager       [IP]              [192.168.1.137] (Before the conexion, checks if the conexion with SSH is succeded and have internet conexion.)
   --project-name                                    [PROYECT_NAME]    [AppBackend]
   --project-dir                                     [ABS_PATH_DIR]    [/usr/HarryEddward/documents/project]
```

Return:
```
 _____                               ___  _                     __ _   _____                 _            
/  ___|                             / _ \(_)                   / _| | /  __ \               (_)           
\ `--.__      ____ _ _ __ _ __ ___ / /_\ \_ _ __ ___ _ __ __ _| |_| |_| /  \/ __ _ _ __ _ __ _  ___ _ __  
 `--. \ \ /\ / / _` | '__| '_ ` _ \|  _  | | '__/ __| '__/ _` |  _| __| |    / _` | '__| '__| |/ _ \ '__| 
/\__/ /\ V  V / (_| | |  | | | | | | | | | | | | (__| | | (_| | | | |_| \__/\ (_| | |  | |  | |  __/ |    
\____/  \_/\_/ \__,_|_|  |_| |_| |_\_| |_/_|_|  \___|_|  \__,_|_|  \__|\____/\__,_|_|  |_|  |_|\___|_|    
                                                                                                          

-- SwarmAircraftCarrier: Enabled
-- Docker: Connected
** IP PUBLISHED (Node Master) **=> "192.168.1.163"
** PORT (To Connect Node Slaves) **=> "4488"
** PORT (UI Orchestrator Manager) **=> "5577"

List Of Nodes (Via SSH Encrypted File):
- 10.452.67.67 : CONNECTED (Latency 10ms)
- 78.192.89.10 : NOT CONNECTED
- 128.192.67.10 : CONNECTED (Latency 200ms)
- ...
```

###
