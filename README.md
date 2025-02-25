# SwarmAircraftCarrier

<img src="https://github.com/HarryEddward/ContainerizedAircraftCarrier/blob/main/.github/img/banner_full.png?raw=true" alt="alt text" width="400">

## Simple, fast, secure, and production-ready container orchestrator and more DevOps's program.

**Skip Kubernetes complexity, Docker Swarm uncertainty, and Nomad’s quirks.** Use Docker as your trusted container manager, and for container resource optimization we use Containerd with optimized and flexible configurations without worrying about many features. Forget about thinking about how to structure your services, just push your docker-compose files directly to the orchestrator, while having secure and optimized connections for all orchestrated nodes.

## Why SwarmAircraftCarrier?
<img src="https://github.com/HarryEddward/ContainerizedAircraftCarrier/blob/main/.github/img/swarm_light.png?raw=true" alt="alt text" width="225">

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
