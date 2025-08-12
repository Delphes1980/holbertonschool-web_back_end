#!/usr/bin/env python3
"""
This module provides a single method that list all documents in a collection
"""


def list_all(mongo_collection):
    """
    The method to list all documents in a collection

    Args:
        mongo_collection: The collection
    """
    return list(mongo_collection.find())
