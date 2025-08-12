#!/usr/bin/env python3
"""
This module provides a single method that list all documents in a collection
"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """
    The function that inserts a new document in a collection

    Args:
        kwargs: any numbers of arguments
    """
    doc = mongo_collection.insert_one(kwargs)
    return doc.inserted_id
