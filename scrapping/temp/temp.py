import json
import random
import os


def insert (input_, output):
    prev = 0
    with open(input_, 'r') as input_file:
        with open(output, 'w+') as output_file:
            for line in input_file:
                data = json.loads(line)
                
                newLen = len(data["ingredients"]) - prev
                prev = len(data["ingredients"])
                while len(data["ingredients"]) != newLen:
                    data["ingredients"].pop(0)
                json.dump(data, output_file)
                output_file.write("\n")
                
    print("-------fin--------")
    return

if __name__ == "__main__":
    insert ("temp.jsonl","output3.jsonl" )
