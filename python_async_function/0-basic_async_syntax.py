#!/usr/bin/env python3
"""
This module defines an async coroutine that returns a random value
"""
import random
import asyncio


async def wait_random(max_delay=10):
    """
    An asynchronous coroutine that returns a random value

    Args:
    max_delay (int): default value is 10

    Return:
    A random delay between 0 and max_delay included and float value
    """
    return random.uniform(0, max_delay)
