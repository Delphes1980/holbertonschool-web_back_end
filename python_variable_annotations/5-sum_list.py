#!/usr/bin/env python3
"""
This module defines a typed function returning the sum of a list of float
"""


input_list: list[float]


def sum_list(input_list) -> float:
    """
    A function that returns the sum of a list

    Args:
    input_list (float): a list of float

    Return:
    float: A float as a result
    """
    return sum(input_list)
