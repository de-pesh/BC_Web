def next_ticket(lastTicket, age, digit):
    while True:
        lastTicket += 1
        if str(lastTicket).count(str(digit)) == age:
            return lastTicket

# Example usage:
lastTicket = 2048
age = 3
digit = 0
next_ticket_number = next_ticket(lastTicket, age, digit)
print(next_ticket_number)
