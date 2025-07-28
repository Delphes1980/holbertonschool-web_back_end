#!/usr/bin/env python3
"""
This module defines an async coroutine that returns a random delay
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    An asynchronous coroutine that returns a random value

    Args:
    max_delay (int): default value is 10

    Return:
    A random delay between 0 and max_delay included and float value
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay