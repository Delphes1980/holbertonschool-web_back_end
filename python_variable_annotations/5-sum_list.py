#!/usr/bin/env python3
"""
This module defines a typed function returning the sum of a list of float
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    A function that returns the sum of a list

    Args:
    input_list (float): a list of float

    Return:
    float: A float as a result
    """
    return sum(input_list)
