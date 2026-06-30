---
title: "Getting Started with Sigma Rules"
description: "A practical guide to writing and deploying Sigma detection rules for security monitoring."
date: "2025-05-01"
tags: ["Sigma", "SOC", "Detection Engineering", "Tutorial"]
published: true
readingTime: "15 min"
category: "technical"
---

# Getting Started with Sigma Rules

## Introduction

Sigma is a generic and open signature format for SIEM systems. It allows you to write detection rules once and convert them to various SIEM query languages.

## Prerequisites

- Basic understanding of SIEM concepts
- Python 3.8+
- A SIEM platform (Splunk, Elastic, etc.)

## What is Sigma?

Sigma rules are written in YAML and describe log event patterns that indicate suspicious or malicious activity:

```yaml
title: Suspicious PowerShell Execution
status: experimental
description: Detects suspicious PowerShell command patterns
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    CommandLine|contains:
      - '-enc'
      - '-EncodedCommand'
      - 'Invoke-Expression'
      - 'IEX'
  condition: selection
level: high
tags:
  - attack.execution
  - attack.t1059.001
```

## Writing Your First Rule

### Step 1: Identify the log source

Determine which logs contain the events you want to detect.

### Step 2: Define the detection logic

Use Sigma's selection and condition syntax to express your detection.

### Step 3: Convert and deploy

Use `sigma-cli` to convert your rule to your SIEM's query language:

```bash
sigma convert -t splunk -p sysmon rule.yml
```

## Best Practices

- Always include **tags** mapping to MITRE ATT&CK
- Set appropriate **level** (low, medium, high, critical)
- Test rules against known-good and known-bad samples
- Document **false positive** scenarios

## Conclusion

Sigma rules provide a vendor-agnostic way to express detection logic, making your security monitoring portable and maintainable.

## References

- [Sigma GitHub Repository](https://github.com/SigmaHQ/sigma)
- [Sigma Specification](https://sigmahq.io/)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
