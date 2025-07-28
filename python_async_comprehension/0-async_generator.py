#!/usr/bin/env python3
"""
A module that defines an asynchronous generator
"""
import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that loops 10 times, wait 1 second each time,
    and yields a random number betwee 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
    return
