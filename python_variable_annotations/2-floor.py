#!/usr/bin/env python3
import math
"""
This module defines a type function that returns the nearest integer of a float
"""


def floor(n: float) -> int:
    """
    A function that returns the nearest integer of a float

    Args:
    n (float): the number to round down

    Return:
    An integer is expected as a result
    """
    return math.floor(n)
