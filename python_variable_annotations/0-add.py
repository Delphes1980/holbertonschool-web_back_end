#!/usr/bin/env python3
"""
This module defines a type function with expected type of arguments and result
"""

def add(a: float, b:float) -> float:
    """
    A function that defines the type of arguments expected

    Args:
    a (float): first argument expected as a float
    b (float): second argument expected as a float

    Return:
    A float is expected as a result
    """
    return a + b
