+++
title = "Hardware quickstart guide (aka TL;DR - cut to the chase, what do I BUY???)"
linkTitle = "Hardware quickstart guide"
aliases = ["/hardware/tl-dr-cut-to-the-chase-what-do-i-buy"]
weight = 1
+++

Well, as I said, if it were me, I'd read through all these sections. And
although I can't force you to - I'm not your mother - it's strongly recommended.

But if you're the impatient type, you will need:

- a WINDOWS tablet !
- at least one or two Ardusimple ZED-F9P GPS modules, plus antenna(s)
- If all you want to do is use AOG as a light bar (where it indicates where you
  should steer), you can likely stop there, plug a single F9P into your tablet
  and you're away.

But where's the fun in that? AOG can steer the machine for you... and all you
need to add for that is:

- an AgOpenGPS PCB (the new all-in-one design is recommended)
- an IMU (if going single-antenna)
- a motor to turn the steering wheel
- the Cytron to power either the wheel motor, or the steering hydraulic
- a 12V-24V step-up converter
- access to an RTK station to get your corrections (whether government, your
  neighbour/friend, a community station, a commercial provider or whatever)
  - or, see here [how](https://github.com/lansalot/FreeRTK/blob/main/README.md)
    to build your own for little-money!!

However... did I mention I really recommend you read your way through the
"Getting up and running" sections in their entirety? It could help you make more
informed decisions, as to why what part is needed, what you can do without etc.
