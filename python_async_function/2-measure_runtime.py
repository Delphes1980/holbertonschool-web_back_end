#!/usr/bin/env python3
"""
This module contains a function to measure time execution
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    An asynchronous function that measure time execution of the function
    'wait_n'

    Args:
    n (int): the number of times the random delay must be generated
    max_delay (int): the maximum value returned by wait_random

    Return:
    float: A float as the result
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    total_time = end - start
    return total_time / n
