#!/usr/bin/env python3
"""
This module defines an async coroutine that returns a random delay
"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    An asynchronous coroutine that returns a list of random delays

    Args:
    n (int): the number of times the random delay must be generated
    max_delay (int): the maximum value returned by wait_random

    Return:
    List[float]: A list of delays (float) in sorting order
    """
    delays = []
    for _ in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        delays.append(task)

    result_sorted = []

    # Iterate over tasks as they complete
    for future in asyncio.as_completed(delays):
        tasks = await future  # Await the next completed task

        if not result_sorted:  # If list empty
            result_sorted.append(tasks)
        else:
            inserted = False
            for i in range(len(result_sorted)):
                if tasks < result_sorted[i]:  # Find the position for insertion
                    result_sorted.insert(i, tasks)
                    inserted = True  # Flag to indicate insertion done
                    break
            if not inserted:
                result_sorted.append(tasks)  # Insertion at the end

    return result_sorted
