#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a page of the dataset with deletion-resilient pagination.

        Args:
        index (int): The current start index of the return page
        page_size (int): The total number of items per page

        Returns:
        Dict: A dictionary:
        index: the current start index of the return page. It's the first item
        in the current page
        next_index: the next index to query with. It should be the index of
        the first item after the last item on the current page
        page_size: the total number of items per page
        data: the actual page of dataset
        """
        # Assertions to validate the input parameters
        assert isinstance(index, int) and index >= 0 and index < len(
            self.indexed_dataset())
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.indexed_dataset()
        # Use an async comprehension to fetch data for the current page.
        # This loop iterates through the requested index range.
        # The 'if i in dataset' condition ensures the pagination is
        # deletion-resilient.
        # If an item at a specific index has been deleted, it will simply be
        # skipped
        data = [dataset[i] for i in range(
            index, index + page_size) if i in dataset]

        # Construct the dictionary for the hypermedia response
        return {
            'index': index,
            'next_index': index + page_size if index + page_size < len(
                dataset) else None,
            'page_size': len(data),
            'data': data
        }
