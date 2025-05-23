# 1. Use Kubernetes for Orchestration

## Status
Accepted

## Context
Need container orchestration that supports:
- Service discovery
- Auto-scaling
- Rolling deployments

## Decision
Use Kubernetes via Amazon EKS for production, and Kubernetes via Docker Desktop for local development.
Docker Desktop provides a lightweight and native way to run a single-node Kubernetes cluster on macOS/Windows, simplifying the local development environment.
For more advanced testing or CI scenarios, kubeadm can be used to set up clusters closer to production behavior.

## Consequences
- Need to learn Kubernetes concepts
- Additional complexity in local setup