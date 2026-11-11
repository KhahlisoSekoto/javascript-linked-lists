# JavaScript Singly Linked List ⛓️

This project is my own implementation of a **Singly Linked List** using modern JavaScript (ES6 modules).

I built it as part of **The Odin Project** curriculum to understand how linked lists work, how nodes connect to each other, and how data is stored and accessed.

## 🚀 Features

This project includes different methods for adding, removing, finding and working with nodes in a linked list.

### Core Functionality

- `append(value)`: Adds a new node to the end of the list.
- `prepend(value)`: Adds a new node to the beginning of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at a specific position.
- `pop()`: Removes the first node from the list and returns its value.
- `contains(value)`: Checks if a value exists in the list. Returns `true` if found and `false` if not.
- `findIndex(value)`: Finds the position of a value in the list. Returns `-1` if the value is not found.
- `toString()`: Converts the linked list into a readable string, showing how the nodes are connected.

### Extra Credit Features

- `insertAt(index, ...values)`: Adds one or more new nodes at a specific position in the list.
- `removeAt(index)`: Removes a node from a specific position and connects the remaining nodes.

## 📂 Project Structure

```text
javascript-linked-lists/
├── Node.js          # Creates individual nodes and stores their values and connections.
├── LinkedList.js    # Contains the linked list class and its methods.
└── main.js          # Runs the code and tests the linked list methods.
```

## 🛠️ Getting Started

### Requirements

Make sure you have [Node.js](https://nodejs.org) installed on your computer.

### How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/KhahlisoSekoto/javascript-linked-lists.git
   ```

2. Open the project folder:

   ```bash
   cd javascript-linked-lists
   ```

3. Run the project:

   ```bash
   node main.js
   ```

## 💡 What I Learned

While building this project, I learned:

- **How nodes connect:** Unlike arrays, linked lists use nodes that connect to the next node through references.
- **Working with references:** I learned how to follow and update connections between nodes when adding or removing items.
- **Understanding indexes:** I had to be careful when moving through the list to make sure I was working with the correct position.
- **Handling edge cases:** I learned how to deal with situations such as empty lists, invalid indexes and trying to access nodes that do not exist.

This project helped me understand linked lists better and improved my problem-solving skills in JavaScript.