#!/usr/bin/env python3
"""
A module that defines a coroutine that measures total runtime
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that measures total runtime

    Returns:
    The total runtime
    """
    start_time = time.perf_counter()

    # Every coroutine is taken individually with the * & transmit to the await
    await asyncio.gather(*(async_comprehension() for i in range(4)))

    end_time = time.perf_counter()
    total_time = end_time - start_time

    return total_time
