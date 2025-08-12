#!/usr/bin/env python3
"""
This module provides a single method that changes all topics of a document
"""


def update_topics(mongo_collection, name, topics):
	"""
    The function that inserts a new document in a collection

    Args:
        mongo_collection: the collection object
		name: the school name to update
		topics: the list of topics approached in the school
    """
	new_topics = mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
	return new_topics
