"""
This module defines an async coroutine that returns a random delay
"""
import asyncio
import random
wait_random = __import__('0-basic_async_syntax').wait_random
from typing import List


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
        delays.append(wait_random(max_delay))

    # Gather all the delays after the wait_random finished
    results = await asyncio.gather(*delays)

    result = []

    for delay in results:
        if not result:  # If list empty
            result.append(delay)
        else:
            inserted = False
            for i in range(len(result)):
                if delay < result[i]:  # Find the position for insertion
                    result.insert(i, delay) 
                    inserted = True # Flag to indicate insertion done
                    break
            if not inserted:
                result.append(delay)  # Insertion at the end

    return result
