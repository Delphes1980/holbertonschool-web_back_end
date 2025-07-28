#!/usr/bin/env python3
"""
This module contains a function that returnan async Task
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    An function that returns an async Task

    Args:
    max_delay (int): the maximum value returned by wait_random

    Return:
    Task: An async task
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task
