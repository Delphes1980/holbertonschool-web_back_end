#!/usr/bin/env python3
"""
This module provides a single method that a list of element
having a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    The function that inserts a new document in a collection

    Args:
        mongo_collection: the collection object
        topics: the specific topic searched
    """
    return list(mongo_collection.find({"topics": topic}))
