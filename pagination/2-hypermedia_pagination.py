#!/usr/bin/env python3
"""This module defines a function returning index pagination."""
import csv
import math
from typing import List, Dict


def index_range(page, page_size):
    """
    Return a tuple containing a start index and an end index.

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


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the object."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return the index pagination of a dataset.

        Args:
        page (int): The current page number
        page_size (int): The total number of items per page

        Returns:
        List[List]: A list of items for the given page or an empty list if
        the page is out of range
        """
        # Check if arguments are an integer and greater than 0
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        data = self.dataset()  # Call all the datas
        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """Return a dictionary with hypermedia pagination.

        Args:
        page (int): The current page number
        page_size (int): The total number of items per page

        Returns:
        Dict: A dictionary:
        page_size: the length of the returned dataset page
        page: the current page number
        data: the dataset page
        next_page: number of the next page, None if no next page
        prev_page: number of the previous page, None if no previous page
        total_pages: the total number of pages in the dataset as an integer
        """
        data = self.get_page(page, page_size)
        # Divide the total number of items by the size of the page
        # then 'math.ceil' rounded up to the nearest whole number
        total_pages = math.ceil(len(self.dataset()) / page_size)

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
            }
