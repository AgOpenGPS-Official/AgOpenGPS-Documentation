+++
title = "Serial/COM ports"
weight = 5
toc_hide = true
+++

Serial (aka "COM") ports are an old and simple way of having two pieces of
physical hardware talk to each other. You may have heard the term RS232 and
that's typically what we're looking at here.

An actual COM port is pretty hard to come by on modern hardware, having been
largely superseded by USB - but when you plug an Arduino or Teensy via USB into
your computer, it will still start what's known as a "virtual COM port" so it
can talk to your computer.

USB ports aren't ideal for connecting in the tractor, as the vibration and such
can cause them to come loose resulting in your losing connection temporarily.
You may even have to go into AGIO to restart the communication process when the
connection resumes. As a result, if you're building a board, [udp](../udp) is
the preferred connection method.

Not to say that serial/COM ports are completely useless, but in the future,
support for them in AOG may be dropped.
