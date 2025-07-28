#!/usr/bin/env python3
"""
This module defines a type function with expected type of arguments and result
"""


def concat(str1: str, str2: str) -> str:
    """
    A function that concatenate 2 typed arguments expected

    Args:
    str1 (str): first argument expected as a string
    str2 (str): second argument expected as a string

    Return:
    A string is expected as a concatenated string
    """
    return str1 + str2
