import hashlib
def Hashing(file):
    with open (file, 'rb') as of:
        content = of.read()
        hash = hashlib.sha256()
        hash.update(content)
        h = hash.hexdigest()
        return h
    return 0

#hashing a file
