#!/usr/bin/env python3
"""
This module defines a typed function returning the sum of a mixed list
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    A function that returns the sum of a mixed list

    Args:
    k (str): first argument is a string
    v (int, float): second argument is an integer or a float

    Return
    tuple : A tuple where k is the first argument, and v is the square of
    the int or float
    """
    return (k, v * v)
