# Triage Process and Github Labels for Framing

This document describes how the Framing team uses labels and milestones 
to triage issues on github. The basic idea of the process is that
caretaker only assigns a component and type (bug, feature) label. The 
owner of the component than is in full control of how the issues should 
be triaged further.

Once this process is implemented and in use, we will revisit it to see 
if further labeling is needed.

## Components

A caretaker should be able to determine which component the issue 
belongs to. The components have a clear piece of source code associated
with it.

* `comp: name`: `@caretaker`

## Type

What kind of problem is this?

* `type: RFC / discussion / question`
* `type: bug`
* `type: chore`
* `type: feature`
* `type: performance`
* `type: refactor`

## Caretaker Triage Process

It is the caretaker's responsibility to assign `comp: *` to each new
issue as they come in. The reason why we limit the responsibility of the
caretaker to this one label is that it is likely that without domain
knowledge the caretaker could mislabel issues or lack knowledge of
duplicate issues.

## Component's owner Triage Process

### Assigning Issues to Milestones

## Triaged vs Untrained PRs

## Special Labels
