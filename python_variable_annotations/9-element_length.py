#!/usr/bin/env python3
"""
This module defines a typed function that calculates the length of
elements in an iterable
"""
from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    A function that calculates the length of each element in a iterable of
    sequences

    Args:
    lst: (Iterable(Sequence)): a iterable containing multiplie sequences
    (string, list, tuple)

    Return
    List[Tuple[Sequence, int]] : A list of tuples where each tuple contains
    the sequence form the original list 'lst' and its corresponding length
    (int)
    """
    return [(i, len(i)) for i in lst]
