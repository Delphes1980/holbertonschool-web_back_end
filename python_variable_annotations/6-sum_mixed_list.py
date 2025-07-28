#!/usr/bin/env python3
"""
This module defines a typed function returning the sum of a mixed list
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    A function that returns the sum of a mixed list

    Args:
    mxd_lst (int, float): a list of float and integer

    Return:
    float: A float as a result
    """
    return sum(mxd_lst)
