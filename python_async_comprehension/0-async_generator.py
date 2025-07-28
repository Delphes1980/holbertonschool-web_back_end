#!/usr/bin/env python3
"""
A module that defines an asynchronous generator
"""
import random
import asyncio
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that loops 10 times, wait 1 second each time,
    and yields a random number between 0 and 10

    Yields:
    A random float between 0 and 10
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
