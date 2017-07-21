# This Is The World Site

[![Build Status](https://travis-ci.org/scientific-defense-force/this-is-the-world-site.svg?branch=master)](https://travis-ci.org/scientific-defense-force/this-is-the-world-site) [![Join the chat at https://gitter.im/scientific-defense-force](https://badges.gitter.im/scientific-defense-force.svg)](https://gitter.im/scientific-defense-force/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Introduction

This repo is for [thisistheworld.net](https://thisistheworld.net). The goal of this site is to communicate the level of economic inequality in the world. This includes the desperateness of the world's large majority of poor people and the first worlds parasitic relationship with them.

The target audience is the first world middle class.

## Why?

Capitalism and globalization are causing a lot of problems, but nothing will change unless the global middle class are aware of the issues. Currently they appear to be vaguely aware of the inequality but don't perceive the parasitism.

## Technical

To run the site install [docker](https://www.docker.com/products/docker) (note: on linux you will also need to manually install [docker compose](https://docs.docker.com/compose/install)) and then

```bash
auto/dev-environment
```

Site can be accessed at http://localhost:4000

To update gems run

```
auto/update-gems
```

To run in prod mode

```bash
auto/prod-environment
```

### Browser Support ###

These browsers and versions http://browsehappy.com
