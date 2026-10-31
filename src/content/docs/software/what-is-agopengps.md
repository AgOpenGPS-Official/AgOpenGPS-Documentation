---
title: 'What is AgOpenGPS?'
sidebar:
  order: 1
---

## Quick overview of the AgOpenGPS system

AgOpenGPS (the software, not the overarching project which shares its name) is
an open source Windows program that can be used for autosteer, guidance, section
control, and many other features that are typically found in expensive
name-brand precision agriculture companies.

This program was first written by Brian Tischler who made it available to all
who are interested in learning more about coding and electronics and how they
can benefit farmers all over the world.

We don't want anyone to get hurt or sued so below you'll find a disclaimer. If
you choose to install this stuff on your Ag. Equipment, do so at your own risk.

## What software is required?

AgOpenGPS is actually consists of two programs - AgOpenGPS and AgIO. They are
closely integrated, but serve distinct roles in achieving autosteer. Both are
downloaded together, the latest release is available here:
https://github.com/AgOpenGPS-Official/AgOpenGPS/releases

**AgOpenGPS (short for 'agricultural open source GPS')**: Takes inputs provided
by AgIO and uses these to deliver autosteer in all of its forms (lightbar
guidance, standard autosteer, section control, rate control).

**AgIO (short for 'agricultural input/output')**: Acts as the communication hub
between your tablet and signals from the 'outside world'. GPS data, wheel angle
sensor readings and RTK corrections are all passed through AgIO. In practice you
will use AgIO to set up connections to the various input sources, and remedy any
connection issues that might arise. Otherwise, it will sit in the background for
most of the time.

## What hardware is required?

Not as much as you'd think! For a quick answer to this question, see the handy
[Getting Started guide](/getting-started/) and for all things hardware-related in
full detail, visit the [Hardware section of the documentation](/hardware/).

## Safety and disclaimer

AgOpenGPS is an open-source community project, not a certified product.
Building and using autosteer on real machinery is at your own risk. Read
[Safety and disclaimer](/safety/) before you start.

## Mapping and section control

This software reads NMEA strings for the purpose of recording and mapping
position information for Agricultural use. Also it has up to 16 Sections to
control implements application of product preventing over-application.

Included is an Installer with all the necessary files along with UDP, TCP/IP,
and serial NMEA simulators.
