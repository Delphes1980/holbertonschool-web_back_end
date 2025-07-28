#!/usr/bin/env python3
"""
This module defines a typed function returning a function that multiply
a float
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    A function that returns a function that multiplies a float by the
    argument 'multiplier'

    Args:
    multiplier (float): the argument that multiplies a float

    Return
    function : A function that multiplies a float by the argument 'multiplier'
    """
    def multiplier_function(n: float):
        """
        The function that multiplies
        """
        return n * multiplier
    return multiplier_function
