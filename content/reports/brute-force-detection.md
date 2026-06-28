---
title: "Brute Force Attack Detection with Splunk"
description: "Analysis of a brute force attack campaign targeting SSH services, detected using Splunk correlation rules and Sigma signatures."
date: "2025-03-10"
tags: ["SOC", "Splunk", "Sigma", "Linux", "MITRE ATT&CK"]
published: true
readingTime: "12 min"
---

# Brute Force Attack Detection with Splunk

## Executive Summary

This report documents the detection and analysis of a coordinated brute force attack campaign targeting SSH services across multiple servers in the production environment.

## Detection

The attack was initially detected through a Sigma rule triggering on excessive failed authentication attempts:

```yaml
title: SSH Brute Force Attempt
status: stable
logsource:
  product: linux
  service: auth
detection:
  selection:
    action: failure
    service: sshd
  condition: selection | count() by src_ip > 20
  timeframe: 5m
level: high
```

## Attack Timeline

| Time | Event | Source IP |
|------|-------|----------|
| 02:15 UTC | First failed attempt | 192.168.1.100 |
| 02:15-02:45 UTC | 847 failed attempts | 192.168.1.100 |
| 02:46 UTC | Successful login | 192.168.1.100 |
| 02:47 UTC | Lateral movement detected | Internal |

## MITRE ATT&CK Mapping

- **T1110.001** — Brute Force: Password Guessing
- **T1021.004** — Remote Services: SSH
- **T1078** — Valid Accounts

## Recommendations

1. Implement account lockout policies
2. Deploy fail2ban on all SSH-exposed servers
3. Enforce key-based authentication
4. Monitor for post-compromise activity

## References

- [MITRE ATT&CK - Brute Force](https://attack.mitre.org/techniques/T1110/)
- [Sigma Rules Repository](https://github.com/SigmaHQ/sigma)
