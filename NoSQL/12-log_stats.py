#!/usr/bin/env python3
"""
This module provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def log_stat():
    """
    The function that inserts a new document in a collection

    Args:
        mongo_collection: the collection object
        topics: the specific topic searched
    """
    # Connexion to the server
    client = MongoClient("mongodb://localhost:27017")
    logs_collection = client.logs.nginx

    # Count the total of documents in the collection
    total_logs = logs_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")

    # Return the total of documents sorted by method using aggregation
    method_number = logs_collection.aggregate([
        {"$group": {"_id": "$method", "count": {"$sum": 1}}}
    ])

    # Get the number of documents by method
    methods_to_check = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods_to_check:
        count = method_number.get(method, 0)
        print(f"\t method {method}: {count}")

    # Get the number of documents with the method GET
    status_log = logs_collection.count_documents({"method": "GET",
                                                  "path": "/status"})
    print(f"{status_log} status check")


if __name__ == "__main__":
    log_stat()
