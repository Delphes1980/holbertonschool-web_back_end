#!/usr/bin/env python3
"""
A module that defines an asynchronous omprehension
"""
import random
import asyncio
from typing import Generator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Generator[float, None, None]:
    """
    Coroutine that collects 10 random numbers and returns them

    Returns:
    10 random numbers
    """
    return [num async for num in async_generator()]
