#!/usr/bin/env python3
"""
This module defines a function returning index pagination
"""


def index_range(page, page_size):
    """
    A function that returns a tuple containing a start index and an end index

    Args:
    page (int): the number of the page
    page_size (int): the number of the items in the page

    Return:
    A tuple of size 2 containing a start index and an end index
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    index = (start_index, end_index)
    return index
