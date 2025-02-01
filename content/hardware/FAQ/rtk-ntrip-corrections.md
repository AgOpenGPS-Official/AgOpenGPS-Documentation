+++
title = "RTK/NTRIP corrections"
weight = 4
toc_hide = true
+++

RTK works by receiving a correction signal from a nearby base station, that can see the same satellites as your machine. As the base is at a fixed location, it's able to correct for the difference induced by atmospheric delays as the signal makes its way down from the satellite to your rover.

At a high level, you can think of it as being a hint for your machine: "the satellites say I'm here, but that's approximate; the nearby base says I'm actually offset 32.2cm over there instead so take that into account when you're working out my position"