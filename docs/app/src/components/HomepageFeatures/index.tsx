import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {motion} from 'motion/react';

type FeatureItem = {
  title: string;
  imageSrc: string;  // Cambiado de Svg a imageSrc
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Concise & Powerfull like Docker Swarm',
    imageSrc: require('@site/static/img/logo.png').default,
    description: (
      <>
        It uses its CLI simplicity similar to Docker Swarm but with the power similar to complex k8s but easier to manage
      </>
    ),
  },
  {
    title: 'Scalable like K8s without complexity for your SaaS',
    imageSrc: require('@site/static/img/swarm_light.png').default,
    description: (
      <>
        Being easy to handle the CLI and having little hoverhead, you can create thousands of nodes but <code>without the damn k8s configuration.</code>
      </>
    ),
  },
  {
    title: 'Extremly Fast & Low Hoverheading',
    imageSrc: require('@site/static/img/cloud.png').default,
    description: (
      <>
        Connections between nodes through Nebula & QUIC, making it scalable and very fast, and avoiding the hoverhead that k8s uses iptables with ips virtualization
      </>
    ),
  },
  {
    title: 'Fast CI/CD pipelines with integrated native Jenkins',
    imageSrc: require('@site/static/img/supply.png').default,
    description: (
      <>
        Make your tests and deployments much faster by having the program integrated with Jenkins and not having to worry about integration with slave nodes
      </>
    ),
  },
  {
    title: 'Extremly performant continer runner',
    imageSrc: require('@site/static/img/container.png').default,
    description: (
      <>
        Uses crun to run containers as fast as possible, running containers x5 times faster
      </>
    ),
  },
  {
    title: 'Production Components & Functions by default',
    imageSrc: require('@site/static/img/disk.png').default,
    description: (
      <>
        Forget about testing in test environments and production environments, sometimes they get mixed up and cause more human errors, with less verbosity we can do tests that are just as safe and without as much configuration as the production one itself.
      </>
    ),
  },
  {
    title: 'UI Conatiner Managment like Portainer for better productivity',
    imageSrc: require('@site/static/img/submarino.png').default,
    description: (
      <>
        Improve process visualization with a web UI where you can view the processes of your own services without having to pay third parties.
      </>
    ),
  },
  {
    title: 'Monolithic Ready Program without complicated configurations',
    imageSrc: require('@site/static/img/faro.png').default,
    description: (
      <>
        Say goodbye to having to flexibly configure what you want, without knowing how secure you are in that environment. Because it is secure and compact, you avoid configuration problems that you have to look at with a magnifying glass. But let's not forget that we don't lose internal flexibility.
      </>
    ),
  },
  {
    title: '"Do not repeat yourself" configurations for your global/services configuration yaml',
    imageSrc: require('@site/static/img/contract.png').default,
    description: (
      <>
        Copy and paste is fine for detailed processes, but it's a lot of time that we can't afford to waste if there was a small bug and we handle more than 10,000 active users.
      </>
    ),
  },
];

// Modificado el componente Feature para usar <img> en lugar de SVG
function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <motion.div
      className="text--center"
      initial={{
        scale: 1,
        translateY: 1
      }}
      whileHover={{
        scale: 1.1,
        translateY: -30
      }}
      >
        <img className={styles.featureSvg} src={imageSrc} alt={title} role="img" />
      </motion.div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <motion.p
        style={{'padding': 5}}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <div style={{'display': 'flex', 'width': '100%', 'justifyContent': 'center', marginTop: 30, 'marginLeft': 20}}>
        <Heading as='h1'>Don't lose sales due to a poorly configured DevOps program</Heading>
      </div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      
    </>
    
  );
}