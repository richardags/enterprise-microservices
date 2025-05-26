# Enterprise Microservices System

Modern cloud-native microservices architecture demonstrating:

- Multi-language services (Node.js, Java, Python, Go)
- Kubernetes orchestration
- Event-driven architecture with Kafka
- CI/CD automation
- Infrastructure as Code

## Architecture
![High-Level Architecture](docs/architecture/overview.svg)

## Local Development with Docker Desktop

This project uses Docker Desktop's built-in Kubernetes for local development:

1. Enable Kubernetes in Docker Desktop settings
2. Run `kubectl get nodes` to verify
3. All deployments will target this local cluster

## Getting Started
[Development setup instructions...]