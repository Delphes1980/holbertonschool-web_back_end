import csv
import math
from typing import List


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Function that returns the index pagination of a dataset
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

        current_page = index_range(page, page_size)
        data = self.dataset()  # Call all the datas

        if current_page[0] >= len(data) or current_page[1] > len(data):
            return []
        return self.__dataset[current_page[0]: current_page[1]]
