| Componente |	Technology |	Rapidez 🚀 | Escalabilidad 📈 |
|------------|-----------------|-------------|-----------------|
| Networking (Conexión entre nodos) | Nebula + QUIC |	🔥🔥🔥🔥 Muy rápida | 📈📈📈 Alta (Miles de nodos) |
| DNS Interno | CoreDNS + NATS KV	| 🔥🔥🔥🔥 Muy rápida | 📈📈📈📈 Muy alta |
| Orquestación (Scheduler) | JetStream + Nomad-style Scheduler |	🔥🔥🔥 Rápida |📈📈📈📈 Muy alta |
| Balanceo de Carga |eBPF puro + Envoy solo donde sea necesario |	🔥🔥🔥🔥 Muy rápida | 📈📈📈 Alta |
| Ejecución de Contenedores |	containerd + crun |	🔥🔥🔥🔥 Muy rápida | 📈📈📈📈 Muy alta |
| Seguridad y Cifrado de Red |	WireGuard |	🔥🔥🔥🔥 Muy rápida | 📈📈📈📈 Muy alta |


## Networking
  - QUIC: Protocolo de alta disponibilidad y autoreparacion de streampipes ante fallos en segundo plano, teniendo propiedades de seguridad como el TCP y la retransmision de alta disponibilidad como UDP
  - Nebula: Conexiónes QUIC mas ligeras, mas rápidas, menos costosas de operar que las VPN tradicionales. Ideales para microservicios, conexiónes rápidas y cambiantes.
