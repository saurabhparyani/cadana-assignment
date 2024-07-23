# Full-Stack Developer Recruitment Task

## Task Overview

Susan’s Sushi Shop 🍣 needs a web application - and you are the (wo)man for it! Your task is to implement key logic for the app.

Please note: The app **should not** be fully functional or deployed. We will not execute any code, and do not have to see anything live or deployed.

We will **discuss** your code during the interview, **not** run it. Focus on key logic and architectural decisions.

**Do not spend more than 3 hours on this task.** It’s meant as something we can use as a talking basis.

## Susan’s Requirements

An web app where my customers can buy sushi, and my kitchen can see what is ordered with my prices and discounts.

### Front-End 1

- An user interface to buy a specified amount of either Sushi A (3£) or Sushi B (4£).
- Before buying, display the total price before and after applicable discount.

### Front-End 2

- Susan’s user interface to show the ordered sushi. This should include per order:
  - The amount of Sushi A and Sushi B.
  - Each discount applied.
  - Total discount.
  - Total price.

### Discounts

- **“10 Deal”**: 10+ pieces = 10% discount on the order.
- **“20 Deal”**: 20+ pieces = 20% discount on the order.
- **“Lunch Deal”**: Orders between 11:00 and 14:00 = 20% discount on the order (can be combined with one of the above deals).

## Implementation

### Database

Make relevant `CREATE TABLE` statement(s) for how you would design the MySQL database.

### Back-end

Python. Or pseudo-code with concepts you believe will also work in Python.

### Front-end

JavaScript/TypeScript (or any framework based on these). JavaScript pseudo-code will also be accepted.

Remeber, point is not a live app, but to provide code and decisions we can talk about.

## Allowed Assumptions

You can assume a simple front-backend connection as follows:

```tsx
// frontend.ts
const response = await fetch("https://backend/your_file.py");
const data = await response.json();
console.log(data); // { hello: "World" }
```

```python
# your_file.py
who = "World"response({ "hello": who })
```

Or anything simple like that fitting your needs. **Do not spend time on setting up actual APIs.**

You may also assume other helper functions, if they are not highly relevant to the core logic of the program. Additionally, you can assume the database interaction as follows:

```python
database.execute(sql_string)  # returns any format you want to assume
```

Feel free to further customize any part of this to better suit your needs.

Focus should be to demonstrate basic skills in full stack web development.

**Bare minimum**, you have to prepare:

- `CREATE TABLE` sql file(s).
- Add to cart function and endpoint.
- Fetch orders endpoint.

Start with that, then spend rest of time improving.

Happy coding ! 👩‍💻
