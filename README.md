# ORY Hades

This service is a policy decision point. It uses a set of access control policies, similar to
[AWS IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html), in order to determine whether
a subject (user, application, service, car, ...) is authorized to perform a certain action on a resource.

With ORY Hades, you can model Access Control Lists, Role Based Access Control, and fine-grained permission sets.
This server implementation uses [ORY Ladon](https://github.com/ory/ladon) as the decision engine.

ORY Hades is possible to resolve credentials using various authentication mechanisms:

* OAuth 2.0 Access Tokens using the OAuth 2.0 Introspection standard.
* Plaintext when you already know the user ID.
* JSON Web Tokens (coming soon).
* SAML (coming soon).

## Installation

## Documentation

## API Documentation

The RESTful API Documentation is available on our Website.

## User Guide

Coming soon...
